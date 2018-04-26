import BaseApp from '@revas/base-vue-app'

import stenografoStore from '@/modules/stenografo/stenografo.store'
import stenografoRoutes from '@/modules/stenografo/stenografo.router'

const routes = [].concat(stenografoRoutes)

const storeModules = {
  stenografo: stenografoStore(process.env.VUE_APP_REVAS_API_ENDPOINT)
}

BaseApp.install(storeModules, routes, {
  apiEndpoint: process.env.VUE_APP_REVAS_API_ENDPOINT,
  defaultRoute: '/editor'
})
