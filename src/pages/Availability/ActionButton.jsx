import { AiOutlineCopy, AiOutlinePlus } from "react-icons/ai";
const ActionButton = ({ day, handlePlus }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md flex gap-5">
      <div className="flex gap-5">
        <button>
          <AiOutlinePlus onClick={handlePlus} />
        </button>
        <button>
          <AiOutlineCopy />
        </button>
        <button></button>
      </div>
    </div>
  );
};

export default ActionButton