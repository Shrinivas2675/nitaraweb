import { Container } from "@mui/material";
import SectionHeading from "../Home/SectionHeading";
import { Fragment, useState } from "react";
import GalleryContent from "./GalleryContent";
import GalleryPreview from "./GalleryPreview";

const galArr = [
  {
    title: "Dairy Talkies",
    desc: "This is from one of our Dairy Farm visits in interior villages of Gujarat. We often visit dairy farms to interact with dairy farmers, and try to understand their difficulties and help them with a solution.",
    src: "https://static.wixstatic.com/media/c6a68f_a7fae95f69694c7480ade2066315ac53~mv2.jpeg/v1/fit/w_895,h_302,q_90/c6a68f_a7fae95f69694c7480ade2066315ac53~mv2.jpeg",
    likeCount: 10,
  },
  {
    title: "Live Dairy Dialogue!",
    desc: "We believe that if issues are discussed in a group then they create an impact. Thus, we often conduct group discussions with dairy farmers to understand their challenges at the farm.",
    src: "https://static.wixstatic.com/media/c6a68f_2862e8652a244d93b7f743612cb11865~mv2.jpeg/v1/fit/w_895,h_254,q_90/c6a68f_2862e8652a244d93b7f743612cb11865~mv2.jpeg",
    likeCount: 20,
  },
  {
    title: "Farmer Meet with Team Nitara.",
    desc: "This is a glimpse from our field visit in Kodinar, Gujarat where dairy farmers assembled for a farmer meet organized by our field team to discuss challenges related to cattle breeding.",
    src: "https://static.wixstatic.com/media/c6a68f_c2ae3858a8134157aef1ae1d4be225f7~mv2.jpeg/v1/fit/w_895,h_254,q_90/c6a68f_c2ae3858a8134157aef1ae1d4be225f7~mv2.jpeg",
    likeCount: 30,
  },
  {
    title: "Let's talk facts!",
    desc: "When it comes to Nutrition for Cattle we believe in talking in numbers because priority is Cattle's Health.",
    src: "https://static.wixstatic.com/media/c6a68f_3f8b017d985741c59232d88a65d60028~mv2.jpeg/v1/fit/w_895,h_254,q_90/c6a68f_3f8b017d985741c59232d88a65d60028~mv2.jpeg",
    likeCount: 40,
  },
  {
    title: "Localized Farm Meetings!",
    desc: "With our active work at the ground level we also make sure that we gel up with the lifestyle of dairy farmers. No matter its language, food, culture we happily become a part of it.",
    src: "https://static.wixstatic.com/media/c6a68f_dde8a43ddd354a6f87e83fd2f932e9c1~mv2.jpeg/v1/fit/w_895,h_254,q_90/c6a68f_dde8a43ddd354a6f87e83fd2f932e9c1~mv2.jpeg",
    likeCount: 50,
  },
  {
    title: "Dr Carolin Schumacher",
    desc: "The CEO of Galvmed, Dr. Carolin Schumacher at Nitara's Head office in Mumbai",
    src: "https://static.wixstatic.com/media/c6a68f_d46ff9e24074443b8fa970ada8c29741~mv2.png/v1/fit/w_895,h_254,q_90/c6a68f_d46ff9e24074443b8fa970ada8c29741~mv2.png",
    likeCount: 60,
  },
  {
    title: "Dairy Talkies",
    desc: "This is from one of our Dairy Farm visits in interior villages of Gujarat. We often visit dairy farms to interact with dairy farmers, and try to understand their difficulties and help them with a solution.",
    src: "https://static.wixstatic.com/media/c6a68f_a7fae95f69694c7480ade2066315ac53~mv2.jpeg/v1/fit/w_895,h_302,q_90/c6a68f_a7fae95f69694c7480ade2066315ac53~mv2.jpeg",
    likeCount: 10,
  },
  {
    title: "Live Dairy Dialogue!",
    desc: "We believe that if issues are discussed in a group then they create an impact. Thus, we often conduct group discussions with dairy farmers to understand their challenges at the farm.",
    src: "https://static.wixstatic.com/media/c6a68f_2862e8652a244d93b7f743612cb11865~mv2.jpeg/v1/fit/w_895,h_254,q_90/c6a68f_2862e8652a244d93b7f743612cb11865~mv2.jpeg",
    likeCount: 20,
  },
  {
    title: "Farmer Meet with Team Nitara.",
    desc: "This is a glimpse from our field visit in Kodinar, Gujarat where dairy farmers assembled for a farmer meet organized by our field team to discuss challenges related to cattle breeding.",
    src: "https://static.wixstatic.com/media/c6a68f_c2ae3858a8134157aef1ae1d4be225f7~mv2.jpeg/v1/fit/w_895,h_254,q_90/c6a68f_c2ae3858a8134157aef1ae1d4be225f7~mv2.jpeg",
    likeCount: 30,
  },
  {
    title: "Let's talk facts!",
    desc: "When it comes to Nutrition for Cattle we believe in talking in numbers because priority is Cattle's Health.",
    src: "https://static.wixstatic.com/media/c6a68f_3f8b017d985741c59232d88a65d60028~mv2.jpeg/v1/fit/w_895,h_254,q_90/c6a68f_3f8b017d985741c59232d88a65d60028~mv2.jpeg",
    likeCount: 40,
  },
  {
    title: "Localized Farm Meetings!",
    desc: "With our active work at the ground level we also make sure that we gel up with the lifestyle of dairy farmers. No matter its language, food, culture we happily become a part of it.",
    src: "https://static.wixstatic.com/media/c6a68f_dde8a43ddd354a6f87e83fd2f932e9c1~mv2.jpeg/v1/fit/w_895,h_254,q_90/c6a68f_dde8a43ddd354a6f87e83fd2f932e9c1~mv2.jpeg",
    likeCount: 50,
  },
  {
    title: "Dr Carolin Schumacher",
    desc: "The CEO of Galvmed, Dr. Carolin Schumacher at Nitara's Head office in Mumbai",
    src: "https://static.wixstatic.com/media/c6a68f_d46ff9e24074443b8fa970ada8c29741~mv2.png/v1/fit/w_895,h_254,q_90/c6a68f_d46ff9e24074443b8fa970ada8c29741~mv2.png",
    likeCount: 60,
  },
];

const Gallery = () => {
  const [isImgPreview, setIsImagePreview] = useState(false);
  let a = -1;
  return (
    <Container className="mt-16">
      <SectionHeading heading="GALLERY" />
      <div className="mt-4 p-10 pl-16 pr-16">
        <table className="flex justify-center">
          <tbody>
            {Array(Math.ceil(galArr.length / 3))
              .fill()
              .map((z, i) => i)
              .map((x, mainIndex) => {
                return (
                  <tr key={`gal-item-${mainIndex}`}>
                    {(mainIndex % 2 === 0 ? [1, 2, 3] : [1, 2]).map(
                      (item, index) => {
                        a++;
                        const obj = galArr[a];
                        return obj ? (
                          <Fragment key={`gal-item-${index}`}>
                            <GalleryContent
                              setIsImagePreview={setIsImagePreview}
                              title={obj.title}
                              desc={obj.desc}
                              src={obj.src}
                              likeCount={obj.likeCount}
                              index={index + mainIndex}
                              isAllowRowSpan={mainIndex % 2 === 0}
                            />
                          </Fragment>
                        ) : (
                          <></>
                        );
                      }
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {isImgPreview && (
        <GalleryPreview
          isOpen={isImgPreview}
          images={galArr}
          handleClose={() => setIsImagePreview(false)}
        />
      )}
    </Container>
  );
};

export default Gallery;
