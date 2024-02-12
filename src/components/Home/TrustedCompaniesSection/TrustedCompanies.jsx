import Container from "../../Container/Container";
import google from "../../../assets/logos/google.svg";
import youtube from "../../../assets/logos/youtube.svg";
import facebook from "../../../assets/logos/facebook-color.svg";
import amazon from "../../../assets/logos/amazon.svg";
import netflix from "../../../assets/logos/netflix.svg";
import airbnb from "../../../assets/logos/airbnb.svg";
import tesla from "../../../assets/logos/tesla.svg";
import apple from "../../../assets/logos/apple.svg";
import uber from "../../../assets/logos/uber.svg";
import microsoft from "../../../assets/logos/microsoft.svg";

const companyLogos = [
  { name: "Google", logo: google },
  { name: "YouTube", logo: youtube },
  { name: "Facebook", logo: facebook },
  { name: "Amazon", logo: amazon },
  { name: "Netflix", logo: netflix },
  { name: "Airbnb", logo: airbnb },
  { name: "Tesla", logo: tesla },
  { name: "Apple", logo: apple },
  { name: "Uber", logo: uber },
  { name: "Microsoft", logo: microsoft },
];
const TrustedCompanies = () => {
  return (
    <Container>
      <section className="mt-28">
        <div>
          <h1 className="text-center text-special text-3xl md:text-4xl xl:text-5xl font-play font-bold mb-4 md:mb-6 lg:mb-8 dark:text-slate-300">
            Our Partners
          </h1>
          <p className="text-center antialiased text-xl leading-relaxed text-inherit mt-2 mb-10 md:mb-16">
            Meet our partners and top contributors worldwide.
          </p>
        </div>
        {/* logos  */}
        <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-6 p-5">
          {companyLogos.map((item, index) => (
            <div
              key={index}
              className="group p-4 bg-white hover:bg-gradient-blue hover:!text-white shadow-lg rounded-lg text-center 
              transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-16 h-16 mx-auto mb-2"
              />
              <div className="text-lg">{item.name}</div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default TrustedCompanies;
