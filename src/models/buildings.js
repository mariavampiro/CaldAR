module.exports = (mongoose) =>
  mongoose.model(
    "buildings", // Collection name
    mongoose.Schema(
      {
        // TODO Schema
        // key: type
      },
      { timestamps: true }
    )
  );
