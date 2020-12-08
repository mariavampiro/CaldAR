module.exports = (mongoose) =>
  mongoose.model(
    'boiler-types',
    mongoose.Schema(
      {
        typeId: Number,
        skillsId: [],
        description: String,
        stock: Number,
      },
      {timestamps: true},
    ),
  );
