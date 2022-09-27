//this is for selector
//letter starting lowercase means we are not exporting this to as a component
//see campsites is plural

import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
   return CAMPSITES;
};

// export const selectRandomCampsite = () => {
//    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// };

export const selectCampsiteById = (id) => {
   return CAMPSITES.find((campsite) => campsite.id === id);
};
