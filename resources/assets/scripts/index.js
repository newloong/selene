import Router from './utils/Router.js'
import common from './routes/common.js'
import templateCustom from '@Templates/template-custom/route.js'

// Modify the 'routes' object to include or remove other routes
const routes = {
  common,
  templateCustom,
}

// Usually, you won't need to modify anything below this line.
const router = new Router(routes)

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  router.loadEvents()
} else {
  document.addEventListener(
    'DOMContentLoaded',
    router.loadEvents.bind(router),
    false
  )
}
