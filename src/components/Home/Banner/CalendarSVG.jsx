export const CalendarSVG = () => {
  return (
    <>
     <div className="bg-white w-full   md:w-1/2 relative  p-6 rounded-lg shadow-xl shadow-[#96d6e357]">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold text-gray-700">April 2021</h2>
    <div className="flex space-x-2">
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 bg-white p-2 rounded-full shadow-md">
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
          className="text-gray-600"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 bg-white p-2 rounded-full shadow-md">
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
          className="text-gray-600"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  </div>
  <div className="grid grid-cols-7 gap-2 text-sm text-center text-gray-500">
    <div>Mo</div>
    <div>Tu</div>
    <div>We</div>
    <div>Th</div>
    <div>Fr</div>
    <div>Sa</div>
    <div>Su</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div className="bg-black text-white rounded-full">9</div>
  </div>
  <div className="mt-4 bg-white p-4 rounded-lg ">
    <h3 className="text-[19px] font-semibold text-primary mb-2 ">
      Your meeting was scheduled!
    </h3>
    <p className="text-sm text-gray-400 mb-4">
      An invite has been placed on your calendar
    </p>
    <div className="flex items-center mb-5">
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
        className=" mr-2"
      >
        <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
        <line x1={16} x2={16} y1={2} y2={6} />
        <line x1={8} x2={8} y1={2} y2={6} />
        <line x1={3} x2={21} y1={10} y2={10} />
      </svg>
      <span className="text-sm text-gray-700">Tuesday, April 9</span>
    </div>
    <div className="flex items-center mb-2">
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
        className=" mr-2"
      >
        <circle cx={12} cy={12} r={10} />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      <span className="text-sm text-gray-700">10:00 am - 10:30 am</span>
    </div>
    <div className="flex items-center">
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
        className=" mr-2"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      <span className="text-sm text-gray-700">
        Participants: johncarter@slack.com...
      </span>
    </div>
  </div>

</div>
 



    </>
  );
};