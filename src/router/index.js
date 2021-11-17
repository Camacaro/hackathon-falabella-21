import fs from 'fs'
import path from 'path'
import express from 'express'

export const router = express();

const filePath = path.resolve( __dirname , '.')

fs.readdirSync(filePath).forEach(file => {
  
  if(file === 'index.js') return;

  import(`${filePath}/${file}`).then((m) => { 
    router.use( m.default );
  })
});