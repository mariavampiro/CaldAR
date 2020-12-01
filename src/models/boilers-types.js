module.exports = (mongoose) =>
  mongoose.model(
    "boiler-types", // Collection name
    mongoose.Schema(
      {
        typeId: Number,
        stock: Number,
        description: String, 
      },
      { timestamps: true }
    )
  );
