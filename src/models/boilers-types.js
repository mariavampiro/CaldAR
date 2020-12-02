module.exports = (mongoose) =>
  mongoose.model(
    "boiler-types", // Collection name
    mongoose.Schema(
      {
        typeId: Number,
        skillsId: [],
        description: String,
        stock: Number,
      },
      { timestamps: true }
    )
  );



