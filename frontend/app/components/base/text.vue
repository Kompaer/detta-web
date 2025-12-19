<template>
  <MDC v-if="mdc" :value="text" class="p-0! m-0!" />
  <span v-else>{{ text }}</span>
</template>

<script setup lang="ts">
import { useTextStore } from "~/composables/translationStore";

const props = defineProps({
  publisher: String,
  block_key: String,
  fallback: String,
  mdc: Boolean,
});

const text: Ref<string> = ref(props.fallback || "");

if (props.publisher && props.block_key) {
  console.log(props.block_key);
  try {
    text.value = await useTextStore().getText(
      props.publisher,
      props.block_key,
      "de"
    );
    console.log(text.value);
  } catch (e) {}
}
</script>
