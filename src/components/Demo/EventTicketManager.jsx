export const EventTicketManager = () => {
  return (
    <>
     
     <div
  className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-4xl mx-auto"
  data-v0-t="card"
>
  <div className="space-y-1.5 p-6 flex flex-col gap-1">
    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
      Tickets
    </h3>
    <div className="p-6 text-xs leading-none">
      Manage px-3 p-1 text-white ticket sales and disable individual tickets
    </div>
  </div>
  <div className="p-6">
    <div className="flex w-full rounded-md border">
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
        className="h-4 w-4 m-2 text-gray-500 dark:text-gray-400"
      >
        <circle cx={11} cy={11} r={8} />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        className="flex h-10 px-3 p-1 text-white w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-none border-l-0"
        placeholder="Search by ticket ID or type..."
        type="search"
      />
    </div>
  </div>
  <div className="p-0">
    <div className="relative w-full overflow-auto">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[100px]">
              Ticket ID
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Type
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Price
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Status
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[100px]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
              TCKT001
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              General Admission
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              $25.00
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              Enabled
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 flex gap-2 w-[100px]">
              <button className="inline-flex px-3 p-1 text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">
                Disable
              </button>
            </td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
              TCKT002
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              VIP Access
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              $100.00
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              Enabled
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 flex gap-2 w-[100px]">
              <button className="inline-flex px-3 p-1 text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">
                Disable
              </button>
            </td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
              TCKT003
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              Backstage Pass
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              $150.00
            </td>
            <td className="p-4 px-3 p-1 text-white align-middle [&:has([role=checkbox])]:pr-0">
              Disabled
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 flex gap-2 w-[100px]">
              <button className="inline-flex px-3 p-1 text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">
                Enable
              </button>
            </td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
              TCKT004
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              All-Access
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              $200.00
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              Enabled
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 flex gap-2 w-[100px]">
              <button className="inline-flex px-3 p-1 text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">
                Disable
              </button>
            </td>
          </tr>
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
              TCKT005
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              Front Row
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              $75.00
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              Enabled
            </td>
            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 flex gap-2 w-[100px]">
              <button className="inline-flex px-3 p-1 text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">
                Disable
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

    </>
  );
};