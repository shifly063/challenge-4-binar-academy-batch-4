const express = require('express');
const router = express.Router();
const {Cars} = require('../models');
const sequelize = require('sequelize');

// Menampilkan Halaman Utama, berisi list Car
router.get('/', async function(req, res, next) {
    const cars = await Cars.findAll({
        order: [['name', 'ASC']]
    });
    res.render('tab/index', { cars: cars, filter: "all", save:""});
});

// Menampilkan Halaman dengan data yang sudah tersimpan
router.get('/saved', async function(req, res, next) {
    const cars = await Cars.findAll({
        order: [['name', 'ASC']]
    });
    res.render('tab/index', { 
        cars: cars, 
        filter: "all", 
        save:"success"
    });
});

// Menampilkan Halaman Pencarian
router.post('/find', async function(req, res, next) {
    console.log(req.body);
    const search = req.body.name.toLowerCase();
    const cars = await Cars.findAll({
        order: [['name', 'ASC']], 
        where: {
            name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + search + '%')
        }});
    // res.render('tab/index', { cars: cars, filter: "all", save:""});
    res.render('tab/index', { 
        cars: cars, 
        filter: "all", 
        save:""
    });
});


// Menampilkan Halaman dengan Filter SMALL Car
router.get('/small', async function(req, res, next) {
    const cars = await Cars.findAll({
        order: [['name', 'ASC']], 
        where: {
            size: 'Small'
        }
    });
    res.render('tab/index', { 
        cars: cars, 
        filter: "small",  
        save:""
    });
});

// Menampilkan Halaman dengan Filter MEDIUM Car
router.get('/medium', async function(req, res, next) {
    const cars = await Cars.findAll({
        order: [['name', 'ASC']], 
        where: {
            size: 'Medium'
        }});
    res.render('tab/index', { 
        cars: cars, 
        filter: "medium", 
        save:""
    });
});

// Menampilkan Halaman dengan Filter LARGE Car
router.get('/large', async function(req, res, next) {
    const cars = await Cars.findAll({
        order: [['name', 'ASC']], 
        where: {size: 'Large'}
    });
    res.render('tab/index', { 
        cars: cars, 
        filter: "large", 
        save:""});
});

// Menampilkan Halaman Menambahkan Data
router.get('/add', function(req, res, next) {
    res.render('tab/create', { 
        title: 'Express' 
    });
});

// Menampilkan Halaman Mengubah Data
router.get('/update/:id', async function(req, res, next) {
    const car = await Cars.findByPk(req.params.id);
    if(!car){
        return res.status(404).json(
            {message: "No Data Found"});
    }
    res.render('tab/edit', { 
        Cars: car
    });
});

module.exports = router;