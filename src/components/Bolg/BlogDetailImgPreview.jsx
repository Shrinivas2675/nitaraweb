import { CloseFullscreen, CloseOutlined } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import ImageGallery from "react-image-gallery";

const BlogDetailImgpreview = (props) => {
  const { images, isOpen, handleClose, index } = props;

  return (
    <Dialog open={isOpen} onClose={handleClose} fullScreen>
      <DialogTitle className="dialog-title">
        {/*  */}
        <div className="flex justify-between">
          <div className="flex">
            <CloseFullscreen
              className="cursor-pointer mt-1"
              onClick={handleClose}
            />
          </div>
          <CloseOutlined
            fontSize="large"
            className="cursor-pointer"
            onClick={handleClose}
          />
        </div>
      </DialogTitle>
      <DialogContent>
        <ImageGallery
          infinite={false}
          showFullscreenButton={false}
          items={images.map((x) => ({
            original: x,
            thumbnail: x,
          }))}
          showThumbnails={false}
          showPlayButton={false}
          startIndex={index ? index : 0}
        />
      </DialogContent>
    </Dialog>
  );
};

export default BlogDetailImgpreview;
