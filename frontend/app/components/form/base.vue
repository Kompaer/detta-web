<template>
  <div class="md:w-1/2 mx-auto" v-if="!submitted">
    <UForm :schema="schema" :state="state">
      <div class="flex flex-col rounded-2xl overflow-hidden">
        <FormFieldBase
          v-for="field in form.fields"
          :publisher="form.publisher_form?.publisher_id"
          :key="field.id"
          :field="field"
          v-model="state[field.id]"
        />
        <UFormField :name="password" class="absolute opacity-0 -left-12500">
          <UInput v-model="state[password]" />
        </UFormField>
      </div>
      <div class="py-4 flex justify-end">
        <UButton @click="submit" :disabled="lock_submit">Submit</UButton>
      </div>
    </UForm>
  </div>
  <FormSuccess v-else />
</template>
<script setup lang="ts">
import * as v from "valibot";
import { useSubmitForm } from "~/composables/useForm";

const props = defineProps({
  use_id: String,
  form: { type: Object as PropType<Form>, required: true },
});
const password = "5169a54f-2c0a-4e4d-812b-ad5d00a617c4"; // This is the Honeypot
const submitted = ref(false);
const lock_submit = ref(false);

const schema = computed(() => {
  const fields: Record<string, any> = {};
  for (let i = 0; i < props.form.fields.length; i++) {
    const field = props.form.fields[i];
    if (!field) continue;
    let pipe = undefined;
    switch (field.type) {
      case FormFieldType.SHORT_TEXT:
      case FormFieldType.TEXT:
      case FormFieldType.PHONE:
        pipe = v.pipe(
          v.string("Bitte ausfüllen"),
          v.maxLength(64000, "Eingabe zu lang")
        );
        break;
      case FormFieldType.EMAIL:
        pipe = v.pipe(
          v.string("Bitte ausfüllen"),
          v.email("Keine gültige E-Mail"),
          v.maxLength(512, "E-Mail zu lang")
        );
        break;
      case FormFieldType.URL:
        pipe = v.pipe(
          v.string("Bitte ausfüllen"),
          v.url("Valide URL eingeben"),
          v.maxLength(4096, "URL zu lang")
        );
        break;
      case FormFieldType.BOOLEAN:
        pipe = v.pipe(v.boolean("Kein Boolean"));
        break;
    }
    if (pipe) {
      fields[field.id] = field.required ? pipe : v.optional(pipe);
    }
  }
  return v.object(fields);
});

const state: Ref<Record<string, any>> = ref({});
onMounted(() => {
  for (let i = 0; i < props.form.fields.length; i++) {
    const field = props.form.fields[i];
    if (!field) continue;
    switch (field.type) {
      case FormFieldType.SHORT_TEXT:
      case FormFieldType.TEXT:
      case FormFieldType.PHONE:
        state.value[field.id] = undefined;
        break;
      case FormFieldType.EMAIL:
        state.value[field.id] = undefined;
        break;
      case FormFieldType.URL:
        state.value[field.id] = undefined;
        break;
      case FormFieldType.BOOLEAN:
        state.value[field.id] = false;
        break;
    }
  }
  state.value[password] = undefined;
});

async function submit() {
  lock_submit.value = true;
  try {
    const result = v.parse(schema.value, state.value);
  } catch (e) {
    console.log(e);
    useToast().add({
      color: "error",
      title: "Eingaben unvollständing",
    });
    lock_submit.value = false;
    return;
  }
  try {
    console.log(state.value);
    if (!props.use_id) return;
    const result = await useSubmitForm(props.use_id, state.value);
    if (!result) throw new Error();
    useToast().add({
      color: "success",
      title: "Antwort gesendet",
      description: "Vielen Dank",
    });
    lock_submit.value = false;
    submitted.value = true;
  } catch (e) {
    useToast().add({
      color: "error",
      title: "Serverfehler",
      description: "Bitte versuche es in ein paar Minuten erneut",
    });
  }
  lock_submit.value = false;
}
</script>
