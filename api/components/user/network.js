import { Router } from 'express';
import { success } from '../../../network/response.js';
import { getData } from '../../../model/db.js'
import { getUser } from "../../../model/User.js";

const router = Router();

const user = getUser.build({ attributes: ['id', 'username', 'email', 'password', 'phone_number'] });
console.log(user instanceof getUser); // true
console.log(user.name);


router.get('/success', function (req, res) {
    success(req, res, "", 200);

});


//add Sequelize


router.get('/all_user_orm', async function (req, res) {
    getUser.findAll({ attributes: ['username', 'email', 'password', 'phone_number'] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        });
});
//Post using Sequelize
router.put('/update_user_or', async function (req, res) {
    let id = req.query.id;
    let newDatas = req.query;
    getUser.findOne({ where: { id: id } })
        .then((r) => {
            r.update(newDatas)
            success(req, res, r, 200);
            console.log('simon')
        })
        .catch((e) => {
            success(req, res, e, 400);
            console.log('mal')
        });
})

//post Sequelize
router.post('/register_user_orm', async function (req, res) {
    getUser.create({
        id: req.query.id,
        username: req.query.username,
        email: req.query.email,
        password: req.query.password,
        phone_number: req.query.phone_number,

    }).then((r) => {
        success(req, res, r, 200);
        console.log('Correcto')
    })
        .catch((e) => {
            success(req, res, e, 400);
            console.log("Error")
        });

})
router.delete('/delete_user_orm', async function (req, res) {
    let id = req.query.id;
    console.log("id:" + req.query.id);
    getUser.destroy({
        where: {
            id: id
        }
    })
        .then((r) => {
            success(req, res, r, 200);
        })
        .catch((e) => {
            success(req, res, e, 200);
        });
});
export default router;