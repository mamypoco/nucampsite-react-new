// import { CAMPSITES } from "../../app/shared/CAMPSITES";
import CampsiteCard from "./CampsiteCard";
import { Row, Col } from "reactstrap";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = ({ setCampsiteId }) => {
   //setCampsiteId needs to use when clicked.
   const campsites = selectAllCampsites();
   //this is where CAMPSITES are passed from to be campsites

   return (
      <Row className="ms-auto">
         {campsites.map((campsite) => {
            return (
               <Col
                  className="m-4"
                  md="5"
                  key={campsite.id}
                  onClick={() => setCampsiteId(campsite.id)}
               >
                  {/* when an id is clicked, pass setCampsiteId to parent CampsiteDirectryPage. */}
                  <CampsiteCard campsite={campsite} />
               </Col>
            );
         })}
      </Row>
   );
};

export default CampsitesList;
