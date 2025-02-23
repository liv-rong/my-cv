<script setup>
import { Github } from 'lucide-vue-next'
import { BrowserUtils } from '@/utils/index.ts'
import { AppMetadata } from '@/constants/index.ts'
import { NTooltip } from 'naive-ui'
</script>

<template>
  <Github
    :size="20"
    class="cursor-pointer hover:text-orange-500"
    @click="() => BrowserUtils.openNewWindow(AppMetadata.REPO_GITHUB_URL)"
  />
</template>
