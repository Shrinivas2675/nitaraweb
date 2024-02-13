import { InsertLink } from "@mui/icons-material";
import DialogTitleWithCls from "./DialogTitleWithCls";
import { Dialog, DialogContent } from "@mui/material";

const ShareLinkModal = (props) => {
  const { open, handleClose, url } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitleWithCls handleClose={handleClose} />
      <DialogContent className="m-8 ml-20 mr-20">
        <div className="opacity-90">
          <InsertLink
            fontSize="small"
            className="cursor-pointer hover:opacity-75 mr-2 -rotate-45 "
          />
          Share Link
        </div>
        <input
          type="text"
          readOnly
          className="w-80 border-gray-200 border-2 rounded-none text-sm border-black p-2 mt-6 mt-8"
          defaultValue={url}
        />
        <div className="mt-8" />
        <div className="text-end">
          <button
            type="button"
            className="share-link-cancel"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="share-link-copy"
            onClick={() => navigator.clipboard.writeText(url)}
          >
            Copy Link
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareLinkModal;
