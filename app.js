'use strict';
const path = require('path');
const fs = require('fs');

module.exports = app => {

  app.use(function* (next) {
    if (app.webpack_build_success) {
      yield* next;
    } else {
      if (app.webpack_loading_text) {
        this.body = app.webpack_loading_text;
      } else {
        const filePath = path.resolve(__dirname, './lib/template/loading.html');
        this.body = app.webpack_loading_text = fs.readFileSync(filePath, 'utf8');
      }
    }
  });


  if (app.view) {
    app.view.resolve = function(name) {
      return Promise.resolve(name);
    };
  }

  app.messenger.on('webpack_success', data => {
    if (app.vue && data) {
      const renderBundle = app.vue.renderBundle;
      const { bundle, renderOptions } = data;

      app.webpack_build_success = true;
      app.vue.bundleCache = false;
      app.vue.renderOptions = {...app.vue.renderOptions, ...renderOptions};
      app.vue.renderBundle = (name, context, options) => {
        return renderBundle.bind(app.vue)(bundle, context, options);
      };
    }
  });

};
