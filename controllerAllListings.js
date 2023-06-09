const IndividualListing = require('./model');

//Retrieve data, Main use for testing of conectivity and Reading rights for database    

   exports.getAllListings = async (req, res) => { 
    try {
        IndividualListing.find()
        .then((everyListing) => {
          res.status(200)
            .json({
              success: true,
              everyListing
            })
        })
        .catch((error) => {
          res.status(404)
            .json({
              success: false,
              message: "Cant find them",
              error
            })
        })
    } catch (error) {
      res.status(500)
        .json({
          success: false,
          message: "Internal server error",
          error: error.message
        })
    }
  }