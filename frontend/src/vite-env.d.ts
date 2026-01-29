/// <reference types="vite/client" />

type ViteAppEnv = {
  readonly VITE_APP_VERSION?: string
  readonly VITE_BUILD_DATE?: string
}

declare interface ImportMetaEnv extends ViteAppEnv {}
