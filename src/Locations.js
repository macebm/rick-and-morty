import { useEffect, useState } from "react";
import ContainerSection from "./ContainerSection";
import Location from "./Location";
import getLocations from "./services/getLocations";

export default function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations()
      .then((data) => setLocations(data.results))
      .catch((error) => console.log(error.message));
  });
  return (
    <ContainerSection>
      {locations.map(({ id, name, type, dimension }) => (
        <Location key={id} name={name} type={type} dimension={dimension} />
      ))}
    </ContainerSection>
  );
}
