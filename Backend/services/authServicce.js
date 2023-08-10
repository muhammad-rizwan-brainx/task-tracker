const AuthModel = require("../models/authModel");

const createAuthToken = async (email, token) => {
  const userAuth = await AuthModel.findOne({ email });
  if (!userAuth) {
    const auth = new AuthModel({
      email,
      authToken: token,
    });

    return await auth.save();
  } else {
    return await AuthModel.updateOne(
      { email },
      { $set: { authToken: token } }
    ).exec();
  }
};

module.exports = {
  createAuthToken,
};
