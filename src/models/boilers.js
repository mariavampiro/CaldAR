module.exports = (mongoose) =>
  mongoose.model(
    "boilers", // Collection name
    mongoose.Schema(
      {
        // Schema
        // key: type
      },
      { timestamps: true }
    )
  );
