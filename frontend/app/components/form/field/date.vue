<template>
  <UFormField :name="field.id">
    <UPopover :reference="inputDate?.inputsRef[3]?.$el">
      <UButton
        color="neutral"
        variant="subtle"
        icon="i-lucide-calendar"
        aria-label="Select a date"
        >{{
          formattedDate
            ? format(formattedDate, "dd.MM.yyyy")
            : "Datum auswählen"
        }}</UButton
      >

      <template #content>
        <UCalendar v-model="date" class="p-2" />
      </template>
    </UPopover>
  </UFormField>
</template>
<script setup lang="ts">
import { CalendarDate } from "@internationalized/date";
import { format } from "date-fns";
const model = defineModel({ type: String });
const props = defineProps({
  field: { type: Object as PropType<FormField>, required: true },
  publisher: String,
});
const inputDate = useTemplateRef("inputDate");
const formattedDate: Ref<Date | undefined> = ref();
const date: Ref<CalendarDate> = computed({
  set: (d: CalendarDate) => {
    if (!d) {
      return;
    }
    console.log(d);
    formattedDate.value = new Date(d.year, d.month - 1, d.day);
    console.log(formattedDate.value);
    const month = String(d.month).padStart(2, "0");
    const day = String(d.day).padStart(2, "0");
    model.value = `${d.year}-${month}-${day}T00:00:00.000Z`;
    //model.value = formattedDate.value.toISOString();
  },
  get: () => {
    if (!formattedDate.value) {
      const today = new Date();
      return new CalendarDate(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate()
      );
    }
    return new CalendarDate(
      formattedDate.value.getFullYear(),
      formattedDate.value.getMonth() + 1,
      formattedDate.value.getDate()
    );
  },
});
</script>
