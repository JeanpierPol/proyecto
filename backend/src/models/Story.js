import mongoose from 'mongoose';
import moment from 'moment';

const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'El título es obligatorio'],
        trim: true,
    },

    description: {
        type: String,
        trim: true,
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    rootPage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Page',
        default: null,
    },

    tags: {
        type: [String],
        default: [],
    },

    isPublic: {
        type: Boolean,
        default: true,
    },

    createdAt: {
        type: Date,
        default: () => moment().toDate(),
        immutable: true,
    },
    
    coverImg: {
        type: String,
        default: null,
    },

    updatedAt: {
        type: Date,
        default: () => moment().toDate(),
    },
});

StorySchema.pre('save', function (next) {
    this.updatedAt = moment().toDate();
    next();
});

const Story = mongoose.model('Story', StorySchema);

export default Story;
