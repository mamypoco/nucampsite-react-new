import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";

const DisplayList = () => {
   const items = [
      selectFeaturedCampsite(),
      selectFeaturedPromotion(),
      selectFeaturedPartner(),
   ];
   //order matters: left is featuredCampsite, the right is featuredPromotion.
   return (
      <Row>
         {items.map((item, idx) => {
            return (
               item && (
                  //without this condition, we will get error when ther is no featured campsite.
                  <Col md className="m-1" key={idx}>
                     <AnimatedDisplayCard item={item} />
                  </Col>
               )
            );
         })}
      </Row>
   );
};

export default DisplayList;
