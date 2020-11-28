module.exports = (mongoose) =>
  mongoose.model(
    "boilers", // Collection name
    mongoose.Schema(
      {
        // TODO Schema
        // key: type
      },
      { timestamps: true }
    )
  );
