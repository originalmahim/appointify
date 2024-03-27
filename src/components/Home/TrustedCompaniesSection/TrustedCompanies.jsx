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
import { X } from "../../Demo/X";

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
      <Container>
        <TitleAndDescription
          title={"Our Partners"}
          description={
            "Trusted by the best teams in the world. We help teams of all sizes."
          }
          customStyle={"text-center"}
        />

        <div className=" grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
          <div className="divide-y rounded-lg ">
            <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3 gap-3">
              {companyLogos?.map((company,index) => (
                <div 
                className={`mx-auto animate-${index % 8 === 0 ? 'left' : index % 8 === 1 ? 'right' : index % 8 === 2 ? 'up' : index % 8 === 3 ? 'down' : index % 8 === 4 ? 'left-up' : index % 8 === 5 ? 'right-up' : index % 8 === 6 ? 'left-down' : 'right-down'} flex w-full items-center justify-center p-8 shadow-lg shadow-[#eeeeee]`}
                >
                  <img
                    src={company.logo}
                    width={240}
                    height={90}
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-[700px] grid gap-4 md:gap-8 lg:gap-12">
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Company A</h3>
              <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                "Working with this company has been an absolute pleasure. They
                are dedicated to providing top-notch service and have been a
                valuable partner in helping us achieve our goals."
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Company B</h3>
              <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                "Our partnership with this company has exceeded our
                expectations. They are innovative, responsive, and truly
                understand our needs. We look forward to continuing our
                collaboration and achieving great things together."
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Company C</h3>
              <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                "The team at this company is exceptional. Their expertise and
                professionalism have added tremendous value to our projects. We
                highly recommend them to anyone looking for outstanding service
                and results."
              </p>
            </div>
          </div>
        </div>



        <X/>
      </Container>
      <>
        <section className="w-full py-12 md:py-24 lg:py-32"></section>
      </>


      
      
    </section>
  );
};

export default TrustedCompanies;
