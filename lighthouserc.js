module.exports = {
  ci: {
    collect: {
        url: ['http://localhost:8080/'],
        startServerCommand: 'node app.js'
    }
    upload: {
      target: "temporary-public-storage",
    },
  },
};
