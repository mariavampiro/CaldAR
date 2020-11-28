module.exports = (mongoose) =>
  mongoose.model(
    "appointments", // Collection name
    mongoose.Schema(
      {
        // Schema
        // key: type
      },
      { timestamps: true }
    )
  );
