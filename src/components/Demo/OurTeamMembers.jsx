export const OurTeamMembers = () => {
  return (
    <>
     <section className="w-full  py-12 md:py-24 lg:py-32">
  <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
    <div className="space-y-3">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Meet Our Team
      </h2>
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Our team of experienced dentists and dedicated staff are here to provide
        you with the highest quality dental care.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="group">
        <a href="#">
          <img
            src="https://media.istockphoto.com/id/1208414530/photo/male-professional-smiling-while-standing-in-office.jpg?s=1024x1024&w=is&k=20&c=6XRlgefUFeggBp57RDfY4Iekf7XmxeMLz-lN2HDXwG4="
            width={300}
            height={300}
            alt="Dr. John Doe"
            className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center "
          />
          <div className="mt-4">
            <h3 className="text-xl font-bold group-hover:text-gray-900">
              Dr. John Doe
            </h3>
            <p className="text-gray-500">Senior Dentist</p>
            <p className="text-gray-500">
              With over 20 years of experience in general and cosmetic
              dentistry, Dr. Doe is committed to providing comprehensive care to
              all patients.
            </p>
          </div>
        </a>
      </div>
      <div className="group">
        <a href="#">
          <img
            src="https://media.istockphoto.com/id/1208414530/photo/male-professional-smiling-while-standing-in-office.jpg?s=1024x1024&w=is&k=20&c=6XRlgefUFeggBp57RDfY4Iekf7XmxeMLz-lN2HDXwG4="
            width={300}
            height={300}
            alt="Dr. Jane Smith"
            className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
          />
          <div className="mt-4">
            <h3 className="text-xl font-bold group-hover:text-gray-900">
              Dr. Jane Smith
            </h3>
            <p className="text-gray-500">Orthodontist</p>
            <p className="text-gray-500">
              Dr. Smith specializes in orthodontics and dentofacial orthopedics,
              providing quality care for children, teens, and adults.
            </p>
          </div>
        </a>
      </div>
      <div className="group">
        <a href="#">
          <img
            src="https://media.istockphoto.com/id/1208414530/photo/male-professional-smiling-while-standing-in-office.jpg?s=1024x1024&w=is&k=20&c=6XRlgefUFeggBp57RDfY4Iekf7XmxeMLz-lN2HDXwG4="
            width={300}
            height={300}
            alt="Dr. Emily Johnson"
            className="aspect-[1/1] overflow-hidden rounded-lg object-cover object-center"
          />
          <div className="mt-4">
            <h3 className="text-xl font-bold group-hover:text-gray-900">
              Dr. Emily Johnson
            </h3>
            <p className="text-gray-500">Pediatric Dentist</p>
            <p className="text-gray-500">
              Dr. Johnson is passionate about children's dental health, and
              provides a fun and friendly environment for kids.
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  );
};