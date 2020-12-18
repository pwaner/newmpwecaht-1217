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
            // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
            proxyReq.setHeader('Content-Type','application/json');
            proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
            // stream the content
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
