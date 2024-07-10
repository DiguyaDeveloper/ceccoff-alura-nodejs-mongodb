import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nationality: { type: String },
  },
  { versionKey: false },
);

const author = mongoose.model('Authors', authorSchema);

export { author, authorSchema };
