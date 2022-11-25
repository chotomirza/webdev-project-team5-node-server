import * as userDao from './users-dao.js'

const UserController = (app) => {
    const findAllUsers = async(req,res) => {
        const users = await userDao.findAllusers()
res.json(users)
    }
    const createUser = async (req,res) => {
        const newUser = req.body;
        const actualUser = await userDao.createUser(newUser)
        res.join(actualUser)
    }

    const updateUser = () => {}

    const deleteUser = () => {}

    app.get('/users', findAllUsers)
    app.post('/users', createUser)
    app.put('/users/:uid', updateUser)
    app.delete('/users/:uid', deleteUser)
}

export default UserController;