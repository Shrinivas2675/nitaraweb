import { Button, Container, Grid } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import GetInTouchField from "./GetInTouchField";
import SectionHeading from "../SectionHeading";

const GetInTouch = () => {
  const initialValues = {
    firstName: "",
    phone: "",
    email: "",
    msg: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .nullable()
      .email("Please enter a valid Email.")
      .required("Email is required."),
  });

  const handleSend = () => {};

  return (
    <Container id="home-get-in-touch">
      <br />
      <Grid container>
        <Grid item lg={8}>
          <SectionHeading heading="GET IN TOUCH" />
          <div className="get-in-touch-desc">
            We have always liked having a personal touch with the people we
            associate with. Be it with the people we impact or the people who
            help us create that impact, both are equally important to us.
          </div>
        </Grid>
        <Grid item lg={4}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSend}
          >
            {({ handleSubmit }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <GetInTouchField
                    name="firstName"
                    lbl={"First Name"}
                    placeholder="First Name"
                  />
                  <GetInTouchField
                    name="phone"
                    lbl={"Phone"}
                    placeholder="Phone"
                  />
                  <GetInTouchField
                    name="email"
                    lbl={"Email *"}
                    placeholder="e.g.,email@example.com"
                  />
                  <GetInTouchField
                    name="msg"
                    lbl={"Your Message"}
                    placeholder="Text Here"
                    noOfRows={4}
                  />

                  <Button type="submit" className="get-in-touch-send-btn">
                    Send
                  </Button>
                </form>
              );
            }}
          </Formik>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default GetInTouch;
