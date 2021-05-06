const express = require('express');
const router = express.Router();

const Data = require('../../models/Data');

/**
 * @route GET /api/v1
 * @description Get all data in the database
 * @access Public
 */
router.get('/', (req, res) => {
    Data.find()
    .sort({ date: -1 }) // sort data by date desc
    .then(response => res.status(200).json({ message: 'Success', data: response }))
    .catch(error => res.status(500).json({ message: 'Error', data: error }))
})

/**
 * @route POST /api/v1
 * @description Post data to the database
 * @access Public
 */
router.post('/', (req, res) => {
    const { name, email, country } = req.body;

    const newData = new Data({
        name: name,
        email: email,
        country: country,
        date: Date.now()
    });

    newData.save()
    .then(response => res.status(201).json({ message: 'Success', data: response }))
    .catch(error => res.status(500).json({ message: 'Error', data: error }))
})

/**
 * @route UPDATE /api/v1/:id
 * @description Update data in the database
 * @access Public
 */
 router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, country } = req.body;

    Data.findById(id)
    .then(response => {
        response.name = name;
        response.email = email;
        response.country = country;
        response.date = Date.now();

        response.save()
        .then(response => res.status(200).json({ message: 'Success', data: response }))
        .catch(error => res.status(500).json({ message: 'Error', data: error }))
    })
    .catch(error => res.status(404).json({ message: 'Not Found', data: error }))
})

/**
 * @route DELETE /api/v1/:id
 * @description Delete data from the database
 * @access Public
 */
 router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Data.findById(id)
    .then(response => response.remove().then(res.status(200).json({ message: 'Success', data: response })))
    .catch(error => res.status(404).json({ message: 'Not Found', data: error }))
})


module.exports = router;