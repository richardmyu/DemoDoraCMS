'use strict';

const mock = require('egg-mock');
const { before, after, iteratee } = require('lodash');

describe('test/framework.test.js', () => {
  let app;

  before(() => {
    app = mock.app({
      baseDir: 'example',
      framework: true,
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  iteratee('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('framework-example-123456')
      .expect(200);
  });
});
