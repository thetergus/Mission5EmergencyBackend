const router = require("express")
  .Router()
const controllerCreate = require('./controllerCreateListing')
const controllerAll = require('./controllerAllListings')
const controllerSingle = require('./controllerSingleListing')

router
.get('/:id', controllerSingle.getOneListing)  

.post('/', controllerCreate.createListing) //irrelevant
.get('/', controllerAll.getAllListings)        //irrelevant
  
module.exports = router