import { SiGooglemeet } from "react-icons/si";
import { TbBrandZoom } from "react-icons/tb";

import Container from "../Container/Container";
import TitleAndDescription from "../TiteleAndDescription/TitleAndDescription";
import { EventCallCarrd } from "./EventCallCarrd";
import Tabs from "./Tabs";

export const OurFeatures = () => {
  return (
    <div className="bg-[#f4f4f421]">
    <Container>
      <section className="relative w-full py-12 ">
        <div className="  pointer-events-none rounded-3xl dark:bg-gray-800" />
        <div className="flex flex-col items-center justify-center  px-4 md:px-6 space-y-4 ">
          <div className="space-y-2 text-center">
            <h3 className="inline-block text-primary  rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Key Features
            </h3>
            <div className="flex flex-col items-center justify-center overflow-hidden">
              <TitleAndDescription
              customStyle={'text-center'}
                title={"Our Features"}
                description={
                  "  Let your users effortlessly manage their time with integrated scheduling"
                }
              />
            </div>
          </div>
          <Tabs/>
          
        </div>



      </section>

      
    </Container>

    </div>
  );
};
