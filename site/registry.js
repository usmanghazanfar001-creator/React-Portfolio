// Each entry is a function (assets) => page definitions. Add new page modules here.
import { servicePages } from './pages/services.js'
import { blogPages } from './pages/blog.js'
import { servicesHubPages } from './pages/services-hub.js'
import { trustPages } from './pages/trust.js'

export const sources = [servicesHubPages, servicePages, trustPages, blogPages]
