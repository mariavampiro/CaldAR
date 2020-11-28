module.exports = (mongoose) =>
  mongoose.model(
    "technicians", // Collection name
    mongoose.Schema(
      {
        // TODO Schema
        // key: type
      },
      { timestamps: true }
    )
  );
