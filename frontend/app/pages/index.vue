<template>
  <UPage v-if="form && form.form">
    <UPageHero
      :title="form.form.name"
      description="Um einen reibungslosen Ablauf für das GameJam-Wochenende zu garantieren benötigen wir von allen Teilnehmern, die vorort teilnehmen wollen, ein paar Daten. Vor- und Nachname sowie Geburtsdatum werden ans Gebäudemanagment weitergegeben, damit die blauen Karten erstellt werden können."
    />
    <UPageBody><FormBase :form="form.form" :use_id="form.id" /></UPageBody>
  </UPage>
</template>
<script setup lang="ts">
import { useGetTextBlocks } from "~/composables/useTranslation";

const form: Ref<undefined | FormUse> = ref(
  await useGetForm("171a152e-f275-4c7e-a37d-e0392e1e46b9")
);
if (form.value && form.value.form && form.value.form.publisher_form) {
  const translations = await useGetTextBlocks(
    form.value.form.publisher_form.publisher_id,
    "de"
  );
  console.log(translations);
}

useSeoMeta({ title: "DETTA Anmeldung" });
</script>
