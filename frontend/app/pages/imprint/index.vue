<template>
  <div
    class="h-fit w-full pt-16 text-white text-sm md:text-md flex justify-center items-center flex-col"
  >
    <div class="h-16"></div>
    <div class="h-full w-full flex flex-col p-8 lg:w-1/2">
      <MDC :value="page" v-if="page" />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
let { data: page } = await useAsyncData<string>(
  `sp-impressum`,
  () => {
    return useGetSpecialPage("Impressum");
  },
  {
    default: () => "# Nothing to see" + "\n normal text",
  }
);
</script>
