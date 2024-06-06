import styled from "styled-components";
import ProductList from "./ProductList";

const storeList = [
  {
    id: 1,
    title: "팥 붕어빵",
    price1: 700,
    price3: 2000,
    img: "팥 붕어빵.jpg",
  },
  {
    id: 2,
    title: "슈크림 붕어빵",
    price1: 700,
    price3: 2000,
    img: "슈크림 붕어빵.jpg",
  },
  {
    id: 3,
    title: "피자 붕어빵",
    price1: 1100,
    price3: 3000,
    img: "피자 붕어빵.jpg",
  },
];

const ShowInfo = ({
  id,
  title,
  latlng,
  clicked,
  markerPositions,
  setMarkerPositions,
  basketList,
  setBasketList,
}) => {
  const onClickClosetBtn = (e) => {
    const new_MarkerPositions = markerPositions.filter((el) => el.id !== id);
    setMarkerPositions([
      ...new_MarkerPositions,
      {
        id: id,
        title: title,
        latlng: latlng,
        clicked: false,
      },
    ]);
  };

  return (
    <Box>
      {clicked === true ? (
        <InfoBox>
          <TitleBox>
            <Title>{title}</Title>
            <CloseBtn onClick={onClickClosetBtn}>닫기</CloseBtn>
          </TitleBox>
          <Hr />
          {storeList.map((el) => {
            return (
              <ProductList
                key={el.id}
                id={el.id}
                title={el.title}
                price1={el.price1}
                price3={el.price3}
                img={el.img}
                basketList={basketList}
                setBasketList={setBasketList}
              />
            );
          })}
        </InfoBox>
      ) : (
        <></>
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const InfoBox = styled.div``;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
`;
const CloseBtn = styled.button`
  width: 75px;
  height: 40px;
  font-weight: bold;
  font-size: 20px;
  color: #ff99cc;
  background-color: white;
  border: 2px solid #ff99cc;
  border-radius: 20px;
  &:hover {
    background-color: #ff99cc;
    color: white;
  }
`;

const Title = styled.div`
  color: #ff99cc;
  font-size: 50px;
  font-weight: bold;
`;

const Hr = styled.hr`
  border: none;
  background-color: lightgray;
  height: 2px;
  width: 100%;
`;

export default ShowInfo;
