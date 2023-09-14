import mongoose,  {Schema} from 'mongoose'

const userSchema = new Schema({
  userId: {
    type: Number
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: '/assets/default_pfp.png', // Replace with your default image path
  },
  birthDate: {
    type: Date,
    required: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  registration_date: {
    type: Date,
    default: Date.now(),
  }
});

const User = mongoose.model('User', userSchema);

export default User;