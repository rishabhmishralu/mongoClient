
const express=require('express')

const Employeecontroller=require("../controller/student")
const router =express.Router();

router.post("/Employee",Employeecontroller.EmployeeEnrollment)
router.get("/Employee",Employeecontroller.EmployeeData)
router.put("/Employee",Employeecontroller.EmployeeUpdate)
router.delete("/Employee",Employeecontroller.EmployeeDelete)

module.exports=router