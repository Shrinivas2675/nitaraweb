import {
  ChatBubbleOutlineOutlined,
  FacebookOutlined,
  InsertLink,
  LinkedIn,
  OpenInFull,
  Twitter,
  VisibilityOutlined,
} from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Button, Grid, Popover, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShareModal from "../Common/ShareModal";
import FroalaEditorComponent from "react-froala-wysiwyg";
import DiscardModal from "../Common/DiscardModal";
import BlogDetailImgpreview from "./BlogDetailImgPreview";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import ShareLinkModal from "../Common/ShareLinkModal";

const detailObj = {
  src: [
    "https://static.wixstatic.com/media/c6a68f_b8a23b93cfec45e8adcf1daa12984baf~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_b8a23b93cfec45e8adcf1daa12984baf~mv2.png",
    "https://static.wixstatic.com/media/c6a68f_f7ba2ff21d604651854c822ff63ffec1~mv2.png/v1/fill/w_925,h_520,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c6a68f_f7ba2ff21d604651854c822ff63ffec1~mv2.png",
  ],
  title:
    "7 things you should know about Calf Nutrition before starting a dairy farm",
  desc: `Calf rearing is one of the most crucial aspects of dairy farming. Timely rearing of healthy calf results in a healthy Heifer, which can...`,
  views: 65,
  comments: 0,

  recentItems: [
    {
      src: "https://static.wixstatic.com/media/c6a68f_81bc1a6aeec64e4985d20a39b97422b6~mv2.png/v1/fill/w_360,h_203,al_c,lg_1,q_85,enc_auto/c6a68f_81bc1a6aeec64e4985d20a39b97422b6~mv2.png",
      viewCount: 122,
      commentCount: 0,
      like: 1,
      title: "5 Reasons Why Deworming is important for your cattle",
    },
    {
      src: "https://static.wixstatic.com/media/c6a68f_dc344c8042b043759598f581b2ce9554~mv2.png/v1/fill/w_360,h_203,al_c,lg_1,q_85,enc_auto/c6a68f_dc344c8042b043759598f581b2ce9554~mv2.png",
      viewCount: 60,
      commentCount: 0,
      like: 1,
      title: "What all are the essential vaccinations required for my...",
    },
    {
      src: "https://static.wixstatic.com/media/c6a68f_db70f86357f74d24b924cbf8db2cd1ea~mv2.jpg/v1/fill/w_360,h_203,al_c,lg_1,q_80,enc_auto/c6a68f_db70f86357f74d24b924cbf8db2cd1ea~mv2.jpg",
      viewCount: 27,
      commentCount: 0,
      like: 1,
      title: "No information on where to collect data online? - Diwakar...",
    },
  ],
};

