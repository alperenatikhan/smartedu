const Course =require('../models/Course');

exports.createCourse= async(req,res) =>{

const course = await Course.create(req.body)
.then((item) =>  res.status(201).json({

    status: 'success',
    item
    
    
    })).catch( (err) => res.status(400).json({status: 'failure',err}))


}

exports.listCourses = async(req,res) => { 
    
    try{
    const courselist =await Course.find()
    
    res.render('courses', {courselist, pageName:'courses'})


    }catch{
        err => res.status(403).json({err})
    }
}



