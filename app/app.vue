<template>
  <UApp>
    <header>
      <Header />
    </header>
    <NuxtPage />
    <footer>
      <Footer />
    </footer>
  </UApp>
</template>
<script setup lang="ts">
import Header from "~/component/header/header.vue";
import Footer from "~/component/footer/footer.vue";
</script>
