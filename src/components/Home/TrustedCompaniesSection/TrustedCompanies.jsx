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
import TitleAndDescription from "../../TiteleAndDescription/TitleAndDescription";

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
    <section className="relative p-3">
      <img
        className="w-full absolute opacity-15 -z-10 left-0 h-full"
        src="https://img.freepik.com/free-vector/gradient-spheres-background_52683-76367.jpg"
        alt=""
      />
      <Container>
        <section className="mt-28">
          <div className="text-center">
            <TitleAndDescription
              title={"Our Partners"}
              description={"Meet our partners and top contributors worldwide."}
            />
          </div>
          {/* logos  */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:p-5">
            {companyLogos.map((item, index) => (
              <div
                key={index}
                className="group p-4 bg-white transition-all shadow-sm 
                duration-300 ease-in-out transform md:hover:-translate-y-3 hover:shadow-xl md:hover:text-white hover:shadow-[#fff2ed] rounded-lg text-center"
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
    </section>
  );
};

export default TrustedCompanies;