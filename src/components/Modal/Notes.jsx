import React, { useEffect, useRef, useState } from "react";
import notesIcon from "../../assets/icons/notes.png";

const Notes = ({ onSave }) => {
  const [content, setContent] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const textareaRef = useRef(null);

  const toggleInput = () => {
    setIsInputVisible((prev) => !prev);
  };

  const handleSave = () => {
    onSave(content);
    toggleInput(); 
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (textareaRef.current && !textareaRef.current.contains(event.target)) {
        // Clicked outside the textarea, close the input area
        setIsInputVisible(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div
    ref={textareaRef}
    className="relative">
      <div className="flex items-center gap-2 text-[15px]" onClick={toggleInput}>
        <figure className="bg-[#e9f4ff] w-9 p-2 rounded-full">
          <img className="w-4 md:w-6" src={notesIcon} alt="" />
        </figure>
        <p className="text-light-gray text-[14px] md:text-[16px]">Add a note</p>
      </div>

      {isInputVisible && (
        <div className="absolute w-full min-w-[200px] top-11">

          <textarea
            className="h-full min-h-[100px] relative w-full placeholder:text-[white] text-white resize-none border-none rounded-[5px] bg-[#7EDA4A] shadow-lg z-50  overflow-auto px-3 py-2.5 font-sans text-sm font-normal focus-within:outline-none   "
            placeholder="point:1"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            
          ><span></span></textarea>
       
        
        </div>
      )}
    </div>
  );
};

export default Notes;