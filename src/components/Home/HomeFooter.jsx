import { Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const HomeFooter = () => {
  return (
    <div className="home-footer">
      <Container>
        <br />
        <br />
        <br />
        <Grid container spacing={1} className="p-9 mt-9">
          <Grid item sm={3} className="pr-9">
            <div>
              <br />
              <div className="flex">
                <img
                  src="https://static.wixstatic.com/media/c6a68f_45256286be9e473f9a0106194a695ef4~mv2.png/v1/crop/x_4,y_0,w_934,h_245/fill/w_241,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/New%20Logo-11.png"
                  alt="New Logo-11.png"
                  className="home-footer-img1"
                ></img>
                <img
                  src="https://static.wixstatic.com/media/c6a68f_13a3f3656d564422a625abec2b390911~mv2.png/v1/crop/x_104,y_101,w_284,h_284/fill/w_21,h_21,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c6a68f_13a3f3656d564422a625abec2b390911~mv2.png"
                  alt=""
                  className="rights-logo"
                ></img>
              </div>
              <br />
              <br />
              <div>
                <h2 className="text-white font-bold text-lg">Follow Us</h2>
                <div className="social-media-handler mt-6 flex">
                  <a
                    href="https://www.youtube.com/watch?v=aPLCrNHEvJE"
                    target="_blank"
                  >
                    <img
                      className="social-icn"
                      alt="YouTube"
                      src="https://static.wixstatic.com/media/a1b09fe8b7f04378a9fe076748ad4a6a.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a1b09fe8b7f04378a9fe076748ad4a6a.png"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nitara-gormalone/?viewAsMember=true"
                    target="_blank"
                  >
                    <img
                      className="social-icn"
                      alt="Linked In"
                      src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/48a2a42b19814efaa824450f23e8a253.png"
                    />
                  </a>
                  <a href="https://www.facebook.com/NitaraInd" target="_blank">
                    <img
                      className="social-icn"
                      alt="Facebook"
                      src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/nitara.dairy/"
                    target="_blank"
                  >
                    <img
                      className="social-icn"
                      alt="YouTube"
                      src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9f9c321c774844b793180620472aa4f1.png"
                    />
                  </a>
                </div>
                <div className="mt-36">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nitara.farmer&pli=1"
                    target="_blank"
                  >
                    <img
                      src="https://static.wixstatic.com/media/c6a68f_07aae5681d5947ec819045a00f19add7~mv2.png/v1/fill/w_241,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c6a68f_07aae5681d5947ec819045a00f19add7~mv2.png"
                      alt=""
                      role="none"
                      width="193"
                      height="60"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item sm={3} className="pr-9">
            <div className="home-footer-content">
              <br />
              <h3 className="home-footer-head">Site Navigation</h3>
              <br />
              <br />
              <div>
                <div className="mb-4">
                  <NavLink to={"/"} className={"home-footer-link"}>
                    Home
                  </NavLink>
                </div>
                <div className="mb-4">
                  <NavLink to={"/sss"} className={"home-footer-link mb-44"}>
                    Nitara
                  </NavLink>
                </div>
                <div className="mb-4">
                  <NavLink to={"/sss"} className={"home-footer-link mb-44"}>
                    About Us
                  </NavLink>
                </div>
                <div className="mb-4">
                  <NavLink to={"/sss"} className={"home-footer-link mb-44"}>
                    Contact Us
                  </NavLink>
                </div>
                <div className="mb-4">
                  <NavLink to={"/sss"} className={"home-footer-link mb-44"}>
                    Blog
                  </NavLink>
                </div>
                <br />
              </div>
            </div>
          </Grid>
          <Grid item sm={3} className="pr-9">
            <div className="home-footer-content">
              <br />
              <h3 className="home-footer-head">Mumbai Office</h3>
              <br />
              <br />
              <div className="text-white">
                112, Highway Commerce Centre, I B Patel Road, Goregaon East,
                Mumbai 400063
              </div>
            </div>
          </Grid>
          <Grid item sm={3} className="pr-9">
            <div className="home-footer-content">
              <br />
              <h3 className="home-footer-head">Bangalore Office</h3>
              <br />
              <br />
              <div className="text-white">
                4th floor, Evolve Work Studio, Plot No. 7F, Raj Pinnacle, 6th
                Cross, 1st Phase Doddanekundi Industrial Area, Bangalore 560048
              </div>
            </div>
          </Grid>
        </Grid>
        <h3 className="text-white text-lg text-center pb-1">© 2021 by NITARA®. </h3>
      </Container>
    </div>
  );
};

export default HomeFooter;
