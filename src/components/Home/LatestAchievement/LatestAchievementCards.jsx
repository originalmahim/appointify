import Container from "../../Container/Container";
import api from "../../../assets/images/api.png";
import recordScheduling from "../../../assets/images/recordScheduling.png";
import location from "../../../assets/images/location.png";
import TitleAndDescription from "../../TiteleAndDescription/TitleAndDescription";

const achievementsData = [
  {
    title: "Improved Event API",
    description:
      "Successfully enhanced and updated our event API, resulting in improved functionality and user experience. The update includes a buffer time of 10 minutes, making virtual events smoother.",
  },
  {
    title: "Record-breaking Event Scheduling",
    description:
      "Achieved a record-breaking event scheduling success with a duration of 60 minutes. The virtual event held on 2024-03-01 was a tremendous success, surpassing all expectations.",
  },
  {
    title: "Virtual Location Excellence",
    description:
      "Demonstrated excellence in virtual event locations. Our platform seamlessly handled a scheduled virtual event at 2024-03-01, providing users with a top-notch experience.",
  },
];

// Define achievement images with icon and background color
const achievementImages = [
  { icon: api, bg: "[#fff4cf]" },
  { icon: recordScheduling, bg: "[#cefaff]" },
  { icon: location, bg: "[#cbe7ff]" },
];

const LatestAchievements = () => {
  return (
    <section className="bg-[#fff4ef] py-11">
      <Container>
        <section className="">
          {/* Title and description section */}
          <div className="text-center">
            <TitleAndDescription
              title={"Latest Achievements"}
              description={"Read about our latest achievements and milestones."}
            />
          </div>

          {/* Achievements grid section */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {achievementsData.map((achievement, index) => (
              <article
                key={index}
                className="bg-white relative z-10 text-center md:text-left rounded-lg p-4 sm:p-6"
              >
                {/* Achievement icon section */}
                <div
                  className={`text-center bg-${achievementImages[index].bg}  p-1 mb-7 md:mb-5  mx-auto md:mx-0 h-16 w-16 lg:h-20 lg:w-20 rounded-full flex justify-center items-center`}
                >
                  <img
                    className="mx-auto my-3 mt-5"
                    src={achievementImages[index].icon}
                    alt=""
                  />
                </div>

                {/* Achievement details section */}
                <div className="">
                  <div className="">
                    <h3 className="mt-0.5 text-[16px] sm:text-[19px] md:text-xl">{achievement.title}</h3>
                    <p className="mt-2 line-clamp-3 text-[14px] md:text-sm/relaxed text-light-gray">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
};

export default LatestAchievements;