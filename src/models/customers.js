module.exports = (mongoose) =>
  mongoose.model(
    "customers", // Collection name
    mongoose.Schema(
      {
        // Schema
        // key: type
      },
      { timestamps: true }
    )
  );
