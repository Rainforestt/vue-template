/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_LOCALSTORAGE_PREFIX: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
