import {AppBar,Toolbar,styled} from "@mui/material";
import { NavLink } from "react-router-dom";

const Tabs= styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:white;
    text-decoration:null;
`


const Navbar =()=>{
    return(
        <AppBar position="static">
            <Toolbar>
                <Tabs to='/'>Codeforinterview</Tabs>
                <Tabs to='/all'>Allusers</Tabs>
                <Tabs to='/add'>Adduser</Tabs>
            </Toolbar>
        </AppBar>
    )
}
 export default Navbar;