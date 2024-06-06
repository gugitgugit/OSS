import styled from "styled-components";

const ProductList = ({
  id,
  title,
  price1,
  price3,
  img,
  basketList,
  setBasketList,
  count,
  setCount,
}) => {
  const appendBasket = () => {
    const new_BasketList = basketList.filter((el) => el.id !== id);
    const find_BasketList = basketList.find((el) => el.id === id);
    if (find_BasketList !== undefined) {
      setCount(find_BasketList.count + 1);
      setCount(count + 1);
    } else setCount(1);

    setBasketList([
      ...new_BasketList,
      {
        id: id,
        title: title,
        price1: price1,
        price3: price3,
        img: img,
        count: count,
      },
    ]);
    alert("담겼습니다!");
  };

  return (
    <Box>
      <ProductImg src={img} alt="상품 이미지" />
      <InfoBox>
        <Title>{title}</Title>
        <Hr />
        <Price>1개 : {price1} 원</Price>
        <Price>3개 : {price3} 원</Price>
        <ButtonBox>
          <BasketBtn onClick={appendBasket}>장바구니에 1개 담기</BasketBtn>
        </ButtonBox>
      </InfoBox>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  padding: 10px;
`;

const ProductImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  border: 2px solid #ff99cc;
`;

const InfoBox = styled.div`
  padding-left: 10px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: gray;
`;

const Hr = styled.hr`
  height: 2px;
  background-color: gray;
  border: none;
`;

const Price = styled.div`
  margin: 10px 0px;
  font-weight: bold;
  color: gray;
`;

const ButtonBox = styled.div`
  margin: 20px auto;
`;
const BasketBtn = styled.button`
  padding: 10px;
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

export default ProductList;
