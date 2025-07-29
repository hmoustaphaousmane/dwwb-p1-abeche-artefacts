const bcrypt = require("bcrypt");

const userModel = require("../models/userModel");

const register = async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await userModel.findOne({ email });
    if (userExists) {
        res.status(209).send({ message: "l'email existe dejà" });
        return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    let user;
    try {
        user = await userModel.create({
            name, email, password: hashedPassword
        })
    }
    catch (error) {
        res.send({
            message: ('l utilisateur n est pas ajouté')
        });
        return;
    };
    res.send({
        message: ('l utilisateur est ajouté '),
        user
    });
};

module.exports = { register }
