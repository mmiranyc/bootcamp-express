const usersValidate = (req, res, next) => {
    const user = req.body;

    if(!user.username) return res.status(400).send('username is required');

    if(!user.email) return res.status(400).send('email is required');
    
    if(!user.password) return res.status(400).send('password is required');

    next();
}

module.exports = usersValidate;