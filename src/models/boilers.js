module.exports = (mongoose) =>
  mongoose.model(
    "boilers", // Collection name
    mongoose.Schema(
      {
        id: Number,
        typeId: Number,
        status: String,
        maintaince_rate: String,
        hour_maintaince_cost: String,
        hour_eventual_cost: String,
        warehouse_id: Number,
      },
      { timestamps: true }
    )
  );
