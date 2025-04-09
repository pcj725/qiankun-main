// 子应用配置
window.microApps = [
  /**
   * name: 子系统名称，需要与子系统 vite.config.ts 文件中的 qiankun("app1") 一致
   * entry：子系统入口，需要与子系统 package.json 文件中的脚本端口一致 "serve": "vite --port 3001"，生产环境手动修改
   * activeRule：子系统激活规则，需要与路由保持一致
   */
  { name: 'app1', entry: 'http://localhost:3001', activeRule: '/subApp1' },
]
