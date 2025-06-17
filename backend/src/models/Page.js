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

    question: {
        type: String,
        default: null,
    },
    answer: {
        type: String,
        default: null,
    },
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Page',
        default: [],
    }],
});

PageSchema.pre('save', async function (next) {
    if (this.parentPage) {
        return next();
    }

    const Page = mongoose.model('Page');
    const Story = mongoose.model('Story');

    try {
        const existingRootPage = await Page.findOne({
            storyId: this.storyId,
            parentPage: null,
            _id: { $ne: this._id }
        });

        if (existingRootPage) {
            return next(new Error('Ya existe una página raíz para esta historia. Solo puede haber una.'));
        }

        const story = await Story.findById(this.storyId);
        if (!story) {
            return next(new Error('Historia no encontrada.'));
        }

        if (story.author.toString() !== this.author.toString()) {
            return next(new Error('Solo el creador de la historia puede crear la página raíz.'));
        }

        next();
    } catch (error) {
        console.error("Error en pre-save hook para página raíz:", error);
        next(error);
    }
});


const Page = mongoose.model('Page', PageSchema);

export default Page;