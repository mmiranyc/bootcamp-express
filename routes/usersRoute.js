const express = require('express');
const route = express.Router();

const usersValidate = require('../middlewares/usersValidate')

const users = [];

route.get('/users', (req, res) => {
    res.status(200).json(users);
})

route.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const newUsers = users.filter((user) => user.id !== Number(id))
    res.status(200).json(newUsers);
})

route.post('/users', usersValidate, (req, res) => {
    const user = req.body;

    users.push({...user, id: users.length + 1});
    res.status(201).json(users);
});

route.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const newUser = req.body;

    const newUsers = users.map((user) => {
        if(user.id === Number(id)) return newUser;
        return user;
    });
    res.status(201).json(newUsers);
})

module.exports = route;