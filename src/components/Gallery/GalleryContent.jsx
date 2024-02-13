import { useState } from "react";
import ShareModal from "../Common/ShareModal";

const GalleryContent = (props) => {
  const {
    title,
    desc,
    src,
    // likeCount,
    index,
    isAllowRowSpan,
    setIsImagePreview,
  } = props;
  // const [isLike, setIsLike] = useState(false);
  const [isShareDialog, setIsShareDialog] = useState(false);

  const openShare = () => {
    setIsShareDialog(true);
  };

  const closeShare = () => {
    setIsShareDialog(false);
  };

  const isRowSpan = (index + 1) % 2 === 0 && isAllowRowSpan;

  return (
    <>
      <td className="relative p-2" rowSpan={isRowSpan ? 2 : 1}>
        <div
          className="absolute flex text-center align-center h-full items-center p-6 cursor-pointer"
          onClick={(e) => {
            if (!e.defaultPrevented) setIsImagePreview(true);
          }}
        >
          <div>
            <h1 className="home-gallery-title text-white">{title}</h1>
            <p className="home-gallery-desc text-white pt-4">{desc}</p>
            <div
              className={`m-6 flex justify-between text-white ${
                isRowSpan ? "relative top-36" : ""
              }`}
            >
              <div>
                {/* {!isLike ? (
                  <FavoriteBorderRoundedIcon
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLike(!isLike);
                    }}
                    className="-mt-1 cursor-pointer hover:opacity-75"
                  />
                ) : (
                  <FavoriteRoundedIcon
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLike(!isLike);
                    }}
                    className="-mt-1 text-red-600 cursor-pointer hover:opacity-75"
                  />
                )}
                <span className="pl-2">{likeCount}</span> */}
              </div>
              <div
                className="-mt-1 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  openShare();
                }}
              >
                <img src="/share-white.svg" alt="share" />
              </div>
            </div>
          </div>
        </div>
        <img
          src={src}
          className={`gallery-${isRowSpan ? "full" : "small"}-img`}
        />
      </td>

      {isShareDialog && (
        <ShareModal open={isShareDialog} handleClose={closeShare} />
      )}
    </>
  );
};

export default GalleryContent;
