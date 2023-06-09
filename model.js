
const {
    Schema,
    model
  } = require("mongoose");
  
  const listingSchema = new Schema({
    city: String,
    street_address: String,
    price_pw: Number,
    bond:Number,
    bedrooms: Number,
    bathrooms: Number,
    car_parks:Number,
    building_type: String,
    images: [{}],  
    available_starting: Date,    
    description: String,
    heated_towel_rack: Boolean,
    alarm: Boolean,
    air_conditioning: Boolean,
    viewing_dates1: String,
    viewing_dates2: String,
    viewing_times1: String,
    viewing_times1: String,
    },
  );
    const IndividualListing = model("test", listingSchema)

  module.exports = IndividualListing