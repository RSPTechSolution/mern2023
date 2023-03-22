import express from "express";
import {getUsers,getuserById,saveUser,updateUser,deleteUser} from "../controllers/useController.js"; 

const router = express.Router();
    
router.get('/users',getUsers);
router.get('/users/:id',getuserById);
router.post('/users',saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;