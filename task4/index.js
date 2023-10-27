const express = require('express');
const db = require('./db/mongoose');
const User = require('./models/User');
const port = 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

app.get('/', (req, res)=> {
  res.status(200).send("Hello World");
});


app.get('/users', async(req,res)=> {
    try {
        const users = await User.find({});
        res.status(200).json({users});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Something went wrong"});
    }
});


app.post('/sign-up', async(req, res)=> {
   try {
    const {name, email, password} = req.body;
    await User.create({name, email, password});
    res.status(201).json({msg:"Signup successfully"});
   } catch (error) {
     console.log(error);
     res.status(500).json({msg:"Something went wrong"});
   }
});


app.put('/users/update/:id', async(req, res)=> {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        await user.save();
        res.status(200).json({msg:"User updated successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Something went wrong"});
    }
});


app.delete('/users/delete/:id', async(req, res)=> {
    try {
        const {id} = req.params;
        await User.findByIdAndDelete({_id:id});
        res.status(200).json({msg:'User deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Something went wrong"});
    }
});




app.listen(port, ()=> {
    console.log(`Server is rinning on port:${port}`);
})