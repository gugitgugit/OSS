import styled from "styled-components";

const BasketList = ({
  index,
  id,
  title,
  price1,
  price3,
  img,
  count,
  basketList,
  setBasketList,
}) => {
  const incCount = () => {
    const find_List = basketList.find((el) => el.id === id);
    const index = basketList.indexOf(find_List);
    const new_BasketList = basketList;
    if (new_BasketList[index].count >= 0)
      new_BasketList[index].count = count + 1;
    setBasketList([...new_BasketList]);
  };

  const decCount = () => {
    const find_List = basketList.find((el) => el.id === id);
    const index = basketList.indexOf(find_List);
    const new_BasketList = basketList;
    if (new_BasketList[index].count >= 1)
      new_BasketList[index].count = count - 1;
    setBasketList([...new_BasketList]);
  };

  const onClickDeleteBtn = () => {
    const new_BasketList = basketList.filter((el) => el.id !== id);
    setBasketList([...new_BasketList]);
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
          <CountBtn onClick={decCount}>-</CountBtn>
          <Count>{count}</Count>
          <CountBtn onClick={incCount}>+</CountBtn>
          <DeleteBtn onClick={onClickDeleteBtn}>삭제</DeleteBtn>
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
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ff99cc;
  border-radius: 40px;
  width: 100px;
  height: 50px;
  font-size: 40px;
  color: #ff99cc;
  font-weight: bold;
`;

const CountBtn = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-weight: bold;
  font-size: 40px;

  background-color: #ff99cc;
  color: white;

  border: 2px solid #ff99cc;
  border-radius: 25px;
  &:hover {
    background-color: white;
    color: #ff99cc;
  }
`;

const DeleteBtn = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  font-weight: bold;
  font-size: 30px;
  background-color: white;
  color: #ff99cc;
  margin-left: 100px;
  border: 2px solid #ff99cc;
  border-radius: 25px;
  &:hover {
    background-color: #ff99cc;
    color: white;
  }
`;

export default BasketList;
