module.exports = (mongoose) =>
  mongoose.model(
    'customers',
    mongoose.Schema(
      {
        id: Number,
        businessName: String,
        contactName: String,
        email: String,
        phone: String,
        fiscalAddress: String,
        type: String,
        buildings: [Number],
      },
      {timestamps: true},
    ),
  );
