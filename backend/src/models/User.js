import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import moment from 'moment';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    lastName: {
        type: String,
    },
    birthDate: {
        type: Date,
        required: [true, 'La fecha de nacimiento es obligatoria'],
        validate: {
            validator: function (value) {
               return moment(value).isSameOrBefore(moment());
            },
            message: 'La fecha de nacimiento no puede estar en el futuro',
        }

    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: [true, 'El email esta duplicado']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minlength: [8, 'La contraseña debe tener al menos 8 caracteres'],
    },
    avatar: {
        type: String,
        default: null,
    },
    rol: {
        type: String,
        enum: ['user', 'admin'],
        required: true,
        default: 'user',
    }
})

userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) return next();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);

        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;