module.exports = (mongoose) =>
  mongoose.model(
    "boiler-types", // Collection name
    mongoose.Schema(
      {
        typeId: Number,
        description: String, 
      },
      { timestamps: true }
    )
  );
