<template>
  <div class="w-full p-4 flex flex-col space-y-2">
    <div class="flex flex-col">
      <div class="font-bold text-lg">
        <BaseText
          :block_key="field.title_key"
          :fallback="field.title"
          :publisher="publisher"
        />
        <span v-if="field.required" class="text-error-500">*</span>
      </div>
      <div>
        <BaseText
          :block_key="field.description_key"
          :fallback="field.description"
          :publisher="publisher"
          mdc
        />
      </div>
    </div>
    <FormFieldEmail
      v-if="field.type === 'email'"
      v-model="model"
      :publisher="publisher"
      :field="field"
    />
    <FormFieldButtons
      :publisher="publisher"
      :field="field"
      v-model="model"
      v-else-if="field.type === 'buttons'"
    />
    <FormFieldShortText
      v-model="model"
      :publisher="publisher"
      :field="field"
      v-else-if="field.type === 'short_text'"
    />
    <FormFieldDropdown
      v-model="model"
      :publisher="publisher"
      :field="field"
      v-else-if="field.type === 'dropdown'"
    />
    <FormFieldUrl
      v-model="model"
      :publisher="publisher"
      :field="field"
      v-else-if="field.type === 'url'"
    />
    <FormFieldText
      v-model="model"
      :publisher="publisher"
      :field="field"
      v-else-if="field.type === 'text'"
    />
    <FormFieldPhone
      v-model="model"
      :publisher="publisher"
      :field="field"
      v-else-if="field.type === 'phone'"
    />
    <FormFieldCheckbox
      v-model="model"
      :publisher="publisher"
      :field="field"
      v-else-if="field.type === 'boolean'"
    />
    <FormFieldDate
      v-model="model"
      :publisher="publisher"
      :field="field"
      v-else-if="field.type === 'date'"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  field: { type: Object as PropType<FormField>, required: true },
  publisher: String,
});

const model = defineModel({ type: Object });
</script>
