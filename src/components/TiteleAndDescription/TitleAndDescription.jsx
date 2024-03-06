const TitleAndDescription = ({ title, description, lineBreak, lineBreakText, additionalText,type }) => {
    return (
      <>
        <h1 className={`text-black mb-1 md:mb-0 text-3xl md:text-4xl ${type == "h1"?"lg:text-4xl":"lg:text-3xl"} font-semibold md:leading-[45px] lg:leading-[53px]`}>
          {title}
          {lineBreak && <br className="hidden md:block" />}
          {lineBreakText && <span>{lineBreakText}</span>}
          {additionalText && <span className="">{additionalText}</span>}
        </h1>
        <p className="text-gray-600 lg:text-lg leading-7 md:mt-6 lg:mt-4 mb-7">
          {description}
        </p>
      </>
    );
  };
  
  export default TitleAndDescription;