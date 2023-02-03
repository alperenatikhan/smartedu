const Category = require('../models/Category')


exports.createCategory = async(req,res) => {

    let categoryInput = await req.body



await Category.create(req.body).then((item) => res.status(201).json(item)).catch((err) => res.status(403).json(err))

    


};