import { CardContainer, CardTitle } from "./CardStyles";
import Button from "./Button";

const Card = () => {
  return (
    <CardContainer>
      <CardTitle>Make IT Real</CardTitle>
      <Button text={"Send"} color={"primary-color"} />
    </CardContainer>
  );
};

export default Card;
