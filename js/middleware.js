(function(module) {
  var middleware = {};

  middleware.report = function (ctx, next, more) {
    console.log('Middleware reporting in...');
    // console.log('Passed this context:');
    // console.log(ctx);
    // console.log('Doing this next:');
    // console.log(next);
    // console.log('Anything else?');
    // if (typeof more == 'undefined') {
    //   console.log('Nope!');
    // } else {
    //   console.log(more);
    // }
    next();
  };

  module.middleware = middleware;
})(window);
