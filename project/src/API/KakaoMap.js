import styled from "styled-components";
import { useEffect, useState } from "react";
import ShowInfo from "../Components/ShowInfo";

const { kakao } = window;

const KakaoMap = ({ basketList, setBasketList }) => {
  const init = [
    {
      id: 1,
      title: "영대 붕어빵",
      latlng: new kakao.maps.LatLng(35.837006324170936, 128.75289610888356),
      clicked: false,
    },
    {
      id: 2,
      title: "맛있는 붕어빵",
      latlng: new kakao.maps.LatLng(35.835990760914, 128.75178371956795),
      clicked: false,
    },
    {
      id: 3,
      title: "4번 출구 붕어빵",
      latlng: new kakao.maps.LatLng(35.83653309414487, 128.7538318814868),
      clicked: false,
    },
  ];

  const [markerPositions, setMarkerPositions] = useState(init);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.836798938474004, 128.75352233805881),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);

    const imageSize = new kakao.maps.Size(50, 70);
    const markerImage = new kakao.maps.MarkerImage("marker.png", imageSize);

    for (let i = 0; i < markerPositions.length; i++) {
      const marker = new kakao.maps.Marker({
        position: markerPositions[i].latlng,
        image: markerImage,
      });
      marker.setMap(map);

      const iwContent = `<div style = "padding:5px; font-weight:bold;">${markerPositions[i].title}</div>`;

      const infoWindow = new kakao.maps.InfoWindow({
        content: iwContent,
      });

      kakao.maps.event.addListener(marker, "mouseover", function () {
        infoWindow.open(map, marker);
      });

      kakao.maps.event.addListener(marker, "mouseout", function () {
        infoWindow.close();
      });

      kakao.maps.event.addListener(marker, "click", function () {
        const new_MarkerPositions = markerPositions.filter(
          (el) => el.id !== markerPositions[i].id
        );
        setMarkerPositions([
          ...new_MarkerPositions,
          {
            id: markerPositions[i].id,
            title: markerPositions[i].title,
            latlng: markerPositions[i].latlng,
            clicked: true,
          },
        ]);
      });
    }
  }, [markerPositions]);

  return (
    <Box>
      <Map id="map"></Map>
      <InfoBox>
        {markerPositions.map((el) => {
          return (
            <ShowInfo
              key={el.id}
              id={el.id}
              title={el.title}
              latlng={el.latlng}
              clicked={el.clicked}
              markerPositions={markerPositions}
              setMarkerPositions={setMarkerPositions}
              basketList={basketList}
              setBasketList={setBasketList}
            />
          );
        })}
      </InfoBox>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Map = styled.div`
  width: 75%;
  height: 100%;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export default KakaoMap;
