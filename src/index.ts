import {TucaoWebApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
// import * from '@loopback/context';

export {TucaoWebApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new TucaoWebApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  // app.remotes().before('*.*', function(ctx, next) {
  //   loopback
  //     .getCurrentContext()
  //     .set('remoteAddress', ctx.req.connection.remoteAddress);
  //   next();
  // });

  // app.remotes().before('*.prototype.*', function(ctx, instance, next) {
  //   loopback
  //     .getCurrentContext()
  //     .set('remoteAddress', ctx.req.connection.remoteAddress);
  //   next();
  // });

  return app;
}
