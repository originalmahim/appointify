const TitleAndDescription = ({ title, description, lineBreak, lineBreakText, additionalText,type }) => {
    return (
      <div>
        <h1 className={`text-black z-20 mb-1 md:mb-0 text-3xl md:text-4xl ${type == "h1"?"lg:text-4xl":"lg:text-3xl"} font-semibold md:leading-[45px] lg:leading-[50px]`}>
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