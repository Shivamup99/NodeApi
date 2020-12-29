import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

let users = [];
//we get all routes from only / here

router.get("/",(req,res)=>{
   // console.log(users);

    res.send(users);
});

router.post("/",(req,res)=>{
   // console.log("Post reached to dataBase");

    const user=req.body;
    const userId = uuidv4();
    const userwithId = {...user,id:userId}
    users.push(userwithId);
    res.send(`Name changee into datbase by ${user.firsName} added`);
   // res.send("Post Reache to database");

});
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const foundUser = users.find((user)=>user.id===id);
    res.send(foundUser);
});
router.delete('/:id',(req,res)=>{
    const{id} = req.params;
    users = users.filter((user)=>user.id!==id)
    res.send(`id got deleted ${id} from database`);
});

router.patch('/:id',(req,res)=>{
    const {id}=req.params;
    const{firstName,lastName,age}=req.body;

    users= users.find((user)=>user.id===id);
    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(age){
        user.age = age;
    }
    res.send(`user updated by ${id} name age somthing`);

});
export default router;