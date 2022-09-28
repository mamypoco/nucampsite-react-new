// import { CAMPSITES } from "../../app/shared/CAMPSITES";
import CampsiteCard from "./CampsiteCard";
import { Row, Col } from "reactstrap";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = () => {
   //setCampsiteId needs to use when clicked.
   const campsites = selectAllCampsites();
   //CAMPSITES are passed as campsites from campsiteSlice.js

   return (
      <Row className="ms-auto">
         {campsites.map((campsite) => {
            return (
               <Col className="m-4" md="5" key={campsite.id}>
                  <CampsiteCard campsite={campsite} />
               </Col>
            );
         })}
      </Row>
   );
};

export default CampsitesList;
