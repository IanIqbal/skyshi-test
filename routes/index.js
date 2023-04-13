const express = require("express")
const Controller = require("../controllers/controller")
const ControllerTodo = require("../controllers/controllerTodo")
const router = express.Router()

router.get("/activity-groups", Controller.getActivities )
router.get("/activity-groups/:id", Controller.getOneActivity )
router.post("/activity-groups", Controller.createActivity)
router.delete("/activity-groups/:id", Controller.deleteActivity)
router.patch("/activity-groups/:id", Controller.changeActivityTitle)

router.get("/todo-items", ControllerTodo.getTodos)
router.get("/todo-items/:id", ControllerTodo.getOneTodo)
router.post("/todo-items", ControllerTodo.createTodo)
router.delete("/todo-items/:id", ControllerTodo.deleteTodo)
router.patch("/todo-items/:id", ControllerTodo.changeTodoTitle)

module.exports = router