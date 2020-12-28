const port = 8589; // dev 端口号
module.exports = {
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/api": {
        target: process.env.VUE_APP_URL,
        changeOrigin: true, // 是否改变域名
        ws: true,
        onProxyReq:function (proxyReq, req, res, options) {
          if (req.body) {
            let bodyData = JSON.stringify(req.body);
            proxyReq.setHeader('Content-Type','application/json');
            proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
            proxyReq.write(bodyData);
          }
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'view': '@/view',
        'services': '@/services'
      }
    }
  }
}
