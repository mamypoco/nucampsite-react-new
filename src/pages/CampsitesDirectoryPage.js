import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";

const CampsiteDirectoryPage = () => {
   const [campsiteId, setCampsiteId] = useState(0);
   //[initial state, function to match] = useState(initial value);
   const selectedCampsite = selectCampsiteById(campsiteId);
   //to pass whole campsite info to the below CampsiteDetail section.

   return (
      <Container>
         <Row>
            <Col sm="5" md="7">
               <CampsitesList setCampsiteId={setCampsiteId} />
               {/* when a campsiteId onClick is fired in CampsiteList, setCampsiteId will act. We are only passing it*/}
            </Col>
            <Col sm="7" md="5">
               <CampsiteDetail campsite={selectedCampsite} />
            </Col>
         </Row>
      </Container>
   );
};

export default CampsiteDirectoryPage;
