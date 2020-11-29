module.exports = (mongoose) =>
  mongoose.model(
    "appointments", // Collection name
    mongoose.Schema(
      {
        id: Number,
        buildingId: Number,
        boilerId: Number,
        start_timestamp: Date,
        end_timestamp: Date,
      },
      { timestamps: true }
    )
  );
