module.exports = (mongoose) =>
  mongoose.model(
    "customers", // Collection name
    mongoose.Schema(
      {
        // TODO Schema
        // key: type
      },
      { timestamps: true }
    )
  );
