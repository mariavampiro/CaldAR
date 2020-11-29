module.exports = (mongoose) =>
  mongoose.model(
    "technicians",
    mongoose.Schema(
      {
        id: Number,
        first_name: String,
        last_name: String,
        email: String,
        type_ids: [Number],
        skills_id: [Number],
        hour_rate: Number,
        daily_capacity: Number,
      },
      { timestamps: true }
    )
  );
