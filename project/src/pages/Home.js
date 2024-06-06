import KakaoMap from "../API/KakaoMap";
const Home = ({ basketList, setBasketList, count, setCount }) => {
  return (
    <KakaoMap
      basketList={basketList}
      setBasketList={setBasketList}
      count={count}
      setCount={setCount}
    />
  );
};

export default Home;
