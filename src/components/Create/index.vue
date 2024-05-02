<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div
    @click="() => router.push('/edit/1')"
    class="border-2 border-slate-100 border-solid rounded-lg hover:text-orange-500 shadow-xl flex justify-center items-center gap-2 h-[300px] w-[200px] bg-slate-200 cursor-pointer hover:bg-white"
  >
    <Plus class="w-5 h-5 hover:text-orange-500 cursor-pointer" />

    <span class="hover:text-orange-500 text-xl cursor-pointer">Create new</span>
  </div>
</template>
