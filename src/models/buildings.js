module.exports = (mongoose) =>
  mongoose.model(
    'buildings',
    mongoose.Schema(
      {
        id: Number,
        address: String,
        boilersId: [],
        fullName: String,
        phone: String,
      },
      {timestamps: true},
    ),
  );
