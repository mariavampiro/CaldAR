module.exports = (mongoose) =>
  mongoose.model(
    'users',
    mongoose.Schema(
      {
        email: {
          type: String,
          required: true,
          unique: true
        },
        password: {
          type: String,
          required: true
        },
        token: {
          type: String,
          required: false
        },
      },
      { timestamps: true },
    ),
  );
