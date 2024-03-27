import Container from "../../Container/Container";
import TitleAndDescription from "../../TiteleAndDescription/TitleAndDescription";

const LatestAchievements = () => {
  return (
    <div className="bg-[#f4f4f4] py-11">
    <Container>
      <TitleAndDescription 
      title={'Our Latest Achievements'}
      description={'Hey we are happy to share our recent achievement on Appointify'}
      customStyle={'text-center'}
      />
      <div className="grid gap-4 md:grid-cols-3">
        <div
          className="rounded-lg bg-white border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col items-center p-6">
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
              className="size-16 p-3 text-black bg-[#6b6b6b1f] rounded-full"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold">Improved Event API</h3>
              <p className="text-sm leading-7 text-gray-500  dark:text-gray-400">
                Awarded for marvellous performance on APIs.
              </p>
              <p className="text-sm leading-4 text-gray-500 dark:text-gray-400 mt-2">
                <time dateTime="2023-08-15">August 15, 2023</time>
              </p>
            </div>
          </div>
        </div>
        <div
          className="rounded-lg bg-white border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col items-center p-6">
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
              className="size-16 p-3 text-primary bg-[#00b4d81f] rounded-full"
            >
              <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
              <path d="M11 12 5.12 2.2" />
              <path d="m13 12 5.88-9.8" />
              <path d="M8 7h8" />
              <circle cx={12} cy={17} r={5} />
              <path d="M12 18v-2h-.5" />
            </svg>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold">Virtual Location Excellence</h3>
              <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
                Awarded for outstanding performance on Triliterations.
              </p>
              <p className="text-sm leading-4 text-gray-500 dark:text-gray-400 mt-2">
                <time dateTime="2023-08-15">August 15, 2023</time>
              </p>
            </div>
          </div>
        </div>
        <div
          className="rounded-lg bg-white  border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="flex flex-col items-center p-6">
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
              className="size-16 p-3 text-black bg-[#6b6b6b1f] rounded-full"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold">Virtual Location Excellence</h3>
              <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
                Awarded for excellent performance.
              </p>
              <p className="text-sm leading-4 text-gray-500 dark:text-gray-400 mt-2">
                <time dateTime="2023-08-15">August 15, 2023</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>

    </div>
  );
};

export default LatestAchievements;
