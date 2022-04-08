const express = require("express");
const app=express();
const port =3000;
app.use(express.json());
const mnth =['J','F','M','APRIL']
let arr=["titanic","marvel"]
const courses =[
    {id:1, nam:'course1'},
    {id:2,nam:'course2'},
]
app.get('/',(req,res) =>{
 res.send ([1,2,3])
})
app.get('/api/course',(req,res) =>{
    res.send ('hello wrld')
   })
   //app.post('/api/courses/:id',(req,res) =>{
       //const course=courses.find(c=>c.id ===parseInt(req.params.id));
       //if(!course)res.status(404).send ('the couse with no  given id')//404
    //res.send (course.nam)
   //})
   app.post('/api/courses',(req,res) =>{
       if( req.body.name.length <3){
           res.status(400).send('name is required');
           return;
       }
    const course={
        id:courses.length+1,
        nam:req.body.name,
    };
    courses.push(course);
    res.send(course);
   })

const Port =process.env.Port ||3000;
app.listen(Port,()=>console.log('listen on port :http//${ 3000}) '))

