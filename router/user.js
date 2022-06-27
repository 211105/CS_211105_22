import { Router } from 'express';
import { success } from './response.js';
import { getUser } from "../model/User.js";
import { getFather } from '../model/Father.js';


const router = Router();



router.get('/list', async function (req, res) {
    getUser.findAll({ attributes: ['name', 'password','id'] , include:{model:getFather, attributes:['id','name','fatherSurname','motherSurname','age','catUserId']}})
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        });
});

router.post('/createUsers', async function (req, res) {

    getUser.create({
        name: req.query.name,
        password: req.query.password,
    })
        .then(users => {
            res.send(users);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.put('/updateUsers', async function (req, res) {
    let id = req.query.id;
    let newDato = req.query;
    getUser.findOne({
        where: { id: id },
    })
        .then(users => {
            users.update(newDato)
                .then(newuser => {
                    res.send(newuser)
                })
        })
})

router.delete('/deleteUsers', async function (req, res) {
    let id = req.query.id

    getUser.destroy({
        where: { id: id }
    }).then(() => {
        res.send('persona eliminada')
    })
});

export default router;