import { User } from "../model/user.model.js";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import crypto from "crypto";

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: "Please provide required details.",
    });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({
        message: "User not found!",
      });
    }

    // Compare the entered password with the hashed password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: "Invalid username or password.",
      });
    }

    // Generate authentication token
    const token = crypto.randomBytes(20).toString("hex");

    user.token = token;

    await user.save();

    return res.status(httpStatus.OK).json({
      message: "User logged in successfully!",
      token: user.token,

      user: {
        id: user._id,
        name: user.name,
        username: user.username,
      },
    });

  } catch (err) {
    console.log(err);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: "Something went wrong, try again!",
    });
  }
};


const register = async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: "Please provide required details.",
    });
  }

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(httpStatus.CONFLICT).json({
        message: "Username already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(httpStatus.CREATED).json({
      message: "User created successfully.",
    });

  } catch (err) {
    console.log(err);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error.",
    });
  }
};


export { login, register };