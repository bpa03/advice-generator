/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly APP_TITLE: string
  readonly APP_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
