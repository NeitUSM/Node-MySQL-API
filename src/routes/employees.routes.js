import { Router } from "express";
import {getEmployee, getEmployees, createEmployee, updateEmployee, deleteEmployee} from '../controllers/employees.controller.js'

const router = Router()

router.get("/employees", getEmployees)

router.get("/employees/:id", getEmployee)

router.post("/employees", createEmployee)

//Updatear parcialmente
router.patch("/employees/:id", updateEmployee)

router.delete("/employees/:id", deleteEmployee)

export default router