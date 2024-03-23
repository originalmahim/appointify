export const CardDemo = () => {
  return (
    <>
      <div className="bg-white animate-pulse duration-500 p-6 w-2/3 rounded-lg shadow-xl hidden md:block shadow-[#96d6e357] max-w-sm">
  <div className="flex items-center space-x-4 mb-4">
    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
      <img
        className="aspect-square object-cover h-full w-full"
        alt="Profile picture"
        src="https://media.istockphoto.com/id/1411818808/photo/portrait-shot-of-smiling-young-businessman-at-office-looking-at-camera-concept-successful.jpg?s=1024x1024&w=is&k=20&c=Dnnnjv9qs-aU7VC2xc9n_MMFffcoWDrdvBIZRTq6WPw="
      />
    </span>
    <div>
      <p className="text-[21px] font-semibold">Let's fin</p>
      <a className="text-[gray] text-" href="#">
        calendl
      </a>
    </div>
  </div>
  <div className="p-4 py-8 rounded-lg mb-4">
    <div className="flex items-center gap-3">
    <img
        className="aspect-square object-top object-cover size-8 rounded-full border"
        alt="Profile picture"
        src="https://img.freepik.com/free-photo/portrait-photo_144627-46580.jpg?w=360&t=st=1711204561~exp=1711205161~hmac=3689f06fa16ee3d9bf07e796b4c69254806cb2cf6985dcfd713784463069786d"
      />
    <p className="text-sm font-semibold ">Wednes</p>
    </div>
    <p className="ml-11 mb-4 text-sm text-[#b9b9b9] ">hey how are you</p>
    <div className="flex items-center justify-between">
      <button className="inline-flex 
      items-center justify-center whitespace-nowrap
       rounded-md text-sm font-medium ring-offset-background 
       transition-colors focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ring
         focus-visible:ring-offset-2 disabled:pointer-events-none 
         disabled:opacity-50 hover:bg-primary/90 hover:text-white  h-10 px-4 py-2 bg-white text-primary border">
        10:00
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 hover:text-white h-10 px-4 py-2 border">
        11:00
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 hover:text-white h-10 px-4 py-2 border">
        Conf
      </button>
    </div>
  </div>
  <div className="flex items-center space-x-4">
    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
      <img
        className="aspect-square object-cover h-full w-full"
        alt="Profile picture"
        src="https://media.istockphoto.com/id/1208414530/photo/male-professional-smiling-while-standing-in-office.jpg?s=1024x1024&w=is&k=20&c=6XRlgefUFeggBp57RDfY4Iekf7XmxeMLz-lN2HDXwG4="
      />
    </span>
    <div>
      <p className="text-sm font-semibold">Looking forward to it!</p>
      <div className="flex items-center text-green-600 text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
    </div>
  </div>
</div>
 
    </>
  );
};