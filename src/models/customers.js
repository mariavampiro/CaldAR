module.exports = (mongoose) =>
  mongoose.model(
    "customers",
    mongoose.Schema(
      {
        id: Number,
        customerType: String,
        email: String,
        buildingsId: [],
        fiscalAddress: String,
      },
      { timestamps: true }
    )
  );
