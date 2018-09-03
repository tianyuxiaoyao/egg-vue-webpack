'use strict';
const Koa = require('koa');
const cors = require('kcors');
const app = new Koa();
app.use(cors());

module.exports = agent => {
  // 在这里写你的初始化逻辑

  // 也可以通过 messenger 对象发送消息给 App Worker
  // 但需要等待 App Worker 启动成功后才能发送，不然很可能丢失
  agent.messenger.on('egg-ready', () => {
    const {
      clientConfig,
      serverConfig,
      templatePath,
      port,
    } = agent.config.webpackVue;

    require('./lib/setup-dev-server')(app, port, templatePath, clientConfig, serverConfig, (bundle, renderOptions) => {
      agent.messenger.sendToApp('webpack_success', {
        bundle,
        renderOptions,
      });
    });

    app.listen(port, () => {
      console.log(`server started at localhost:${port}`);
    });

  });
};
