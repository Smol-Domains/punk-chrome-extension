module.exports = {
  
  manifest: {
    name: 'Smol Domains',
    description: 'This extension allows you to access .smol domains through a browser URL field or in block explorers.',
    version: '1.0',
    manifest_version: 3,
    background: {
      service_worker: 'background.js'
    },
    permissions: [
      "storage",
      'webNavigation'
    ],
    icons: { 
      100: "thickerextlogo.png"
    },
    action: {
      default_popup: 'index.html'
    },
  },
  
  entry: {
    main: './src/main.js',
    background: './src/background.js'
  }
  
}