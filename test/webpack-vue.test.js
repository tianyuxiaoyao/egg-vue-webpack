'use strict';

const mock = require('egg-mock');

describe('test/webpack-vue.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/webpack-vue-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, webpackVue')
      .expect(200);
  });
});
