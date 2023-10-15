const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
let htmlPath=path.join(__dirname,'../public')
let templatePath=path.join(__dirname,'/template/views')
let partials=path.join(__dirname,'/template/copy')
app.set('view engine','hbs')
app.set('views',templatePath)
app.use(express.static(htmlPath))
hbs.registerPartials(partials)



app.get('/',(req,res)=>{
res.render('index')}
)
app.get('/about',(req,res)=>{
res.render('about')})
app.get('/weather',(req,res)=>{
res.render('weather')}
)
app.get('*',(req,res)=>
res.render('404',{
    mess:'Oops!,Page Not Found'
})
)
app.listen(3000,()=>{
    console.log('LISTENING AT 3000')
})