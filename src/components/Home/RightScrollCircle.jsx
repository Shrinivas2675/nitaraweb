const RightScrollCircle = (props) => {
  const { name, handleClick, active } = props;
  return (
    <div
      className={`circle cursor-pointer ${active === name ? "active" : ""}`}
      onClick={() => {
        handleClick(name);
      }}
    ></div>
  );
};

export default RightScrollCircle;
