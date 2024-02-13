import { Grid } from "@mui/material";
import SectionHeading from "./SectionHeading";

const Collaboration = () => {
  return (
    <div>
      <SectionHeading heading="OUR COLLABORATIONS" />
      <Grid container className="mt-14">
        <Grid item lg={3}>
          <div className="collab-section">
            <div className="text-middle">
              NITARA joins hands with Ambuja Cement Foundation (ACF) Team to
              support the Dairy Digitisation initiative
            </div>
          </div>
        </Grid>
        <Grid item lg={3}>
          <div className="collab-section">
            <img
              src="https://static.wixstatic.com/media/c6a68f_b4246e2ea889487a8cd477691507897c~mv2.png/v1/fill/w_475,h_635,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c6a68f_b4246e2ea889487a8cd477691507897c~mv2.png"
              alt="NITARA_ACF Association.png"
              //   style=""
              width="100%"
              height="100%"
            />
          </div>
        </Grid>
        <Grid item lg={6}>
          <div className="collab-section p-16">
            Blending ACF's strong experience in field interventions with
            NITARA's deep technology-led dairy domain expertise, the association
            seeks to enhance the livelihood of dairy farmers across the Kodinar
            region.
            <br />
            <br />
            Together we support marginal farmers to offer end-to-end technology
            interventions leading to optimized Breeding, improved cattle health,
            and customized nutrition.
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Collaboration;
