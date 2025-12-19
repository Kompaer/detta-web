<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "Nuxt Starter Template";
const description =
  "A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterCard: "summary_large_image",
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

        <TemplateMenu />
      </template>

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <div class="stars fixed -z-10 bg-neutral-950"></div>
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
