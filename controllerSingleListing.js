const findOne = require('./model');

exports.getOneListing = async (req, res) => {
    try {
   const singleListingId = await req.params.id; // Assuming the ID is passed as a route parameter
    console.log(singleListingId)
   findOne.findById(singleListingId)
     .then((singleListingId) => {
       if (!singleListingId) {
         return res.status(404).json({
           success: false,
           message: "Individual Listing not found",
         });
       }

       res.status(200).json({
         success: true,
         singleListingId,
       });
     })
     .catch((error) => {
       res.status(404).json({
         success: false,
         message: "Error retrieving Individual Listing",
         error,
       });
     });
 } catch (error) {
   res.status(500).json({
     success: false,
     message: "Internal server error",
     error: error.message,
   });
 }
};