const {Todo, Activity} = require("../models")
class ControllerTodo {
    static async getTodos(req, res, next){
        try {
            const {ActivityGroupId} = req.query

            let option = {}
            if(ActivityGroupId){
                option.where = {ActivityGroupId}
            }
            const todos = await Todo.findAll(option)

            res.status(200).json({status:"success",data:todos})
        } catch (error) {
            next(error)
        }
    }

    static async getOneTodo(req, res, next){
        try {
            const {id} = req.params

            const todo = await Todo.findByPk(id)

            if(!todo){
                throw {name:"NOT FOUND", payload:id, context:"Todo"}
            }

            res.status(200).json({status:"success",data:todo})
        } catch (error) {
            next(error)
        }
    }
    static async createTodo(req,res,next){
        try {
            const {title, ActivityGroupId} = req.body

            const newTodo = await Todo.create({title,ActivityGroupId})

            res.status(201).json({status:"success",data:newTodo})
        } catch (error) {
            next(error)
        }
    }

    static async deleteTodo(req,res,next){
        try {
            const {id} = req.params

            const todo = await Todo.findByPk(id)

            if(!todo){
                throw {name:"NOT FOUND", context:"Todo", payload:id}
            }

            await todo.destroy({where:{id}})

            res.status(200).json({status:"success",message:`Success delete Todo id ${id}`})
        } catch (error) {
            next(error)
        }
    }

    static async changeTodoTitle(req,res,next){
        try {
            const {id} = req.params
            const {title} = req.body
            const todo = await Todo.findByPk(id)

            if(!todo){
                throw {name:"NOT FOUND", context:"Todo", payload:id}
            }

            await Todo.update({title}, {where:{id}})

            const updatedTodo = await Todo.findByPk(id)

            res.status(200).json({status:"success",data:updatedTodo})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerTodo