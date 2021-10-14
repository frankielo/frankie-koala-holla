const Pool = require('pg').Pool

const pool = new Pool({

    user:"postgress",
    host:"localhost",
    database:"koalas",
    password:"l1superm@n",
    port:5432
})

Pool.on('connect',()=>{
    console.log("postgress is connected");
})

Pool.on('error',err=>{
    console.log("An error occured");
    process.exit(-1)
})

module.exports = pool