import express, { Express, Request, Response } from 'express';

import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import config from './config';
import grant from 'grant';
import grantConfig from './grant_config';
import { init } from './controller';

console.log('index, config', config);
console.log('grantConfig', grantConfig);

const port = config.port;

function server(): Express {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());

  app.use(morgan('dev'));

  app.use(session({
    secret: 'grant', saveUninitialized: true, resave: false, cookie: { maxAge: 3600000 * 24 } // 24 hours
  }))

  app.use(grant.express(grantConfig));

  app.use((req, res, next) => {
    // consider restricting this to only the relevant domains
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

  app.get('/_health', (req, res) => {
    console.log('Received health check request');
    res.send('OK');
  });



  return app;
}
server().listen(port, () => console.log(`Listening on port ${port}`));

export default server;