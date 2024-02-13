import { Container, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";

const OurSolutionContent = (props) => {
  const { src, alt, title, desc, isEven } = props;
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Container>
      <div ref={ref}>
        <Grid
          container
          className={`our-sol-container ${inView ? "out-sol-anim" : ""}`}
        >
          {isEven ? (
            <>
              <Grid item lg={2.5} className="flex align-center">
                <div className="our-sol-img mt-16">
                  <img src={src} alt={alt} />
                </div>
              </Grid>
              <Grid item lg={9.5} className="pl-8">
                <h1 className="our-sol-title">{title}</h1>
                <div className="our-sol-desc mt-6">{desc}</div>
              </Grid>
            </>
          ) : (
            <>
              <Grid item lg={9.5} className="pr-8">
                <h1 className="our-sol-title">{title}</h1>
                <div className="our-sol-desc mt-6">{desc}</div>
              </Grid>
              <Grid item lg={2.5} className="flex align-center">
                <div className="our-sol-img mt-16">
                  <img src={src} alt={alt} />
                </div>
              </Grid>
            </>
          )}

          <hr className="our-sol-line mt-16" />
        </Grid>
      </div>
    </Container>
  );
};

export default OurSolutionContent;
