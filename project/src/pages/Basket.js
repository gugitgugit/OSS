const Basket = ({ title, basketList, setBasketList, count, setCount }) => {
  return (
    <div>
      {basketList.map((el) => {
        return (
          <div>
            <div>{el.title}</div>
            <div>{el.price1}</div>
            <div>{el.price3}</div>
            <div>{el.count}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Basket;
