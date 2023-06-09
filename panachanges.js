// OG file ListingCardDescriptions.js



// import React from "react"; 
// import bathroomIcon from "../../assets/Rental Listing Page - Icons/Bathroom.png";
// import bedroomIcon from "../../assets/Rental Listing Page - Icons/Bedroom.png";
// import parkingIcon from "../../assets/Rental Listing Page - Icons/Car Spaces.png";
// import styles from "./ListingCard.module.scss";
// import { useNavigate } from "react-router-dom";

// const ListingCardDescription = () => {
//   const navigate=useNavigate();
//   const LISTING_ID ="6480d3e938a3682554957938"
//   const desc = [
//     {
//       address: "511A Airedale Street",
//       subrurbCity: "Auckland CBD",
//       bedrooms: 1,
//       bathrooms: 1,
//       parking: 1,
//       pricepw: 500,
//       buildingType: "Apartment",
//     },
//   ];
   
//   const navigateToListing = (e) =>{
//       console.log(e)
//       e.preventDefault();
//       navigate(`/listing/${LISTING_ID}`)
//   }

//   return (
//     <div className={styles.listingCardDescription}>
//       <a onClick={navigateToListing} >
//         <p className={styles.address}>{`${desc[0].address}`}</p>
//       </a>
//       <p className={styles.suburbCity}>{`${desc[0].subrurbCity}`}</p>
//       <p className={styles.pricepw}>{`$${desc[0].pricepw} p/w`}</p>
//       <div className={styles.descriptionBottom}>
//         <div className={styles.bedCount}>
//           <img src={bedroomIcon} />
//           <p>{`${desc[0].bedrooms}`}</p>
//         </div>
//         <div className={styles.bathCount}>
//           <img src={bathroomIcon} />
//           <p>{`${desc[0].bathrooms}`}</p>
//         </div>
//         <div className={styles.parkingCount}>
//           <img src={parkingIcon} />
//           <p>{`${desc[0].parking}`}</p>
//         </div>
//         <p className={styles.buildingType}>{`${desc[0].buildingType}`}</p>
//       </div>
//     </div>
//   );
// };

// export default ListingCardDescription;
