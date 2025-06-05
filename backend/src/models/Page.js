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

    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Page',
        default: [],
    }],

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const Page = mongoose.model('Page', PageSchema);

export default Page;
