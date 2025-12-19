<template>
  <UFormField :name="field.id">
    <UCheckbox v-model="model" label="Hier zustimmen" />
  </UFormField>
</template>
<script setup lang="ts">
const model = defineModel({ type: Boolean });
const props = defineProps({
  field: { type: Object as PropType<FormField>, required: true },
  publisher: String,
});
</script>
