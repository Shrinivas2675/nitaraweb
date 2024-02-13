import { Container, Grid } from "@mui/material";

const StakeHolderDetail = () => {
  return (
    <>
      <Container className="relative -mt-16">
        <Grid container className="absolute top-9 z-10 p-4">
          <Grid item lg={3}>
            <div className="stake-holder-summary-count">870+</div>
            <div className="stake-holder-summary-desc mt-2">VILLAGES</div>
          </Grid>
          <Grid item lg={3.5}>
            <div className="stake-holder-summary-count">4,00,000+</div>
            <div className="stake-holder-summary-desc mt-2">
              PREDICTABLE CATTLE{" "}
            </div>
          </Grid>
          <Grid item lg={3}>
            <div className="stake-holder-summary-count">270+</div>
            <div className="stake-holder-summary-desc mt-2">
              SERVICE PROVIDERS
            </div>
          </Grid>
          <Grid item lg={2.5}>
            <div className="stake-holder-summary-count">13+</div>
            <div className="stake-holder-summary-desc mt-2">LANGUAGES</div>
          </Grid>
        </Grid>
      </Container>
      <img
        src="https://static.wixstatic.com/media/c6a68f_c0d57a204eb940db95e43d3e54afd97f~mv2.png/v1/fill/w_1343,h_300,al_c,lg_1,q_90,enc_auto/Collage.png"
        width={"100%"}
        className="stakeholder-cover-img"
      />
      <svg id="svg_comp-lhfxazhn" className="gSXewE hidden">
        <defs>
          <filter id="nightrain-comp-lhfxazhn">
            <feComponentTransfer result="srcRGB"></feComponentTransfer>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
            <feColorMatrix
              type="matrix"
              values="0.37254901960784315 0 0 0 0.1843137254901961 0.35294117647058826 0 0 0 0.23529411764705882 0.28235294117647064 0 0 0 0.42745098039215684 0 0 0 1 0"
            ></feColorMatrix>
            <feComponentTransfer></feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <Container className="stakeholder-container -mt-14">
        <video
          id="comp-lh5wai3h_video"
          preload="auto"
          muted
          loop={true}
          autoPlay={true}
          src="https://video.wixstatic.com/video/c6a68f_afb5c3523ad14168ae85dc5c2fd2a8a1/720p/mp4/file.mp4"
          // style=""
        ></video>
        <div className="text-center -mt-10">
          <h2 className="our-sol-title">CREATING VALUE FOR STAKEHOLDERS</h2>
          <div className="sub-detail p-10">
            NITARA transforms businesses in the dairy industry, from{" "}
            <b>farmers</b> to <b>service providers</b> like milk collectors and
            veterinarians.
            <br />
            <br />
            Our solutions serve dairies, genetics companies, research
            foundations, NGOs, cattle feed suppliers, and more. Government
            bodies involved in animal husbandry and farmer development can also
            benefit from our technology and data intelligence.
          </div>
        </div>
      </Container>
    </>
  );
};

export default StakeHolderDetail;
