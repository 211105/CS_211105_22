import { Router } from 'express';
import { success } from './response.js';
import { getFather } from "../model/Father.js";
import { getSon } from '../model/Son.js';





const router = Router();



router.get('/list', async function (req, res) {
    getFather.findAll({ attributes: ['id','name', 'fatherSurname', 'motherSurname', 'age', 'catUserId'], include:{model:getSon , attributes:['name','fatherSurname','motherSurname','age']} })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        });
})



router.post('/postFater', async function (req, res) {

    getFather.create({
        name: req.query.name,
        fatherSurname: req.query.fatherSurname,
        motherSurname: req.query.motherSurname,
        age:req.query.age,
        catUserId: req.query.catUserId
    })
        .then(father => {
            res.send(father);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.put('/updateFather', async function (req, res) {
    let id = req.query.id;
    
    let newDato = req.query;
    getFather.findOne({
        where: { id: id },
    })
        .then(father => {
            father.update(newDato)
                .then(newfather => {
                    res.send(newfather)
                })
        })
});
router.delete('/destroyFather', async function (req, res) {
    let id = req.query.id

    getFather.destroy({
        where: { id: id }
    }).then(() => {
        res.send('padre eliminado')
    })
});






export default router;