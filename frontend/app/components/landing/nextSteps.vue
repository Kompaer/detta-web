<template>
  <UTimeline size="3xl" :default-value="0" :items="items" />
</template>

<script setup lang="ts">
const items = ref([
  {
    date: "bis zum 11.01.2026",
    title: "Anmeldung",
    description:
      "Um einen reibungslosen Ablauf für das GameJam-Wochenende zu garantieren müssen sich Präsenz-Teilnehmer anmleden.",
    icon: "i-material-symbols:login-rounded",
  },
  {
    date: "Freitag 16.01.2026 - 16 Uhr",
    title: "Kennenlernen",
    description: "Wir treffen uns in LE 104 (Campus Duisburg).",
    icon: "i-fluent:people-team-16-filled",
  },
  {
    date: "Freitag 16.01.2026 - 18 Uhr",
    title: "Los geht's",
    description:
      "In Gruppen werdet ihr jetzt beginnen eure Spiele zu entwickeln.",
    icon: "i-material-symbols:sprint-rounded",
  },
  {
    date: "Sonntag 18.01.2026 - 18 Uhr",
    title: "Abgabe",
    description:
      "Ihr habt eure Spiele fertig entwickelt und ladet sie bei itch.io hoch.",
    icon: "i-lucide-check-circle",
  },
  {
    date: "TBA",
    title: "Siegerehrung",
    description:
      "Wir spielen alle Spiele gemeinsam un kühren den Sieger mit dem Jury und dem Community-Preis.",
    icon: "i-material-symbols-trophy-rounded",
  },
]);
</script>
