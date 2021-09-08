const express = require('express');
const router = express.Router();

//model
const Message = require('../models/Messages');

router.get('/', (req, res, next) => {
    Message.find({})
    .then(msg => res.json(msg))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Message.findById(req.params.id)
    .then(msg => res.json(msg))
    .catch(next)
})

router.post('/', (req, res, next) => {
    Message.create(req.body)
    .then(msg => res.json(msg))
    .catch(next)
    // res.redirect('/');
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    Message.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
    )
    .then(msg => res.json(msg))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Message.findOneAndRemove({ _id: id })
    .then(msg => res.json(msg))
    .catch(next)
})


module.exports = router;