const BlogDetailAsPerPost = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isShareDialog, setIsShareDialog] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [editorState, setEditorState] = useState("");
  const [showDiscard, setShowDiscard] = useState(false);
  const [imgHover, setImgHover] = useState(false);
  const [showImgIndex, setShowImgIndex] = useState(null);
  const [showShareLink, setShowShareLink] = useState(false);

  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const url =
    "https://www.nitara.co.in/blog/6-mantras-of-successful-calf-raising";
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const recentPostClick = (title) => {
    navigate(`/blog/${title}`);
  };

  const renderRecentPost = (src, viewCount, commentCount, likeCount, title) => {
    return (
      <div className="border">
        <img
          alt=""
          src={src}
          width={288}
          height={162}
          onClick={() => recentPostClick(title)}
          className="cursor-pointer"
        ></img>
        <div className="p-6">
          <div
            onClick={() => recentPostClick(title)}
            className="desc-color text-medium cursor-pointer desc-hover opacity-75"
          >
            {title}
          </div>
          <div className="border mt-6 mb-3"></div>
          <div className="flex justify-between opacity-75">
            <div onClick={() => recentPostClick(title)}>
              <VisibilityOutlined
                fontSize="small"
                className="desc-hover cursor-pointer desc-color text-300 hover:opacity-75 mr-1.5"
              />
              <span className="text-sm">{viewCount}</span>
              <ChatBubbleOutlineOutlined
                fontSize="small"
                className="desc-hover cursor-pointer desc-color text-300 hover:opacity-75 mr-1.5 ml-4"
              />
              <span>{commentCount}</span>
            </div>
            <div>
              <span>{likeCount}</span>
              <FavoriteBorderRoundedIcon
                fontSize="small"
                className="cursor-pointer text-red-600 hover:opacity-75 ml-1.5 -mt-0.5"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const openShare = () => {
    setAnchorEl(null);
    setIsShareDialog(true);
  };

  const closeShare = () => {
    setIsShareDialog(false);
  };
  return (
    <>
      <div className="post-detail-section border p-20">
        <div className="flex justify-between -mt-3">
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
                  &nbsp; &nbsp;{" "}
                  <span className="text-sm opacity-80">NITARA</span>
                  <img src="/blog-feather.svg" alt="Logo" />
                  <span className="ml-2 mr-2 font-extrabold">.</span>
                  <span className="text-sm opacity-80">MAR 4,2022 </span>
                  <span className="ml-2 mr-2 font-extrabold">.</span>
                  <span className="text-sm opacity-80">3 min read</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cursor-pointer" onClick={handleClick}>
            <MoreVertIcon fontSize="small" />
          </div>
        </div>
        <h2 className="mt-10 title opacity-90 mb-16">{detailObj.title}</h2>
        <div
          className="relative"
          onMouseEnter={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
        >
          {imgHover && (
            <div
              onClick={() => setShowImgIndex(0)}
              className="absolute bg-white rounded-full right-2 top-1.5 cursor-pointer"
            >
              <OpenInFull fontSize="small" className="m-1" />
            </div>
          )}
          <img
            alt="Writer's picture"
            className="mt-10 w-full"
            src={detailObj.src[0]}
            height={"416px"}
          />
        </div>
        <div className="desc-color text-medium opacity-80">
          Calf rearing is one of the most crucial aspects of dairy farming.
          Timely rearing of healthy calf results in a healthy Heifer, which can
          again appear for the breeding cycle provided you have achieved the
          right body weight, nutrition, and health of the calf.
          <br /> <br />
          Ideally, it is said that if the calf rearing is done right a farmer
          can achieve 100 kg weight of the calf within 100 days.
          <br /> <br />
          In dairy farming, a farm becomes profitable if 25% of its cattle are
          calves. This process needs to be in continuation raising a good breed
          of calf becomes a mandate.
          <br /> <br />
          Remember your goal is to achieve high-milking cattle but to achieve
          that you will have to raise your calf right.
          <br /> <br />
          In a country like India, where the atmosphere and demographics are so
          diverse for the cattle, it is very important to have standardization
          in the calf rearing process. This would help in achieving a good breed
          of the heifer, thus will help in achieving high production of milk and
          another good breed of the calf.
          <br /> <br />
          But the question arises how?
          <br />
          To answer all your queries regarding Calf rearing here are the 7
          tested Mantras for calf rearing done right:
        </div>
        <br />
        <h2 className="desc-color font-bold text-2xl">
          Seven Mantras of Successful Calf Raising
        </h2>
        <br />
        <h2 className="desc-color font-bold text-lg font-size-22">
          1. Feed Colostrum within 6 hours from birth.
        </h2>
        <br />
        <div className="desc-color text-medium opacity-80 mt-3">
          Colostrum or Foremilk is a very important feed for the calf. Colostrum
          intake boosts the immunity of the calf to fight against diseases.
          Colostrum is also responsible for the total energy and nutrient intake
          of the calf. Thus, before serving the colostrum to your friends and
          family make sure the calf’s requirements are fulfilled.
        </div>
        <br />
        <h2 className="desc-color font-bold text-lg font-size-22">
          2. Take a note of the weight
        </h2>
        <div className="desc-color text-medium opacity-80 mt-1">
          Going ahead all the calculations regarding the calf growth will be
          based on the weight at the time of birth.
          <br />
          Without fail take a note of the weight, this will help you decide the
          right nutrient intake for the calf as per its actual requirement.
        </div>
        <br />
        <h2 className="desc-color font-bold text-lg font-size-22">
          3. Ensure a healthy diet for calf
        </h2>
        <div className="desc-color text-medium opacity-80 mt-1">
          Most of the farmers only give milk to the calf. Farmers are ready to
          give extra milk to the calf- but milk will not fulfill the nutrition
          requirement of a calf and additional consumption of milk can lead to
          health concerns like diarrhea. Diarrhea in infants can lead to death.
        </div>
        <br />
        <h2 className="desc-color font-bold text-lg font-size-22">
          4. When to start with Starter Feed?
        </h2>
        <div className="desc-color text-medium  mt-1">
          <ul className="list-disc pl-16 opacity-80">
            <li className="desc-color">
              You should start with the starter feed from the third week as only
              milk is not enough. The quantity of Starter feed should be 50g to
              start.
            </li>
            <li className="desc-color">
              Make sure the minimum protein content in the Starter feed should
              be at least 22 percent.
            </li>
            <li className="desc-color">
              Meeting the minimum protein requirement is mandated to ensure
              healthy weight gain of the calf.
            </li>
          </ul>
          <div
            className="relative"
            onMouseEnter={() => setImgHover(true)}
            onMouseLeave={() => setImgHover(false)}
          >
            {imgHover && (
              <div
                onClick={() => setShowImgIndex(1)}
                className="absolute bg-white rounded-full right-2 top-1.5 cursor-pointer"
              >
                <OpenInFull fontSize="small" className="m-1" />
              </div>
            )}
            <img
              src={detailObj.src[1]}
              alt="img"
              height={"416px"}
              width={"740px"}
              className="mt-6 w-full"
            />
          </div>
        </div>
        <br />
        <h2 className="desc-color font-bold text-lg font-size-22">
          5. Remember the target is to grow a healthy rumen and wean
        </h2>
        <div className="desc-color text-medium opacity-80 mt-1">
          This question generally arises, when to stop feeding milk or when is
          the right definite time to stop feeding milk to the calf.
          <br />
          There are a lot of myths around it some farmers feed till 4 months
          whereas some feed till 5 months, but the fact is if the calf starts
          digesting 1kg of feed-in given a time frame of 3 months that signifies
          that the growing rumen is healthy. Thus, as a farmer, you should stop
          feeding milk to the calf.
        </div>
        <br />
        <h2 className="desc-color font-bold text-lg font-size-22">
          6. Timely Deworming
        </h2>
        <div className="desc-color text-medium opacity-80 mt-1">
          Deworming should be started from the first week of the calf. A single
          oral dose of 10 g piperazine adipate is recommended for the calves
          preferably in the first week of life to control neonatal ascariasis,
          especially in buffalo calves.
          <br />
          <br />
          If you are not deworming, your calf the right way the vital nutrients
          will be consumed by the worms in the belly. Thus, the nutrient
          requirements of the calf won’t be fulfilled. This may result in
          dizziness, health issues, weight loss, constipation, and indigestion
          at times.
          <br />
          <br />
          Deworming should be done every month for the first 6 months,
          thereafter once in three months. The deworming drugs and dose should
          be consulted with a qualified veterinary doctor. Overdose and
          under-dose of deworming drugs should be prevented to check the side
          effects.
          <br />
          <br />
          One should maintain a proper record to keep updated on the deworming
          status of the cattle.
        </div>
        <br />
        <h2 className="desc-color font-bold text-lg font-size-22">
          7. Never miss a Vaccination Date
        </h2>
        <div className="desc-color text-medium opacity-80 mt-1">
          To keep the track of vaccination, consult an expert service provider
          or vet instead of a fellow dairy farmer or reference, maintain the
          records to never miss. Make sure you are going for regular check-ups
          to keep the track of the medical condition of the calf. Don’t
          compromise with any medical requirement of your calf this may result
          in deficiency or poor health. Remember, rearing healthy calves will
          ensure consistent profitability in your dairy farming business in the
          longer run.
        </div>
        <br />
        <div className="border border-l-0 border-r-0 p-4">
          <FacebookShareButton url={url}>
            <FacebookOutlined
              fontSize="small"
              className="cursor-pointer hover:opacity-75 mr-7 desc-hover "
            />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <Twitter
              fontSize="small"
              className="cursor-pointer hover:opacity-75 mr-7 desc-hover "
            />
          </TwitterShareButton>
          <LinkedinShareButton url={url}>
            <LinkedIn
              fontSize="small"
              className="cursor-pointer hover:opacity-75 mr-7 desc-hover "
            />
          </LinkedinShareButton>
          <InsertLink
            fontSize="small"
            className="cursor-pointer hover:opacity-75 mr-7 -rotate-45"
            onClick={() => setShowShareLink(true)}
          />
        </div>
        <div className="flex justify-between desc-color opacity-80 text-sm mt-4">
          <div>89 views &nbsp;&nbsp; 0 comments</div>
          <div>
            <span>1</span>
            <FavoriteBorderRoundedIcon
              fontSize="small"
              className="cursor-pointer text-red-600 hover:opacity-75 ml-1.5 -mt-0.5"
            />
          </div>
        </div>
      </div>
      <div className="recent-post-section mt-8 mb-8">
        <div className="flex justify-between mb-6 opacity-75">
          <div>Recent Posts</div>
          <div
            className="desc-color desc-hover cursor-pointer"
            onClick={() => navigate("/blog")}
          >
            See All
          </div>
        </div>
        <Grid container spacing={4}>
          {detailObj.recentItems.map((x, index) => (
            <Grid item sm={4} key={`recent-${index}`}>
              {renderRecentPost(
                x.src,
                x.viewCount,
                x.commentCount,
                x.like,
                x.title
              )}
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="border p-8 pl-20 pr-20">
        <p className=" mb-8 opacity-75">Comments</p>
        <div className="border mb-8" />
        {!showEditor ? (
          <TextField
            placeholder="Write a comment..."
            size="large"
            variant="outlined"
            className="w-full"
            onClickCapture={() => setShowEditor(true)}
          />
        ) : (
          <>
            <FroalaEditorComponent
              model={editorState}
              onModelChange={(e) => setEditorState(e)}
            />
            <div className="text-end mt-4">
              <Button
                type="button"
                className="blog-post-cancel"
                size="small"
                onClick={() => setShowDiscard(true)}
              >
                Cancel
              </Button>
              &nbsp; &nbsp;
              <Button
                type="button"
                className={`mr-2 blog-post-publish ${
                  editorState ? "active" : ""
                }`}
                size="small"
              >
                Publish
              </Button>
            </div>
          </>
        )}
      </div>
      <br />
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
      {isShareDialog && (
        <ShareModal
          open={isShareDialog}
          handleClose={closeShare}
          src={detailObj.src}
        />
      )}
      {showDiscard && (
        <DiscardModal
          open={showDiscard}
          handleClose={() => {
            setShowDiscard(false);
          }}
          handleDiscard={() => {
            setEditorState("");
            setShowDiscard(false);
            setShowEditor(false);
          }}
        />
      )}
      {showImgIndex !== null && (
        <BlogDetailImgpreview
          images={detailObj.src}
          isOpen={true}
          handleClose={() => {
            setShowImgIndex(null);
          }}
          index={showImgIndex}
        />
      )}
      {showShareLink && (
        <ShareLinkModal
          open={showShareLink}
          handleClose={() => {
            setShowShareLink(false);
          }}
          handleDiscard={() => {
            setShowShareLink(false);
          }}
          url={url}
        />
      )}
    </>
  );
};

export default BlogDetailAsPerPost;
