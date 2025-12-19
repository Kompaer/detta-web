<template>
  <div
    class="w-full p-2 text-center rounded-2xl"
    :class="classes"
    @click="select"
  >
    <BaseText
      :block_key="button.label_key"
      :fallback="button.label"
      :publisher="publisher"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  button: { type: Object as PropType<ChoiceOption>, required: true },
  publisher: String,
  selected: { type: Array as PropType<string[]> },
});

const i = ref(0);

const model = defineModel({ type: Array as PropType<string[]> });

const classes = computed(() => {
  i.value = i.value;
  if (model.value && model.value.includes(props.button.value))
    return "bg-primary-200 dark:bg-primary-700 hover:bg-primary-300 dark:hover:bg-primary-600";
  else
    return "bg-neutral-200 dark:bg-neutral-700  hover:bg-neutral-300 dark:hover:bg-neutral-600";
});

function select() {
  const value = props.button.value;
  if (!model.value) model.value = [];
  else {
    console.log(model.value.find((m) => m === value));
    if (model.value.find((m) => m === value)) {
      model.value = model.value.filter((v) => v !== value);
      i.value++;
      return;
    }
  }
  model.value.push(value);
  i.value++;
}
</script>
