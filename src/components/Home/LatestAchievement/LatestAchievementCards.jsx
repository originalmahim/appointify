import Container from "../../Container/Container";

const achievementsData = [
  {
    title: "Record-breaking Profits",
    imageUrl: "https://i.ibb.co/hCftRkg/profit.jpg",
    description:
      "We are proud to announce that our platform has achieved record-breaking profits this year. Thanks to our dedicated team and loyal users, we have surpassed all expectations and set new industry standards. Read more to learn about our success story.",
  },
  {
    title: "Expansion into New Markets",
    imageUrl: "https://i.ibb.co/hfNXwhH/expansion.jpg",
    description:
      "We are excited to share that our platform has successfully expanded into new markets. With strategic partnerships and innovative solutions, we have established a strong presence in international markets. Learn more about our expansion journey and the opportunities it brings.",
  },
  {
    title: "Digital Transformation Success",
    imageUrl: "https://i.ibb.co/hCftRkg/profit.jpg",
    description:
      "Our platform has undergone a successful digital transformation, revolutionizing the way we serve our users. From seamless online experiences to advanced security measures, we have embraced technology to enhance user satisfaction. Discover the key milestones of our digital transformation journey.",
  },
];

const LatestAchievements = () => {
  return (
    <Container>
      <section className="container mx-auto px-8 pt-14 md:pt-28">
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
              className="relative overflow-hidden rounded-lg shadow hover:bg-special hover:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                alt=""
                src={achievement.imageUrl}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <h3 className="mt-0.5 text-xl text-white">
                    {achievement.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default LatestAchievements;
