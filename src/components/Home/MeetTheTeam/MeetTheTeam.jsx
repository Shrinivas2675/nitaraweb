import { Container, Grid } from "@mui/material";
import SectionHeading from "../SectionHeading";
import MeetTeamImg from "./MeetTeamImg";

const MeetTheTeam = () => {
  return (
    <div>
      <SectionHeading heading="MEET THE TEAM" />
      <Container>
        <Grid container className="mt-20 flex justify-center">
          <MeetTeamImg
            src="https://static.wixstatic.com/media/c6a68f_ebc0ba1d12574b0daf7c6d94597ca6a6~mv2.png/v1/crop/x_141,y_45,w_1631,h_1639/fill/w_270,h_271,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Manish%20Jain_edited.png"
            alt="Manish Jain_edited.png"
            name="Manish Jain"
            role={"Founder"}
          />
          <MeetTeamImg
            src="https://static.wixstatic.com/media/c6a68f_4f31a1f49c2544909b8aebaad22f7a4d~mv2.jpg/v1/crop/x_112,y_1002,w_1706,h_1764/fill/w_263,h_271,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Amee_Desai_edited.jpg"
            alt="Amee Desai.png"
            name="Amee Desai"
            role={"Co Founder"}
          />
          <div className="mt-6 meet-team-desc">
            NITARA is built by a group of Entrepreneurs, Tech Industry veterans,
            Dairy experts, and technologists with a strong industry background
            and over two decades of Industry experience. Our core sales,
            marketing, and technology teams have traversed the whole country and
            continue doing so to understand the clientele and animals we serve
            at all levels.{" "}
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default MeetTheTeam;
