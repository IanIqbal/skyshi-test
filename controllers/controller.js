const {Activity} = require("../models")
class Controller{
    static async getActivities(req, res, next){
        try {
            const Activities = await Activity.findAll()

            res.status(200).json({status:"success",data:Activities})
        } catch (error) {
            next(error)
        }
    }

    static async getOneActivity(req,res,next){
        try {
            const {id}= req.params

            const activity = await Activity.findByPk(id)
            if(!activity){
                throw {name:"NOT FOUND", payload:id, context:"Activity"}
            }
            res.status(200).json({status:"success",data:activity})
        } catch (error) {
            next(error)
        }
    }

    static async createActivity(req,res,next){
        try {
            const {title,email} = req.body

            const activity = await Activity.create({title,email})

            res.status(201).json({status:"success",data:activity})
        } catch (error) {
            next(error)
        }
    }

    static async deleteActivity(req,res,next){
        try {
            const {id} = req.params

            let activity = await Activity.findByPk(id)

            if(!activity){
                throw {name:"NOT FOUND", payload:id, context:"Activity"}
            }

            await Activity.destroy({where:{id}})
            
            res.status(200).json({status:'success',message:`Success delete Activity id ${id}`})
        } catch (error) {
            next(error)
        }
    }

    static async changeActivityTitle(req,res,next){
        try {
            
            const {id} = req.params
            const{title} = req.body
            let activity = Activity.findByPk(id)

            if(!activity){
                throw {name:"NOT FOUND", payload:id, context:"Activity"}
            }

             await Activity.update({title},{where:{id}})

             let updatedActivity = await Activity.findByPk(id)
            res.status(200).json({status:"success",data:updatedActivity})
        } catch (error) {
            next(error)
        }
    }
    
}

module.exports = Controller