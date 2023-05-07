import { FormControl, FormGroup, InputLabel ,Input, Typography,styled, Button} from "@mui/material";
import { useState } from "react";
import {addUser} from '../Service/api'
import { useNavigate } from "react-router-dom";
const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div (
    margin-top:20px;
)

`
const defaultvalue={
    Name: "",
    Username: "",
    Email:"",
    Phone:""
    

}


const Adduser =()=>{
    const [user,setuser]=useState(defaultvalue) 

    const navigate=useNavigate()
    const valuechanged= (e)=>{
        setuser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }
    const adddata= async()=>{
        await addUser(user);
        navigate('/all')
    }
    return(
        <Container>
        <Typography variant="h4">Add  user</Typography>
            <FormControl>
               <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> valuechanged(e)} name="Name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=> valuechanged(e)} name="Username"/>
             </FormControl>
             <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=> valuechanged(e)} name="Email"/>
             </FormControl>
             <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> valuechanged(e)} name="Phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={adddata}>Adduser</Button>
            </FormControl>
        </Container>
    )
}
 export default Adduser;