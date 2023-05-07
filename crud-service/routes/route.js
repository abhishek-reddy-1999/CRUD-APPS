import express from 'express'
//import { Routes } from 'react-router-dom';
import { addUser,deleteUser,editUser,getUserById,getUsers } from '../controller/user-controller.js';


const router=express.Router();

router.post('/add',addUser)
router.get('/all',getUsers)
router.get('/:id',getUserById)
router.put('/:id',editUser)
router.delete('/:id',deleteUser)










export default router;