<template>
  <UFormField :name="field.id">
    <UTextarea class="w-full" v-model="model" />
  </UFormField>
</template>
<script setup lang="ts">
const model = defineModel({ type: String });
const props = defineProps({
  field: { type: Object as PropType<FormField>, required: true },
  publisher: String,
});
</script>
