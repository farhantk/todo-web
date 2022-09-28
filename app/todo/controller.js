const Todo = require('./model')

module.exports={
    index:async(req,res)=>{
        try{
            const todo = await Todo.find()
            res.render('index', {
                todo
            })
        }catch(err){
            console.log(err)
        }
    },
    create:async(req,res)=>{
        try{
            const title = req.body.title;
            const desc = req.body.desc;
            const priority = req.body.priority;
            
            const todo = new Todo({
                title: title,
                desc: desc,
                priority: priority,
            })
            todo.save()
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    },
    del: async(req, res)=>{
        try{
            const {id} = req.params
            let todo = await Todo.findOneAndRemove({
                _id:id
            })
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    },
    edit: async(req, res)=>{
        try{
            const {id} = req.params
            const {title, desc, priority, status} = req.body
            let todo = await Todo.findOneAndUpdate({
                _id:id
            }, {title, desc, priority, status})
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    }
}