<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="main">
      <router-view />
    </main>
    <Footer class="mt-auto" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
})
</script>
