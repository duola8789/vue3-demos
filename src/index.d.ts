export {};
declare const __COMMIT_INFO__: string;

declare global {
  interface Window {
    __COMMIT_INFO__?: string;
  }
}
