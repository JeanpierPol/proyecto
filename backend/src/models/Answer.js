import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    questionPage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Page',
        required: true,
    },
    nextPage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Page',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Answer = mongoose.model('Answer', AnswerSchema);

export default Answer;
