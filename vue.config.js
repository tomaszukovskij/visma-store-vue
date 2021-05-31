module.exports = {
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3008/",
  //       changeOrigin: true,
  //     },
  //   },
  // },
  devServer: {
    proxy: "http://localhost:3008",
  },
};
