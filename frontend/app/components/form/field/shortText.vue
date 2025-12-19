<template>
  <UFormField :name="field.id">
    <UInput class="w-full" v-model="model"></UInput>
  </UFormField>
</template>
<script setup lang="ts">
const model = defineModel({ type: String });
const props = defineProps({
  field: { type: Object as PropType<FormField>, required: true },
  publisher: String,
});
</script>
