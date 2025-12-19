<template>
  <div class="gap-4 w-full grid pt-2" :style="grid_style">
    <USelectMenu
      v-if="properties.allowMultiple"
      class="w-full"
      :items="items"
      :multiple="properties.allowMultiple"
      v-model="value_multiple"
    />
    <USelectMenu v-else class="w-full" :items="items" v-model="value_single" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  field: { type: Object as PropType<FormField>, required: true },
  publisher: String,
});

const model = defineModel({ type: Array as PropType<string[]>, default: [] });
const properties = props.field.properties as ChoiceFieldProps;
const options = properties.options;

const items: Ref<Item[]> = computed(() => {
  if (!options) return [];
  return options;
});

interface Item {
  label: string;
  value: string;
}

const grid_style = ref("");

const value_single: Ref<Item | undefined> = computed({
  get: () => {
    return items.value.find((i) => i.value === model.value[0]);
  },
  set: (v: Item | undefined) => {
    if (v) model.value = [v.value];
    else model.value = [];
  },
});

const value_multiple: Ref<Item[]> = computed({
  get: () => {
    return items.value.filter((i) => model.value.includes(i.value));
  },
  set: (v: Item[]) => {
    model.value = v.map((l) => l.value);
  },
});

onMounted(() => {
  const amount = ((props.field.properties as ChoiceFieldProps).options || [])
    .length;
  const columns = amount > 4 ? 4 : amount;
  grid_style.value = `grid-template-columns: repeat(${columns}, minmax(0, 1fr));`;
});
</script>
