import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    translations: {
        type: Map,
        of: String,
        required: true,
        default: {}
    }
});

const Tag = mongoose.model('Tag', tagSchema);
export default Tag;