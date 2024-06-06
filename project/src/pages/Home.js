import KakaoMap from "../API/KakaoMap";

const Home = ({ basketList, setBasketList }) => {
  return <KakaoMap basketList={basketList} setBasketList={setBasketList} />;
};

export default Home;
