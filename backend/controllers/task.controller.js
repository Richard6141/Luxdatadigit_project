const models = require("../models")
function save(req, res) {
    const task = {
        userId : 1,
        taskName: req.body.taskName
    }
    models.Task.create(task).then(result =>{
        res.status(201).json({
            message: 'Task created successfully',
            Task : result
        })
    }).catch(error =>{
        res.status(500).json({
            message: 'Something went wrong',
            error : error
        })

    })
}

module.exports = {
    save:save
}