<template>
  <div
    class="md:w-1/2 mx-auto flex justify-center flex-col items-center space-y-8"
  >
    <div>
      <img
        class="h-48 floating-object"
        src="https://image.mavis-app.de/backend/img/b2e95180-015d-477e-9c40-4ba7a6bbef58/big_webp.webp"
      />
    </div>
    <div class="font-bold">Anmeldung erfolgreich abgeschickt!</div>
    <div>Der Tab kann jetzt geschlossen werden</div>
    <div class="flex space-x-4">
      <NuxtLink to="/anmeldung" target="_blank">
        <UButton variant="outline" color="primary">Erneut ausfüllen</UButton>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="css">
.floating-object {
  /* Adjust size as needed */
  width: 200px;
  height: auto;

  /* Apply the animation */
  animation: spaceDrift 12s infinite ease-in-out;

  /* Optional: Smooth out the rendering of the rotating image */
  backface-visibility: hidden;
  will-change: transform;
}

@keyframes spaceDrift {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    /* Moves slightly up and right, tilts clockwise */
    transform: translate(15px, -25px) rotate(4deg);
  }
  66% {
    /* Moves down and left, tilts counter-clockwise */
    transform: translate(-10px, 15px) rotate(-3deg);
  }
  100% {
    /* Returns to start for a seamless loop */
    transform: translate(0, 0) rotate(0deg);
  }
}
</style>
