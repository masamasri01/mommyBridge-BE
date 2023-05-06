const app = require('./app') //anyting in app.js is imported in this file
const db= require('./config/db');
const UserModel= require ('./model/user_model')
const port =3000;
app.get('/',(req,res)=>{
      res.send("Hello !!!masa")
}) //  / is root


app.listen(port,()=>{
    console.log(`Server listening on port http://localhost:${port}`);  
});