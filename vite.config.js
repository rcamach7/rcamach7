import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const staticPagePaths = new Set([
  '/apps',
  '/guildway',
  '/guildway/privacy',
  '/guildway/support',
  '/guildway/content-policy',
])

function staticPageRoutes() {
  const servePage = (request, response, next) => {
    const url = new URL(request.url, 'http://localhost')
    const path = url.pathname.replace(/\/$/, '')

    if (!staticPagePaths.has(path)) {
      next()
      return
    }

    request.url = `${path}/index.html${url.search}`
    next()
  }

  return {
    name: 'static-page-routes',
    configureServer(server) {
      server.middlewares.use(servePage)
    },
    configurePreviewServer(server) {
      server.middlewares.use(servePage)
    },
  }
}

export default defineConfig({
  plugins: [react(), staticPageRoutes()],
})
