module.exports = {
  env: 'development',
  service: {
    port: 8000,
    contextPath: '/slipper'
  },
  database: {
    ip: '139.196.182.46',
    port: 3306,
    name: 'node-server',
    username: 'root',
    password: 'll5271211314',
  },
  file: {
    path: '/src/resources/static/files',
    url: 'http://localhost:8888/files',
    size: 1024 * 1024 * 2
  },
  folder: {
    dao: 'dao',
    service: 'service',
    controller: 'controller'
  }
}