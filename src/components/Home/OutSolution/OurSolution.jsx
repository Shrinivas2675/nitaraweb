import { Fragment } from "react";
import SectionHeading from "../SectionHeading";
import OurSolutionContent from "./OurSolutionContent";

const solArr = [
  {
    src: "https://static.wixstatic.com/media/c6a68f_b5bbaf4f74314d19808f9ceb1fd0db08~mv2.png/v1/crop/x_0,y_2,w_307,h_303/fill/w_188,h_185,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Dairy-Cooperative_edited_edited.png",
    alt: "Dairy-Cooperative_edited_edited.png",
    title: "NITARA FOR MILK PROCUREMENT",
    desc: `Milk procurement companies can boost profitability by optimizing
  procurement operations and enhancing technology-led farmer
  relationships. Route optimization, Milk yield prediction of
  villages, and deep intelligence on farmer & cattle profiles are key
  value propositions of the Nitara platform leading to significant
  cost optimization.`,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_2cf5ac5f2ec84b5ca9202f327ce2be9a~mv2.png/v1/fill/w_188,h_185,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Generic-Companies_edited_edited.png",
    alt: "Companies_edited_edited",
    title: "NITARA FOR GENETICS",
    desc: `For Genetics Companies, Nitara offers an efficient solution to increase the effectiveness of breeding services and semen supply. Our patented technology, Semen Scan, allows insemination technicians to capture hassle-free data by taking a picture of the semen straw. With Nitara, service providers and farmers can track cattle breeding activity through WhatsApp notifications. Our deep intelligence tools also allow for the monitoring of breed improvement in any cluster.
    `,
  },
  {
    src: "https://static.wixstatic.com/media/c6a68f_104d13e479a34a25a619777f92946644~mv2.jpg/v1/crop/x_552,y_0,w_817,h_1080/fill/w_371,h_491,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3_edited_edited.jpg",
    alt: "3_edited_edited",
    title: "NITARA FOR NUTRITION",
    desc: `Nitara helps manage feed businesses efficiently by leveraging agro-climatic conditions and cattle farmer profiles to design and produce the required products to fulfill nutritional requirements. This also helps farmers optimize their procurement costs.`,
  },
  {
    title: "NITARA FOR HEALTHCARE",
    desc: `For Healthcare Distributors, Nitara helps medicine companies understand the disease impact in a region and provide the needed medicines, thereby creating farm traction for farm care products. Our platform offers valuable insights into market demand, helping healthcare distributors streamline their operations for maximum efficiency.`,
    src: "https://static.wixstatic.com/media/c6a68f_1c6431a6054145009fa8f67c990fbe00~mv2.jpg/v1/crop/x_611,y_191,w_709,h_704/fill/w_313,h_311,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/video%20icons%20(1)_edited.jpg",
    alt: "_edited",
  },
  {
    title: "NITARA FOR DISTRIBUTION",
    desc: `For Healthcare Distributors, Nitara helps medicine companies understand the disease impact in a region and provide the needed medicines, thereby creating farm traction for farm care products. Our platform offers valuable insights into market demand, helping healthcare distributors streamline their operations for maximum efficiency.`,
    src: "https://static.wixstatic.com/media/c6a68f_ae5af871dc24452687298d378bc9ac1e~mv2.jpg/v1/crop/x_2,y_0,w_160,h_117/fill/w_223,h_164,al_c,lg_1,q_80,enc_auto/Distribution_edited_edited.jpg",
    alt: "Distribution_edited_edited",
  },
  {
    title: "NITARA FOR SOCIAL IMPACT",
    desc: `NITARA provides tailored solutions for social impact organizations, empowering farmers and transforming communities. Our platform enables digital communication between farmers, service providers, and stakeholders, promoting rural entrepreneurship and sustainable dairy business practices. NITARA helps to improve cattle welfare, and educate farmers on required dairy practices. Our goal is to create a sustainable future for farming families and rural communities, one that is built on profitability, productivity, and shared success.`,
    src: "https://static.wixstatic.com/media/c6a68f_8395bd4d82ac43d3a5bbc95e96824779~mv2.jpg/v1/crop/x_0,y_0,w_143,h_141/fill/w_200,h_197,al_c,lg_1,q_80,enc_auto/Social%20Impact_edited.jpg",
    alt: "20Impact_edited",
  },
  {
    title: "NITARA FOR POLICYMAKERS",
    desc: `Nitara has the capability to digitize the entire dairying ecosystem. During the process, the platform generates a lot of valuable development insights on genetics, health, nutrition, and ground operations. Policymakers can revolutionize by identifying required regulations for the dairying industry and nation-building.`,
    src: "https://static.wixstatic.com/media/c6a68f_45f013699bbb41cc8444a3a1ecd7052d~mv2.png/v1/crop/x_0,y_0,w_485,h_228/fill/w_253,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Government_edited.png",
    alt: "Government_edited",
  },
  {
    title: "NITARA FOR FPOS",
    desc: `FPOS can also use the Nitara platform to boost profitability by developing parallel dairying operations. Strengthen management, governance, and capital structure. Access better markets, finances, and infrastructure. Mobilize farmers and address financing problems. Uplift lives, and strengthen the Dairy Industry, and the community as a whole.`,
    src: "https://static.wixstatic.com/media/c6a68f_e159a025f4d044ceacbc94c0437ba6cc~mv2.jpg/v1/crop/x_6,y_0,w_165,h_163/fill/w_226,h_224,al_c,lg_1,q_80,enc_auto/FPO_edited.jpg",
    alt: "FPO_edited",
  },
  {
    title: "NITARA FOR AGRI-UNIVERSITIES",
    desc: `NITARA's platform provides tools for agri-universities to manage research, education, and extension activities. With predictive analytics, universities can gain insights into animals, fodder, feed, soil etc. NITARA offers a digital platform for universities to improve education and outreach programs on dairying.`,
    src: "https://static.wixstatic.com/media/c6a68f_13d8283566bb494a8e9462c83901e263~mv2.jpg/v1/crop/x_0,y_27,w_243,h_188/fill/w_220,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Agri%20Uni_edited.jpg",
    alt: "20Uni_edited",
  },
  {
    title: "NITARA FOR FINANCE INSTITUTIONS",
    desc: `Predictions and information available on Nitara can support financial institutions in building data-led financing and insurance models for the dairy ecosystem.`,
    src: "https://static.wixstatic.com/media/c6a68f_34556974a192402ea5af27af8ad7e702~mv2.png/v1/crop/x_0,y_2,w_306,h_302/fill/w_173,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NITARA_Dairy%20Financing_edited.png",
    alt: "20Financing_edited",
  },
];

const OurSolution = () => {
  return (
    <div>
      <SectionHeading heading="OUR SOLUTIONS" />
      <div className="mt-4">
        {solArr.map((x, index) => (
          <Fragment key={x.title}>
            <OurSolutionContent
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

export default OurSolution;
