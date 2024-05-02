<script setup lang="ts">
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
import Content from './components/Content/index.vue'
</script>

<template>
  <n-layout class="h-screen">
    <Header />
    <Content />
    <Footer />
  </n-layout>
</template>
