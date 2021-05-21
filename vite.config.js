const { createVuePlugin } = require("vite-plugin-vue2");

export default {
  plugins: [createVuePlugin()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3004/products/",
  //       changeOrigin: true,
  //       secure: false,
  //       ws: true,
  //     },
  //   },
  // },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3004/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
};
