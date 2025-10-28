<template>
    <UApp class="app">
      <header>
        <Header />
      </header>
      <main>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </main>
      <footer>
        <Footer />
      </footer>

    </UApp>
</template>
<script setup lang="ts">
import Header from "~/component/header/header.vue";
import Footer from "~/component/footer/footer.vue";
</script>
