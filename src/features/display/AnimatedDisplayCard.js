import { useState, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { useSpring, animated } from "react-spring";

const AnimatedDisplayCard = ({ item }) => {
   const { image, name, description } = item;

   const [toggle, setToggle] = useState(false);

   const animatedStyle = useSpring({
      opacity: toggle ? 1 : 0,
      transform: toggle ? "scale(1,1)" : "scale(1,0)",
      //1 is 100% height, 0 is 0% height
      config: { duration: 500 },
      // 500 mili second = half second
   });

   useEffect(() => {
      setToggle(true);
   }, []);
   // only run once when this component mounted

   return (
      <animated.div style={animatedStyle}>
         <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
               <CardTitle>{name}</CardTitle>
               <CardText>{description}</CardText>
            </CardBody>
         </Card>
      </animated.div>
   );
};
export default AnimatedDisplayCard;
