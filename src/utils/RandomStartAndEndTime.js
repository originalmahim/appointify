import { generateTimeSlots } from "./GenerateTimeSlot";


const RandomStartAndEndTime = () => {
  const slots = generateTimeSlots(30);

// Generate a random number for startTime
const forwardRandomNumber = Math.floor(Math.random() * slots.length);

// Generate a different random number for endTime
let backwardRandomNumber;
do {
  backwardRandomNumber = Math.floor(Math.random() * slots.length);
} while (backwardRandomNumber === forwardRandomNumber);

const startTime = slots[forwardRandomNumber]
const endTime = slots[backwardRandomNumber]

return {startTime,endTime}

};

export default RandomStartAndEndTime;