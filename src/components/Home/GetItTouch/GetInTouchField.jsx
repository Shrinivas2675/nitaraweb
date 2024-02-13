import { ErrorMessage, useField } from "formik";

const GetInTouchField = (props) => {
  const { lbl, name, placeholder, noOfRows, id } = props;
  const [field, meta] = useField(name);
  return (
    <div className="formField">
      <label className="get-in-touch-lbl">{lbl}</label>
      <br />
      <input
        name={name}
        id={id}
        type="text"
        className={`get-in-touch-field ${meta.error ? "errorInput" : ""}`}
        placeholder={placeholder}
        multiple={Number(noOfRows) > 0}
        autoComplete="off"
        {...field}
      ></input>
      {meta.error ? (
        <p className="fieldErrorMsg">
          <ErrorMessage name={name} />
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GetInTouchField;
