<template>
  <UPage>
    <UPageHero title="DETTA GameJam 09" description="" :links="links" />
    <UPageSection title="Was steht an?">
      <LandingNextSteps />
    </UPageSection>
  </UPage>
</template>
<script setup lang="ts">
import { useGetTextBlocks } from "~/composables/useTranslation";

useSeoMeta({ title: "DETTA GameJam" });

const links = [
  {
    label: "Discord",
    to: "http://discord.detta.space",
    icon: "i-ic:baseline-discord",
  },
  {
    label: "Instagram",
    to: "http://instagram.detta.space",
    icon: "i-mdi:instagram",
  },
  {
    label: "itch.io",
    variant: "subtle",
    to: "https://inko-game-jam.itch.io/",
    icon: "i-cib:itch-io",
  },
];
</script>
