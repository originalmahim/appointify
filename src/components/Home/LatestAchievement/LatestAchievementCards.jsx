import Container from "../../Container/Container";


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

const LatestAchievements = () => {
  return (
    <section className="bg-[#FFE4ED]">
      <Container>
        <section className="">
          <h1 className="text-center text-special text-3xl md:text-4xl xl:text-5xl font-play font-bold mb-4 md:mb-6 lg:mb-8 dark:text-slate-300">
            Latest Achievements
          </h1>
          <p className="text-center antialiased text-xl leading-relaxed text-inherit mt-2">
            Read about our latest achievements and milestones.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {achievementsData.map((achievement, index) => (
              <article
                key={index}
                className="bg-white"
              >
                <div className="">
                  <div className="p-4 sm:p-6">
                    <h3 className="mt-0.5 text-xl">
                      {achievement.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-light-gray">
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