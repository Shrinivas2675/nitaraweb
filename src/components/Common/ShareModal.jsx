import {
  Check,
  ContentCopyOutlined,
  Email,
  FacebookOutlined,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import { Dialog, DialogContent } from "@mui/material";
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TumblrShareButton,
  TwitterShareButton,
} from "react-share";
import DialogTitleWithCls from "./DialogTitleWithCls";
import { useState } from "react";

const ShareModal = (props) => {
  const { open, handleClose, src } = props;
  const [isCopied, setIsCopied] = useState(false);
  const url =
    "https://www.nitara.co.in/post/6-mantras-of-successful-calf-raising";

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitleWithCls handleClose={handleClose} />
      <DialogContent className="m-16 ml-24 mr-24">
        <div className="flex justify-between w-100">
          <FacebookShareButton url={url}>
            <FacebookOutlined
              fontSize="large"
              className="cursor-pointer hover:opacity-75 "
            />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <Twitter
              fontSize="large"
              className="cursor-pointer hover:opacity-75 "
            />
          </TwitterShareButton>
          <PinterestShareButton
            description={"Dairy+Talkie"}
            media={src}
            url={url}
          >
            <Pinterest
              fontSize="large"
              className="cursor-pointer hover:opacity-75 "
            />
          </PinterestShareButton>
          <TumblrShareButton url={url} className="-mt-2">
            <img
              src="/tumblr.svg"
              className="cursor-pointer  hover:opacity-75  tumblr-share"
            />
          </TumblrShareButton>
          <EmailShareButton url={url}>
            <Email
              fontSize="large"
              className="cursor-pointer hover:opacity-75"
            />
          </EmailShareButton>
        </div>
        <div className="mt-8 flex h-10">
          <input
            type="text"
            readOnly
            className="w-80 border-solid border-2 rounded-none text-sm border-black p-2 pt-4 pb-4"
            defaultValue={url}
          />
          <div
            className="bg-black cursor-pointer hover:opacity-75 p-2"
            onClick={handleCopy}
          >
            {isCopied ? (
              <Check className="text-white -mt-1 " fontSize="small" />
            ) : (
              <ContentCopyOutlined
                className="text-white -mt-1 "
                fontSize="small"
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
