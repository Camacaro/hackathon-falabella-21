
const mongoose = require('mongoose');

/*mongoose.connect('mongodb://mongo/db-rule', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((db) => {
  console.log('conexion exitosa con db');
}).catch(err => console.log('error conexion bd : ', err));*/

/*mongoose.connect('mongodb://localhost:27017/dbrule',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);*/


main().catch(err => console.log(err));

async function main() {
  console.log('test conection db ');
  await mongoose.connect('mongodb://mongo/db-rule');
}

module.exports = mongoose;