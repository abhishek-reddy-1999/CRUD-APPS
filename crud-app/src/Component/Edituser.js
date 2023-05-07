import { FormControl, FormGroup, InputLabel ,Input, Typography,styled, Button} from "@mui/material";
import { useEffect, useState } from "react";
import {  updateUser} from '../Service/api'
import { getUser } from '../Service/api'
import { useNavigate, useParams } from "react-router-dom";

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


const Edituser =()=>{
    const [user,setuser]=useState(defaultvalue) 

    const navigate=useNavigate()
    const {id}=useParams()
    useEffect(()=>{
        loaduserdetails();
    },[])
    const loaduserdetails=async ()=>{
        const response= await getUser(id);
        setuser(response.data)
    }
    const valuechanged= (e)=>{
        setuser({...user,[e.target.name]:e.target.value})
        //console.log(user)
    }
    const adddata= async()=>{
        await updateUser(user, id);
        navigate('/all')
    }
    return (
      <Container>
        <Typography variant="h4">Edit user</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => valuechanged(e)} name="Name" value={user.Name} />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e) => valuechanged(e)} name="Username" value={user.Username}/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => valuechanged(e)} name="Email" value={user.Email} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => valuechanged(e)} name="Phone" value={user.Phone} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={adddata}>
            Edit
          </Button>
        </FormControl>
      </Container>
    );
}
 export default Edituser;