import express from 'express';
import path from 'path';

import {router} from './router'
import {config} from './config/config'
import {dbConnection} from './service/db/mongodb-connection';

const app = express();

app.use( express.json() );

app.use( express.static( path.resolve( __dirname , 'public') ) );

app.use( router )

app.listen(config.port, async () => {
  await dbConnection();
  console.log(`Server started at port ${config.port}`);
});