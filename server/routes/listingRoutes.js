const express = require("express")
const { createListing, findListingById, addAComment } = require('../controllers/listingControllers')

const router = express.Router()

// get all listings
router.get('/', (req, res) => {
 res.json({})


})


// get a listing
router.get('/listings/:listingsId', findListingById)

// post a listing 
router.post('/listings/', createListing)




// add a comment to listing 

router.put("/listings/:id/comments", addAComment)

// delete a listing 
router.delete('/', (req, res) => {
 res.json({})


})


// update a listing
router.put('/', (req, res) => {
 res.json({})


})


module.exports = router