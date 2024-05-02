<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { LayoutGrid } from 'lucide-vue-next'
</script>

<template>
  <LayoutGrid
    :size="24"
    class="cursor-pointer hover:text-orange-500"
    @click="() => router.push('/resumes')"
  />
</template>
