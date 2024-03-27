import appointifyHeroPlaceholder from "../../../assets/images/waveBg.MP4";

export const BgVideo = () => {
  return (
    <>
      <div className="w-full overflow-hidden h-full absolute top-0 left-0 z-10 lg:block rounded-lg">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source type="video/mp4" src={appointifyHeroPlaceholder}></source>
      </video>

        <div className="absolute top-0 left-0 h-full w-full z-20 bg-gradient-to-bl  from-[#ffffffc0] to-[#ffffff] animate-pulse"></div>
        <div className="absolute top-0 left-0 h-full w-full z-10 bg-gradient-to-r  from-[#ffffff] to-[#ffffff00] "></div>
      </div>
    </>
  );
};
