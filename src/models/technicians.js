module.exports = (mongoose) =>
  mongoose.model(
    "technicians", // Collection name
    mongoose.Schema(
      {
        // Schema
        // key: type
      },
      { timestamps: true }
    )
  );
