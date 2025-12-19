<template>
  <UPage v-if="form && form.form">
    <UPageHero :title="form.form.name" />
    <UPageBody><FormBase :form="form.form" :use_id="form.id" /></UPageBody>
  </UPage>
</template>
<script setup lang="ts">
import { useGetTextBlocks } from "~/composables/useTranslation";

const form_id = useRoute().params.id as string;
const form: Ref<undefined | FormUse> = ref(await useGetForm(form_id));
if (form.value && form.value.form && form.value.form.publisher_form) {
  const translations = await useGetTextBlocks(
    form.value.form.publisher_form.publisher_id,
    "de"
  );
  console.log(translations);
}
</script>
