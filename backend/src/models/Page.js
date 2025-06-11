import mongoose from 'mongoose';

const PageSchema = new mongoose.Schema({
    storyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story',
        required: true,
    },

    parentPage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Page',
        required: false
    },

    title: {
        type: String,
        required: [true, 'El título es obligatorio'],
    },

    content: {
        type: String,
        required: [true, 'El contenido es obligatorio'],
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    question:{
        type: String,
    },

    responses: [{
        text: {
            type: String,
            required: true,
        },
        nextPage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Page',
            required: true,
        }
    }],
});

PageSchema.pre('save', function(next) {
    if (this.question && (!this.responses || this.responses.length === 0) && this.parentPage != null) {
        return next(new Error('Una página con una pregunta debe tener al menos una respuesta.'));
    }
    if (this.responses && this.responses.length > 0 && !this.question) {
        return next(new Error('Una página con respuestas debe tener una pregunta asociada.'));
    }

    next();
});

const Page = mongoose.model('Page', PageSchema);

export default Page;