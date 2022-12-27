export {};
declare const __COMMIT_HASH__: string;

declare global {
  interface Window {
    __COMMIT_HASH__: string;
  }
}
