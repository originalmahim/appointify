import { useContext } from "react";
import { AvailabilityContext } from "../Context/AvailabilityProvider";


export const useAvailabilityContext = () => {
      return  useContext(AvailabilityContext)
};