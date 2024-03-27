export const Integrations = () => {
  return (
    <>
      <div className="bg-gray-200 px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Integrations
        </h2>
        <div className="flex justify-center space-x-4">
          <div className="bg-white p-4 rounded-lg shadow-md w-1/5">
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
              className="text-blue-500 h-8 w-8 mb-4"
            >
              <line x1={5} x2={19} y1={9} y2={9} />
              <line x1={5} x2={19} y1={15} y2={15} />
              <line x1={19} x2={5} y1={5} y2={19} />
            </svg>
            <h3 className="font-semibold">Notion</h3>
            <p className="text-sm text-gray-600">
              Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-1/5">
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
              className="text-green-500 h-8 w-8 mb-4"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
            <h3 className="font-semibold">Zeus UI</h3>
            <p className="text-sm text-gray-600">
              Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-1/5">
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
              className="text-blue-700 h-8 w-8 mb-4"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
              <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
            </svg>
            <h3 className="font-semibold">Behance</h3>
            <p className="text-sm text-gray-600">
              Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-1/5">
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
              className="text-blue-400 h-8 w-8 mb-4"
            >
              <path d="M2 20h.01" />
              <path d="M7 20v-4" />
              <path d="M12 20v-8" />
              <path d="M17 20V8" />
              <path d="M22 4v16" />
            </svg>
            <h3 className="font-semibold">Telegram</h3>
            <p className="text-sm text-gray-600">
              Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-blue-600 text-white rounded py-2 px-4">
            See all integrations
          </button>
        </div>
        <div className="absolute top-0 right-0 m-8">
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
            className="text-purple-600 h-12 w-12"
          >
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          </svg>
        </div>
      </div>
    </>
  );
};
