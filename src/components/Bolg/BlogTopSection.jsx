import { CloseOutlined, SearchOutlined } from "@mui/icons-material";
import { Button, FormControl, Input, InputAdornment } from "@mui/material";
import { useState } from "react";

const BlogTopSection = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <br />
      <div className="flex justify-between">
        <h2 className="opacity-75">All Posts</h2>
        <div className="flex -mt-0.5">
          <div>
            {showInput ? (
              <FormControl variant="standard">
                <Input
                  autoFocus
                  className="mr-6"
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchOutlined fontSize="small" />
                    </InputAdornment>
                  }
                  endAdornment={
                    <div
                      onClick={() => {
                        setShowInput(!showInput);
                      }}
                    >
                      <InputAdornment position="end" className="cursor-pointer">
                        <CloseOutlined fontSize="small" />
                      </InputAdornment>
                    </div>
                  }
                />
              </FormControl>
            ) : (
              <SearchOutlined
                fontSize="small"
                className="mr-6 cursor-pointer mt-2 opacity-70"
                onClick={() => setShowInput(true)}
              />
            )}
          </div>
          <Button type="button" className="blg-login-btn">
            Log in / Sign up
          </Button>
        </div>
      </div>
      <br />
    </>
  );
};

export default BlogTopSection;
