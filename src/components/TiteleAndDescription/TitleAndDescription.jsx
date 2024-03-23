const TitleAndDescription = ({ title,customStyle, description, lineBreak, lineBreakText, additionalText,type }) => {
    return (
      <div className={`mt-5 ${customStyle}`}>
        <h1 className={`text-black z-20 mb-1 md:mb-0 text-3xl md:text-xl
         ${type == "h1"?"lg:text-5xl mt-11 pb-4":"lg:text-4xl"} font-semibold md:leading-[45px] lg:leading-[50px]`}>
          {title}
          {lineBreak && <br className="hidden md:block" />}
          {lineBreakText && <span>{lineBreakText}</span>}
          {additionalText && <span className="">{additionalText}</span>}
        </h1>
        <p className="text-gray-600 z-20 lg:text-lg leading-7 mt-1  mb-7 pb-2">
          {description}
        </p>
      </div>
    );
  };
  
  export default TitleAndDescription;