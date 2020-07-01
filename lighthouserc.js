module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:8080/"],
      startServerCommand: "node app.js",
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://fierce-hamlet-72426.herokuapp.com",
      token: "e19499c7-c41b-4fb7-8221-1b3641ce8478",
    },
  },
};
