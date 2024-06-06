import styled from "styled-components";
import BasketList from "../Components/BasketList";

const Basket = ({ basketList, setBasketList }) => {
  let totalPrice = 0;
  basketList.map((el) => {
    totalPrice +=
      (el.count % 3) * el.price1 + parseInt(el.count / 3) * el.price3;
    return true;
  });

  return (
    <Box>
      <BasketTitle>장바구니</BasketTitle>
      <Hr />
      {basketList.map((el) => {
        return (
          <div>
            <BasketList
              id={el.id}
              title={el.title}
              price1={el.price1}
              price3={el.price3}
              img={el.img}
              count={el.count}
              basketList={basketList}
              setBasketList={setBasketList}
            />
          </div>
        );
      })}
      <Hr />
      <BasketTitle>총액 : {totalPrice} 원</BasketTitle>
    </Box>
  );
};

const Box = styled.div`
  padding: 10px;
`;

const Hr = styled.hr`
  height: 3px;
  background-color: #ff99cc;
  border: none;
`;

const BasketTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: #ff99cc;
`;

export default Basket;
