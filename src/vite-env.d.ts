/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DECORATION_IMAGE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
