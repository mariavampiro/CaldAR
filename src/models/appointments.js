module.exports = (mongoose) =>
  mongoose.model(
    "appointments", // Collection name
    mongoose.Schema(
      {
        // TODO Schema
        // key: type
      },
      { timestamps: true }
    )
  );
