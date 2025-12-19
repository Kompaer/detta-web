<template>
  <UFormField :name="field.id">
    <UInput
      class="w-full"
      v-model="model"
      type="email"
      id="email"
      :placeholder="field.placeholder"
      icon="i-material-symbols-alternate-email-rounded"
    ></UInput>
  </UFormField>
</template>
<script setup lang="ts">
const model = defineModel({ type: String });
const props = defineProps({
  field: { type: Object as PropType<FormField>, required: true },
  publisher: String,
});
</script>
