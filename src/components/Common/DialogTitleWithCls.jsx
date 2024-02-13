import { CloseOutlined } from "@mui/icons-material";
import { DialogTitle } from "@mui/material";

const DialogTitleWithCls = (props) => {
  const { title, handleClose } = props;
  return (
    <DialogTitle className="dialog-title">
      {title && <div>{title}</div>}
      <div className="text-end cursor-pointer" onClick={handleClose}>
        <CloseOutlined />
      </div>
    </DialogTitle>
  );
};

export default DialogTitleWithCls;
