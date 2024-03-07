const GradientShed = ({position}) => {
    return (

        <div
          className={`absolute -z-10 rotate-45 
          ${position} hidden md:block rounded-[50px] bg-gradient-to-r from-[#fff9fe]
           to-[#ffffff] `}
        ></div>

    )
}


export default GradientShed