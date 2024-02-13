import DialogTitleWithCls from "./DialogTitleWithCls";
import { Dialog, DialogContent } from "@mui/material";

const DiscardModal = (props) => {
  const { open, handleClose, handleDiscard } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitleWithCls handleClose={handleClose} />
      <DialogContent className="m-8 ml-20 mr-20 text-center">
        <div className="desc-color opacity-90 text-3xl">Discard Comment?</div>
        <br />
        <div className="opacity-90">Your comment will not saved</div>
        <div className="mt-8" />
        <button
          type="button"
          className="discard-modal-cancel"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          type="button"
          className="discard-modal-discard"
          onClick={handleDiscard}
        >
          Discard
        </button>
        <br />
        <br />
      </DialogContent>
    </Dialog>
  );
};

export default DiscardModal;
