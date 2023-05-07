import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {  deleteUser, getUsers } from "../Service/api";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Allusers = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    getallusers();
  }, []);
  const navigate=useNavigate()
  const {id}=useParams()
  const getallusers = async () => {
    const response = await getUsers();
    setusers(response.data);
  };
  const deleteuserdata= async ()=>{
     await deleteUser(id);
     getallusers()
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>name</TableCell>
          <TableCell>email</TableCell>
          <TableCell>username</TableCell>
          <TableCell>phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.Name}</TableCell>
            <TableCell>{user.Email}</TableCell>
            <TableCell>{user.Username}</TableCell>
            <TableCell>{user.Phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                component={Link}
                to={`/edit/${user._id}`}
              >
                edit{" "}
              </Button>
              <br></br>
              <br></br>
              <Button variant="contained" onClick={deleteuserdata} 
              component={Link}
              to={`/delete/${user._id}`}>delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default Allusers;
