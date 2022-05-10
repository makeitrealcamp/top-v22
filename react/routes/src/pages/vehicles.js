import { useParams } from "react-router-dom";

const Vehicles = () => {
  const params = useParams();
  return (
    <>
      <h1>{`Vamos a mostrar los vehìculos de marca ${params.branchId}`}</h1>
    </>
  );
};

export default Vehicles;
