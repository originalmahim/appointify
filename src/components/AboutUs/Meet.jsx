const Meet = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Founder & CEO",
      image: "https://i.ibb.co/wgkFHtX/image-5-1.png",
    },
    {
      name: "Emma Smith",
      position: "Chief Operations Officer (COO)",
      image: "https://i.ibb.co/r2cPX2k/image-7-1.png",
    },
    {
      name: "Alex Turner",
      position: "Chief Technology Officer (CTO)",
      image: "https://i.ibb.co/r72x5wz/image-4-2.png",
    },
    {
      name: "Sophie Johnson",
      position: "Head of Marketing",
      image: "https://i.ibb.co/rm1K7jR/image-13-1.png",
    },
    {
      name: "Michael Clark",
      position: "Head of Sales",
      image: "https://i.ibb.co/G5TN8RB/image-23.png",
    },
    {
      name: "Olivia Bennett",
      position: "Customer Success Manager",
      image: "https://i.ibb.co/hL8jcQr/image-11-1.png",
    },
    {
      name: "Daniel Miller",
      position: "Lead Software Engineer",
      image: "https://i.ibb.co/0Ks6xgr/image-28.png",
    },
    {
      name: "Natalie White",
      position: "HR & Administration Specialist",
      image: "https://i.ibb.co/HrFSRbf/image-25.png",
    },
    {
      name: "Ryan Foster",
      position: "Project Manager",
      image: "https://i.ibb.co/LZ9yhFH/image-31.png",
    },
    {
      name: "Lisa Taylor",
      position: "Business Development Advisor",
      image: "https://i.ibb.co/rkJS4nN/image-27.png",
    },
  ];

  return (
    <div className="px-4 lg:px-20">
      <h1 className="text-3xl lg:text-5xl font-bold font-play text-center">
        Meet Our Team
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-16 mt-16">
        {teamMembers.map((member, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full ring-2 ring-head p-3 w-32 h-32 object-cover"
            />
            <p className="text-lg text-center font-semibold mt-2">
              {member.name}
            </p>
            <p className="text-sm text-center text-dark">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meet;
