import type { App } from 'vue'

export interface IAppConfig {
  name: string
}

const appConfig: IAppConfig = {
  name: 'v3-admin',
}

export function loadConfig(app: App) {
  app.config.globalProperties.$appConfig = appConfig
}
