const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email is already present'],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: [true,'Number is already present']
    },
    address: {
        type: String,
        required: true,

    },
})

//We will create new Collection

const Students = new mongoose.model('Student', studentSchema);

module.exports=Students;
