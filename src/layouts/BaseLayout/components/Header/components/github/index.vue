<script setup>
import { Github } from 'lucide-vue-next'
import { BrowserUtils } from '@/utils/index.ts'
import { AppMetadata } from '@/constants/index.ts'
</script>

<template>
  <Github
    :size="24"
    class="cursor-pointer"
    @click="() => BrowserUtils.openNewWindow(AppMetadata.REPO_GITHUB_URL)"
  />
</template>
