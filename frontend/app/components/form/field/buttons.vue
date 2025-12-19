<template>
  <div class="gap-4 w-full grid pt-2" :style="grid_style">
    <FormFieldButtonsButton
      v-for="option in buttons"
      :key="option.value"
      :button="option"
      :publisher="publisher"
      v-model="model"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  field: { type: Object as PropType<FormField>, required: true },
  publisher: String,
});

const model = defineModel({ type: Array as PropType<string[]>, default: [] });

const buttons = computed(() => {
  const options = (props.field.properties as ChoiceFieldProps).options;
  if (!options) return [];
  return options;
});

const grid_style = ref("");

onMounted(() => {
  const amount = ((props.field.properties as ChoiceFieldProps).options || [])
    .length;
  const columns = amount > 4 ? 4 : amount;
  grid_style.value = `grid-template-columns: repeat(${columns}, minmax(0, 1fr));`;
});
</script>
