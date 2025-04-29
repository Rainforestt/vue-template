import { computed, type App } from 'vue'
import { createI18n } from 'vue-i18n'

import { STORAGE_KEY_LOCALE_LANG } from '@/constants'
import { useLocalStorage } from '@vueuse/core'
import enUS from './langs/en-US.json'
import zhCN from './langs/zh-CN.json'

export enum Language {
  'en-US' = 'en-US',
  'zh-CN' = 'zh-CN',
}

const storageLocale = useLocalStorage(STORAGE_KEY_LOCALE_LANG, Language['zh-CN'])
const i18n = createI18n<[typeof zhCN], Language>({
  locale: storageLocale.value,
  fallbackLocale: Language['zh-CN'],
  messages: {
    [Language['zh-CN']]: zhCN,
    [Language['en-US']]: enUS,
  },
})

export const t = i18n.global.t
export const locale = computed({
  get: () => storageLocale.value,
  set: (lang: Language) => {
    storageLocale.value = lang
    i18n.global.locale = lang
  },
})

export function setupI18n(app: App) {
  app.use(i18n)
}
