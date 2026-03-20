<template>
  <!--
    Main App — Terminal aesthetic portfolio
    Multi-page layout with shared NavBar and Footer
  -->
  <div class="relative bg-base-bg min-h-screen flex flex-col text-term-text font-mono">
    <!-- Navigation -->
    <NavBar />

    <!-- Page Content -->
    <main class="flex-1 flex flex-col">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
</script>
