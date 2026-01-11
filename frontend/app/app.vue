<script setup lang="ts">
import { format } from "date-fns";

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "DETTA GameJam Anmeldung";
const description =
  "Melde dich jetzt für den 09. DETTA GameJam an! Der GameJam ist ein Projekt des Fachschaftsrat Informatik und der Fakultät für Informatik an der Universität Duisburg Essen.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage:
    "https://image.mavis-app.de/backend/img/0069eae7-080d-4ebc-b610-1da2470e637a/big_webp.webp",
  twitterImage:
    "https://image.mavis-app.de/backend/img/0069eae7-080d-4ebc-b610-1da2470e637a/big_webp.webp",
  twitterCard: "summary_large_image",
});

const timeRemaining = ref(0);
const timerInterval = ref<any | null>(null);
const isFinished = ref(false);

const calculateTime = () => {
  const now = new Date().getTime();
  const target = new Date(1768172399000).getTime();
  const distance = target - now;

  if (distance < 0) {
    timeRemaining.value = 0;
    isFinished.value = true;
    stopTimer();
  } else {
    timeRemaining.value = distance;
  }
};

const stopTimer = () => {
  if (timerInterval.value) {
    clearInterval(timerInterval.value);
    timerInterval.value = null;
  }
};

const days = computed(() =>
  Math.floor(timeRemaining.value / (1000 * 60 * 60 * 24))
);
const hours = computed(() =>
  Math.floor((timeRemaining.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
);
const minutes = computed(() =>
  Math.floor((timeRemaining.value % (1000 * 60 * 60)) / (1000 * 60))
);
const seconds = computed(() =>
  Math.floor((timeRemaining.value % (1000 * 60)) / 1000)
);

// 6. Lifecycle Hooks
onMounted(() => {
  calculateTime();
  timerInterval.value = setInterval(calculateTime, 1000);
});

onUnmounted(() => {
  stopTimer();
});
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="h-8!"
          ><img
            src="https://image.mavis-app.de/backend/img/abb775c7-2f67-465c-b602-4f32f5e0097d/thumbnail_webp.webp"
            class="h-10 object-cover"
        /></NuxtLink>
      </template>

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <div class="stars fixed -z-10 bg-neutral-200 dark:bg-neutral-950"></div>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          DETTA • © {{ new Date().getFullYear() }}
        </p>
      </template>
      <template #right>
        <NuxtLink :to="'https://www.manic.vision/imprint'">
          <UButton variant="link">Impressum</UButton></NuxtLink
        >
      </template>
    </UFooter>
  </UApp>
</template>

<style lang="css">
#space,
.stars {
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.stars {
  width: 100%;
  height: 100vh;

  background-image: 
    /* Layer 1: Small, dense stars */ radial-gradient(
      1px 1px at 25px 5px,
      #fff,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(1px 1px at 50px 25px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(1.5px 1.5px at 125px 45px, #eee, rgba(0, 0, 0, 0)),
    /* Layer 2: Medium, scattered stars */
      radial-gradient(2px 2px at 100px 150px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 200px 50px, #ddd, rgba(0, 0, 0, 0)),
    /* Layer 3: Occasional bright/large stars */
      radial-gradient(3px 3px at 50px 100px, #fff, rgba(0, 0, 0, 0));

  /* Different sizes for each layer to break the repetition */
  background-size: 250px 250px, 350px 350px, 500px 500px;
  background-repeat: repeat;
}
</style>
