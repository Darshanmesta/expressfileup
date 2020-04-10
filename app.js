const express=require('express')
const app=express()
const route=require('./router/router')
const PORT=4200
const upload=require('express-fileupload')


app.use(upload())  // this should be meentioned at first
app.set('views','./views')
app.set('view engine','ejs')

app.use('/',route)



app.listen(PORT,()=>{
    console.log(`The server is up and running at PORT ${PORT}`)
})