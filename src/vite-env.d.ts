/// <reference types="vite/client" />
interface Window {
  microApps: {
    name: string
    entry: string
    activeRule: string
  }[]
}
