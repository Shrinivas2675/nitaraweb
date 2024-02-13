import { Fragment } from "react";
import SectionHeading from "../SectionHeading";
import AboutUsContent from "./AboutUsContent";

const aboutUsArr = [
  {
    title: "Our Story",
    desc: `With our years of research on the Dairy Ecosystem, we realized that dairy farmers face endless difficulties in ensuring a healthy cattle lifecycle, which is directly proportional to the milk yield at their farm and thus the revenue they make from it. Under the umbrella of our parent company Gormalone which actively works for making Agri-life better, we carved out this initiative. We came up with a team of the best technology and dairy enthusiasts to solve several critical issues faced by the dairy farmers.`,
    src: "https://static.wixstatic.com/media/c6a68f_fc44069527c048019b3a902fedd84512~mv2.png/v1/fill/w_246,h_245,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3_edited.png",
    alt: "3_edited",
  },
  {
    title: "OUR VISION",
    desc: "Our Vision is to work closely at the grass-root level of rural dairy farming in India. With our work, we aim to bring revolution in the lives of dairy farmers across India. We are an amalgamation of technology, data, and intense domain experience where we see the dairy farmers in India are profitable with intelligent dairy farm management.",
    src: "https://static.wixstatic.com/media/c6a68f_935b0fa3cd834268a257dba933d6eb3f~mv2.png/v1/fill/w_280,h_253,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Our%20Vision.png",
    alt: "20Vision",
  },
  {
    title: "TECHNOLOGY",
    desc: "At NITARA, our comprehensive technological solutions help dairy farmers leading small and dairy farms achieve greater success. Real-time notifications for optimal breeding, health, nutrition, genetics, and milking, our solutions deliver actionable insight for data-driven decisions to optimize productivity and management, offering benefits across all the pillars of dairy. To empower our farmers and other stakeholders, NITARA continually builds upon its state-of-the-art mechanization tools, Artificial Intelligence-based technology, Machine learning Models, Big Data for Analytics, and more.",
    src: "https://static.wixstatic.com/media/c6a68f_220c8aa7119e4612bf5230a53ea23453~mv2.png/v1/fill/w_284,h_283,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Signage(4).png",
    alt: "Signage",
  },
];

const AboutUs = () => {
  return (
    <div id="home-about-us">
      <SectionHeading heading="About Us" />
      <div className="mt-4">
        {aboutUsArr.map((x, index) => (
          <Fragment key={x.title}>
            <AboutUsContent
              src={x.src}
              alt={x.alt}
              title={x.title}
              desc={x.desc}
              isEven={index % 2 === 0}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
