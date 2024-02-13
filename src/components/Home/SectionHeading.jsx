const SectionHeading = (props) => {
  return (
    <>
      <h1 className="get-in-touch-title mt-10">{props.heading}</h1>
      <div className="flex justify-center mt-4">
        <hr className="get-in-touch-bottom-line" />
      </div>
    </>
  );
};

export default SectionHeading;
