import { CloseOutlined } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import ImageGallery from "react-image-gallery";
import { OpenInFull, CloseFullscreen } from "@mui/icons-material";
import { useEffect, useState } from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShareModal from "../Common/ShareModal";

const GalleryPreview = (props) => {
  const { images, isOpen, handleClose } = props;
  const [isClose, setIsClose] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const [isLike, setIsLike] = useState(false);
  const [isShareDialog, setIsShareDialog] = useState(false);

  useEffect(() => {
    if (images?.length) {
      setCurrentImg(images[0]);
    }
  }, [images]);

  return (
    <Dialog open={isOpen} onClose={() => {}} fullScreen>
      <DialogTitle className="dialog-title">
        {/*  */}
        <div className="flex justify-between">
          <div className="flex">
            {isClose ? (
              <OpenInFull
                className="cursor-pointer mt-1"
                onClick={() => setIsClose(!isClose)}
              />
            ) : (
              <CloseFullscreen
                className="cursor-pointer mt-1"
                onClick={() => setIsClose(!isClose)}
              />
            )}
            {isClose && (
              <>
                <div className="ml-5">
                  {!isLike ? (
                    <FavoriteBorderRoundedIcon
                      onClick={() => setIsLike(!isLike)}
                      className="-mt-1 cursor-pointer hover:opacity-75"
                    />
                  ) : (
                    <FavoriteRoundedIcon
                      onClick={() => setIsLike(!isLike)}
                      className="-mt-1 text-red-600 cursor-pointer hover:opacity-75"
                    />
                  )}
                  <span className="pl-2">20</span>
                </div>
                <div
                  className="mt-1 cursor-pointer ml-5"
                  onClick={() => setIsShareDialog(true)}
                >
                  <img src="/share.svg" alt="share" />
                </div>
              </>
            )}
          </div>
          <CloseOutlined
            fontSize="large"
            className="cursor-pointer"
            onClick={handleClose}
          />
        </div>
      </DialogTitle>
      <DialogContent>
        {isClose ? (
          <Grid container>
            <Grid item lg={8}>
              <ImageGallery
                infinite={false}
                showFullscreenButton={false}
                items={images.map((x) => ({
                  original: x.src,
                  thumbnail: x.src,
                }))}
                showThumbnails={false}
                showPlayButton={false}
                onBeforeSlide={(index) => {
                  setCurrentImg(images[index]);
                }}
              />
            </Grid>
            <Grid item lg={4} className="pl-4">
              <div className="gallery-list-side-title mt-16">
                {currentImg?.title}
              </div>
              <div>{currentImg?.desc}</div>
            </Grid>
          </Grid>
        ) : (
          <ImageGallery
            infinite={false}
            showFullscreenButton={false}
            items={images.map((x) => ({
              original: x.src,
              thumbnail: x.src,
            }))}
            showThumbnails={false}
            showPlayButton={false}
          />
        )}
        {isShareDialog && (
          <ShareModal
            open={isShareDialog}
            handleClose={() => setIsShareDialog(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GalleryPreview;
