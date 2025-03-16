<script setup>
import { PanelRightClose } from 'lucide-vue-next'
import { NTooltip, NIcon } from 'naive-ui'
</script>

<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NIcon size="20">
        <PanelRightClose
          :size="20"
          class="cursor-pointer hover:text-orange-500"
        />
      </NIcon>
    </template>
    布局
  </NTooltip>
</template>
