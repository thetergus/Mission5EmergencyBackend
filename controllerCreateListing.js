const createOne = require('./model');

// Create entry. Main use for testing of conectivity and Writing rights to database

exports.createListing= async (req, res) => {           

    try {
      
      const newDocument = await req.body;                 // get the IndividualListing from the body being sent
      
      await createOne.create(newDocument)
        .then((newSingleListing) => {                               //create a new Individual Listing then save
          if (!newSingleListing) return res.status(404)
            .json({
              success: false,
              message: "New Listing creation failed",
              error: "Unable get created new Listing"
            })
          res.status(201)
            .json({
              success: true,
              newSingleListing
            })
        })
        .catch((error) => {
          res.status(404)
            .json({
              success: false,
              error: error.message
            })
        })
    } catch (error) {
      res.status(500)
        .json({
          success: false,
          message: "Internal server error"
        })
    }
  }
  