import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid, Popover, Typography } from "@mui/material";
import { useState } from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShareModal from "../Common/ShareModal";
import { useNavigate } from "react-router";

const BlogDetail = (props) => {
  const { title, desc, views, comments, src } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLike, setIsLike] = useState(false);
  const [isShareDialog, setIsShareDialog] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openShare = () => {
    setAnchorEl(null);
    setIsShareDialog(true);
  };

  const closeShare = () => {
    setIsShareDialog(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const navigate = useNavigate();
  return (
    <>
      <Grid container className="border">
        <Grid
          item
          lg={6}
          onClick={() => navigate("/blog/6-mantras-of-successful-calf-raising")}
        >
          <img
            alt={"blog-img"}
            data-hook="gallery-item-image-img"
            data-idx="0"
            src={src}
            loading="eager"
            className="blog-img curosr-pointer"
          />
        </Grid>
        <Grid item lg={6} className="relative p-4">
          <div className="flex justify-between">
            <table>
              <tbody>
                <tr>
                  <td rowSpan={2}>
                    <img
                      alt="Writer's picture"
                      src="https://static.wixstatic.com/media/c6a68f_81bacd8e78c34b13ba88e0874e64790d%7Emv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c6a68f_81bacd8e78c34b13ba88e0874e64790d%7Emv2.png"
                      height={"32px"}
                      width={"32px"}
                    />
                  </td>
                  <td className="blog-extra-detail relative top-1.5 flex">
                    NITARA
                    <img src="/blog-feather.svg" alt="Logo" />
                  </td>
                </tr>
                <tr>
                  <td className="blog-extra-detail relative">
                    MAR 4,2022 - 3 Min
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="cursor-pointer" onClick={handleClick}>
              <MoreVertIcon fontSize="small" />
            </div>
          </div>
          <div
            className="blog-text mt-3"
            onClick={() =>
              navigate("/blog/6-mantras-of-successful-calf-raising")
            }
          >
            <p className="blog-title">{title}</p>
            <div className="blog-desc mt-5">{desc}</div>
          </div>
          <hr className="mt-3 mb-3 blog-hr" />
          <div className="flex">
            <div className="blog-view-count">
              {views} Views <span className="pl-4"> {comments} Comments</span>
            </div>
            <div className="likes">
              3{" "}
              {isLike ? (
                <FavoriteRoundedIcon
                  fontSize="small"
                  className="cursor-pointer text-red-600"
                  onClick={() => setIsLike(!isLike)}
                />
              ) : (
                <FavoriteBorderRoundedIcon
                  fontSize="small"
                  className="cursor-pointer text-red-600 hover:opacity-75"
                  onClick={() => setIsLike(!isLike)}
                />
              )}
            </div>
          </div>
        </Grid>
      </Grid>
      {open && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Typography
            sx={{ p: 2, pl: 6, pr: 6, cursor: "pointer" }}
            onClick={openShare}
            className="flex"
          >
            <img src="/share.svg" alt="share" />
            <span className="ml-2">Share Post</span>
          </Typography>
        </Popover>
      )}
      <br />
      {isShareDialog && (
        <ShareModal open={isShareDialog} handleClose={closeShare} src={src} />
      )}
    </>
  );
};

export default BlogDetail;
