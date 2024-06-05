const ShowInfo = ({ title, clicked }) => {
  return (
    <div>
      {clicked === true ? (
        <div>
          <div>true입니다.</div>
          <div>{title}입니다.</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ShowInfo;
