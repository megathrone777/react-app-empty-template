interface ImportMetaEnv {
  PUBLIC_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface RsbuildTypeOptions {
  strictImportMetaEnv: true;
}
