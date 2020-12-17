'use strict';

module.exports = app => {
  require('./router/api')(app);

  // FRONT_ROUTER_BEGIN
  require('./router/home')(app);
  require('./router/uers')(app);
  // FRONT_ROUTER_END

  require('./router/manage')(app);
};
