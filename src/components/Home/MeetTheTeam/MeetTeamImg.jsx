import { Grid } from "@mui/material";

const MeetTeamImg = (props) => {
  const { name, src, alt, role } = props;
  return (
    <>
      <Grid item lg={4} className="flex justify-center">
        <div>
          <img src={src} alt={alt} className="meet-team-img" />
          <div className="text-center mt-8">
            <p className="meet-team-name">{name}</p>
            <p className="meet-team-role">{role}</p>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default MeetTeamImg;
