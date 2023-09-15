import mongoose,  {Schema} from 'mongoose'
import bcrypt from "bcrypt";

const userSchema = new Schema({
  userId: {
    type: String,
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

userSchema.pre("save", async function (next){
  if(!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error){
    throw error;
  }
})

userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error){
    throw error;
  }
}

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;