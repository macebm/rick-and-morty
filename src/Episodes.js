import { useEffect, useState } from "react";
import ContainerSection from "./ContainerSection";
import Episode from "./Episode";
import getEpisodes from "./services/getEpisodes";

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getEpisodes()
      .then((data) => setEpisodes(data.results))
      .catch((error) => console.log(error.message));
  });

  return (
    <ContainerSection>
      {episodes.map(({ id, name, air_date, episode }) => (
        <Episode key={id} name={name} air_date={air_date} episode={episode} />
      ))}
    </ContainerSection>
  );
}
