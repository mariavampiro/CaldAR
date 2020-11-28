module.exports = (mongoose) =>
  mongoose.model(
    "buildings", // Collection name
    mongoose.Schema(
      {
        // Schema
        // key: type
      },
      { timestamps: true }
    )
  );
