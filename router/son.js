import { Router } from 'express';
import { success } from './response.js';
import { getSon } from "../model/Son.js";





const router = Router();



router.get('/list', async function (req, res) {
    getSon.findAll({ attributes: ['id','name', 'fatherSurname', 'motherSurname', 'age','catFatherId'] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        });
})

router.post('/createSon', async function (req, res) {

    getSon.create({
        name: req.query.name,
        fatherSurname: req.query.fatherSurname,
        motherSurname: req.query.motherSurname,
        age: req.query.age,
        catFatherId: req.query.catFatherId,
    })
        .then(father => {
            res.send(father);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.put('/updateSon', async function (req, res) {
    let id = req.query.id;
    let newDato = req.query;
    getSon.findOne({
        where: { id: id },
    })
        .then(son => {
            son.update(newDato)
                .then(newson => {
                    res.send(newson)
                })
        })
});

router.delete('/destroy_son_orm', async function (req, res) {
    let id = req.query.id

    getSon.destroy({
        where: { id: id }
    }).then(() => {
        res.send('hijo eliminado')
    })
});



export default router;