module.exports = (mongoose) =>
  mongoose.model(
    "buildings", // Collection name
    mongoose.Schema(
      {
        id: Number,
        address: String,
        boilersId: [],
        fullName: String,
        phone: String,
      },
      { timestamps: true }
    )
  );
