import type { RegistrableApp } from 'qiankun'

interface SubAppProps {
  container: string
}

const microApps: RegistrableApp<SubAppProps>[] = []
window.microApps.forEach((app) => {
  microApps.push({
    name: app.name,
    entry: app.entry,
    container: '#subapp-container',
    activeRule: app.activeRule,
  })
})

export default microApps
