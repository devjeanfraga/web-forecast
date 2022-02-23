const express = require('express')
const {resolve} = require('path');


const app = express();

app.use(
  express.static(
    resolve(
      __dirname, './public'
    )
  )
)


app.listen(process.env.PORT || 3001, (err)=> {
  if(err){
    console.log( err );
  }
  console.log('web-forecas Rodando com Sucesso');
})