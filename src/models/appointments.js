module.exports = (mongoose) =>
  mongoose.model(
    'appointments',
    mongoose.Schema(
      {
        id: Number,
        buildingId: Number,
        boilerId: Number,
        start_timestamp: Date,
        end_timestamp: Date,
      },
      {timestamps: true},
    ),
  );
