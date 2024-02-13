import { Container } from "@mui/material";
import { Fragment } from "react";
import BlogDetail from "../components/Bolg/BlogDetail";
import BlogTopSection from "../components/Bolg/BlogTopSection";

const blgArr = [
  {
    src: "https://static.wixstatic.com/media/c6a68f_b8a23b93cfec45e8adcf1daa12984baf~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_b8a23b93cfec45e8adcf1daa12984baf~mv2.png",
    title:
      "7 things you should know about Calf Nutrition before starting a dairy farm",
    desc: `Calf rearing is one of the most crucial aspects of dairy farming. Timely rearing of healthy calf results in a healthy Heifer, which can...`,
    views: 65,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_81bc1a6aeec64e4985d20a39b97422b6~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_81bc1a6aeec64e4985d20a39b97422b6~mv2.png",
    title: "5 Reasons Why Deworming is important for your cattle",
    desc: "Livestock sector plays an important role in the national economy and socio-economic development of the country. It is emerging as an...",
    views: 119,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_dc344c8042b043759598f581b2ce9554~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_dc344c8042b043759598f581b2ce9554~mv2.png",
    title: "What all are the essential vaccinations required for my cattle?",
    desc: "There are many cattle diseases in our country that cause severe economic losses due to drastic reduction in the production capacity. Some...",
    views: 59,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_db70f86357f74d24b924cbf8db2cd1ea~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,lg_1,q_90,enc_auto/c6a68f_db70f86357f74d24b924cbf8db2cd1ea~mv2.jpg",
    title:
      "No information on where to collect data online? - Diwakar Singh(Dairy Farmer), Bihar",
    desc: "The dairy sector in India is growing very fast and has immense potential. Be it the central government or the state government, all the...",
    views: 27,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_9cf79fa4d54f46228e65726440fb0a4d~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_9cf79fa4d54f46228e65726440fb0a4d~mv2.png",
    title:
      "Insurance companies do not give the full amount for insured animal-Ashwin (Dairy Farmer),...",
    desc: "A cow or buffalo of the best breed is very necessary for commercial dairy farming. Obviously, good-breed cattle are very expensive, so...",
    views: 18,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_8e8bebc0455b460ab1a94a9dc2825f10~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_8e8bebc0455b460ab1a94a9dc2825f10~mv2.png",
    title:
      "Deworming has no effect, the medicine is wasted - Devendra Chaudhary (Dairy Farmer) U.P.",
    desc: "In the business of dairy farming, it is not enough to just keep good breed cattle, but they also need proper care. Periodically, the..",
    views: 13,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_5905e013e0854f27ae9ed77859722292~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,lg_1,q_90,enc_auto/c6a68f_5905e013e0854f27ae9ed77859722292~mv2.jpg",
    title:
      "Dairy farming doesn't earn much profit, what to do? - Sanjay Tripathi (Dairy Farmer), U.P.",
    desc: "Most people who do the work of dairy farming have the problem that they do not earn much. They are busy in daily work day and night,...",
    views: 14,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_7ad1911c374648d089b59e679f71940c~mv2.jpeg/v1/fill/w_568,h_426,fp_0.50_0.50,q_90,enc_auto/c6a68f_7ad1911c374648d089b59e679f71940c~mv2.jpeg",
    title:
      "Buffalo dairy farm closed due to labor trouble - Balinder Dhull (Dairy Farmer), Haryana",
    desc: "Just like farming, there is a lot of hard work in the work of dairy farming, so this work is not everyone's bus. In this profession, the...",
    views: 12,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_f0f27c86061a4fb9b225c9feb11f273f~mv2.jpeg/v1/fill/w_568,h_426,fp_0.50_0.50,q_90,enc_auto/c6a68f_f0f27c86061a4fb9b225c9feb11f273f~mv2.jpeg",
    title:
      "Can a good breed of cow be prepared on your dairy farm as well? -Jignesh Bhai (Dairy...",
    desc: "In commercial dairy farming, if there is one of the most important, it is cow breed. The more advanced breed of cows are used in dairy...",
    views: 17,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_1310e30c92c54296854bdc0af3f017a7~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,lg_1,q_90,enc_auto/c6a68f_1310e30c92c54296854bdc0af3f017a7~mv2.jpg",
    title:
      "Where to get expert labor for dairy farming? asked Dairy farmer Rajiv Singh, UP",
    desc: "Commercial dairy farming means rearing cattle on a large scale and making profits by producing milk from them. Obviously, good and...",
    views: 14,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_4c7a16bce2c44fcc83b7d4260e46f0db~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,lg_1,q_90,enc_auto/c6a68f_4c7a16bce2c44fcc83b7d4260e46f0db~mv2.jpg",
    title:
      "Milking machine is not useful in extracting buffalo milk- Malkit Singh(Dairy Farmer)- Sirsa,...",
    desc: "In order to achieve success and profit in commercial dairy farming, it is necessary to use more and more technology. This, on the one...",
    views: 11,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_b1258286410f4366a6268bf57f2871fd~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,q_90,enc_auto/c6a68f_b1258286410f4366a6268bf57f2871fd~mv2.jpg",
    title:
      "Nothing happens by deworming, it’s a waste of money! - Manjeet Kumar (dairy farmer), Uttar...",
    desc: "The only mantra for success in the development of dairy farming is a good breed of cattle and their better health. But it is often seen...",
    views: 9,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_d0e34273920849d194b6a75f1aa9f6c9~mv2.jpg/v1/fill/w_568,h_426,fp_0.50_0.50,q_90,enc_auto/c6a68f_d0e34273920849d194b6a75f1aa9f6c9~mv2.jpg",
    title:
      "How to get artificial insemination? No expert AI technician – Prempal Sengar (Dairy farmer), M.P.",
    desc: "In commercial dairy farming, as much attention must be paid to increasing milk production, the same focus is on breed improvement and...",
    views: 5,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_a0ddfd9eeac248b0a29405a9f04bec4d~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_a0ddfd9eeac248b0a29405a9f04bec4d~mv2.png",
    title: "6 Mistakes farmers make while starting a dairy farm",
    desc: "There are many challenges in professional dairy farming, but it is only through resolutely tackling them that success is achieved. The...",
    views: 29,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_547a2709833d4630bd4e2ad0a6959dd3~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_547a2709833d4630bd4e2ad0a6959dd3~mv2.png",
    title: "Dairy Sector in India: Opportunity for Entrepreneurs",
    desc: "Producing milk has been part of farming for a long time. In the last century, farms have become more specialized. In the 20th century,...",
    views: 772,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_560d019c7f5d4a779697a969fa9fbd43~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_560d019c7f5d4a779697a969fa9fbd43~mv2.png",
    title: "6 factors impacting Rural Dairy Farming in India",
    desc: "Most people who do dairy farming have the problem that they do not earn much. They are busy with daily work day and night, take care of...",
    views: 27,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_203fb123366d450aa9a55ba99806a7fd~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_203fb123366d450aa9a55ba99806a7fd~mv2.png",
    title: "6 Factors Impacting Commercial Dairy Farming",
    desc: "In the business of professional dairy farming, the importance of a good breed of animals is as important as the insurance of those...",
    views: 15,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_770fec21da2249fd9de155a1500ad8f0~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_770fec21da2249fd9de155a1500ad8f0~mv2.png",
    title: "How to start a profitable Dairy farm?",
    desc: "Animal husbandry is a tradition in the rural areas of the country and farmers (Farmer) have always reared milch animals with farming....",
    views: 22,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_cb79629677de48c0929c959806c460e5~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_cb79629677de48c0929c959806c460e5~mv2.png",
    title: "5 Components of Dairy Farming",
    desc: "Dairy farming in a country like India depends on various factors. The entire setup of the dairy farm and the practices followed are...",
    views: 89,
    comments: 1,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_43d4f746ca714982a21b61ef53ca5e3d~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_43d4f746ca714982a21b61ef53ca5e3d~mv2.png",
    title: "Technology in Dairy : Future of Dairy Farming",
    desc: "Business success has the same funda earning more than less time and less effort. This can only happen using technology. This is entirely...",
    views: 22,
    comments: 0,
  },

  {
    src: "https://static.wixstatic.com/media/c6a68f_8cd4a8aa84674a53ac9a9ace00955e89~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_8cd4a8aa84674a53ac9a9ace00955e89~mv2.png",
    title: "Milk Co-operatives : Backbone of a Dairy Farmer",
    desc: "Milk Co-operatives facilitate the Ease of Doing Business in the dairy domain. Their work has made the sector organized in major parts of...",
    views: 8,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_1cbc92c9b2124797b5f56905f11adf39~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_1cbc92c9b2124797b5f56905f11adf39~mv2.png",
    title: "Buying Cattle Online : Genuine or Fraud?",
    desc: "Nowadays, everything is available online, and many websites sell animals online. If you have a smartphone, an Internet connection, you...",
    views: 21,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_a1725eaa40e340c88f37d57a70b8f828~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_a1725eaa40e340c88f37d57a70b8f828~mv2.png",
    title: "6 challenges faced by Dairy Farmers in India",
    desc: "A huge amount of money has to be invested in the dairy farming business not everyone can put lakhs of rupees out of their pockets. In...",
    views: 87,
    comments: 0,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_2d4092768c614d59b3d513ff9b988445~mv2.png/v1/fill/w_568,h_426,fp_0.50_0.50,q_95,enc_auto/c6a68f_2d4092768c614d59b3d513ff9b988445~mv2.png",
    title: "Healthy Cattle : Key to success in dairy farming",
    desc: "Those who are working in the field of professional dairy farming work hard day and night. Nevertheless, it is often heard that dairy...",
    views: 14,
    comments: 0,
  },
];
const Blog = () => {
  return (
    <div className="blog-section">
      <Container className="container">
        <br />
        <BlogTopSection />
        {blgArr.map((item, index) => (
          <Fragment key={`blg-detail-${index}`}>
            <BlogDetail
              title={item.title}
              desc={item.desc}
              views={item.views}
              comments={item.comments}
              src={item.src}
            />
          </Fragment>
        ))}
      </Container>
    </div>
  );
};

export default Blog;
