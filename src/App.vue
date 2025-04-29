<template>
  <div class="flex h-screen flex-col bg-white dark:bg-black dark:text-white">
    <select v-model="locale">
      <option :value="Language['en-US']">{{ Language['en-US'] }}</option>
      <option :value="Language['zh-CN']">{{ Language['zh-CN'] }}</option>
    </select>

    <div>
      <img
        src="https://supabase.com/dashboard/_next/image?url=%2Fdashboard%2Fimg%2Fsupabase-logo.svg&w=32&q=75&dpl=dpl_3PJuySc1Ziwy5bDBneaLSojcaXT8"
      />
    </div>

    <div class="m-8 border border-solid border-red-900">{{ t('message') }}</div>
    <Button @click="toggleDark()" variant="secondary" size="sm" class="text-muted-foreground">
      isDark::{{ isDark }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Language, locale, t } from '@/locale'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
