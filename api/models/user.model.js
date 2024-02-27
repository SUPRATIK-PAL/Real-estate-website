import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png"
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;