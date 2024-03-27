export const X = () => {
    return (
      <>
       <div className="bg-gradient-to-r  from-[#10181a] to-[#020d0f] text-white p-16 rounded-lg">
    <div className="grid grid-cols-2 gap-8">
      <div>
        <div className="flex justify-between items-center mb-6">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white ">
            Daily Planner
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-400">
            Weekly Overview
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-400">
            Monthly Goals
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-400">
            Yearly Reflection
          </button>
        </div>
        <div className="mb-6 space-y-6">
          <h2 className="text-5xl font-bold mb-2">23 min</h2>
          <p className="text-gray-400">Overall estimated waiting time</p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 my-4">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: "25%" }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>10 min</span>
            <span>9 min</span>
            <span>4 min</span>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div
            aria-valuemax={100}
            aria-valuemin={0}
            role="progressbar"
            data-state="indeterminate"
            data-max={100}
            className="relative h-2 overflow-hidden rounded-full bg-primary/20 w-full"
          >
            <div
              data-state="indeterminate"
              data-max={100}
              className="h-full w-full flex-1 bg-primary transition-all"
              style={{ transform: "translateX(-57%)" }}
            />
          </div>
          <span className="ml-2 text-white">43%</span>
        </div>
        <p className="text-sm text-gray-400 pb-4 pt-8">
          Don't worry, if you close your tab. We will notify you about next steps
          via email or browser pushes.
        </p>
        <div className="flex items-center">
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mr-2 bg-[#2a2a2a] border-none "
            placeholder="Your email"
            type="email"
          />
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#161515] to-[#042e33] h-10 px-4 py-2">
            Notify me
          </button>
        </div>
     
      </div>
      
      <div>



        
      <div className="mt-14 relative bg-[#1f2729] p-3 rounded-lg">

<div>

<h3 className=" text-[17px] font-body mb-4 text-[#bababa]">Time Management</h3>
<p className="text-[#929292] text-[14px] pb-6">e team at this company is exceptional. Their expertise and professionalism have added tremendous value to our projects. We highly recom</p>
<div className="flex mt- items-center mb-8 gap-8">
<label
  className=" font-medium flex items-center gap-2 text-[gray] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
  htmlFor="time-management-toggle"
>
<input type="checkbox" className="accent-primary size-4" />
  Efficiency
</label>  <label
  className=" font-medium flex items-center gap-2 text-[gray] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
  htmlFor="time-management-toggle"
>
<input type="checkbox" className="accent-primary size-4" />
  Efficiency
</label>
</div>
</div>
<div className="absolute top-3 right-3 flex space-x-2">
<button className="text-[12px] text-[#aaaaaa]">
  Morning
</button>
<button className="text-[12px] text-[#aaaaaa]">
  Afternoon
</button>
<button className="text-[12px] text-primary">
  Evening
</button>
</div>


</div>



<div className="mt-14 relative bg-[#1f2729] p-3 rounded-lg">

<div>

<h3 className=" text-[17px] font-body mb-4 text-[#bababa]">Time Management</h3>
<p className="text-[#929292] text-[14px] pb-6">e team at this company is exceptional. Their expertise and professionalism have added tremendous value to our projects. We highly recom</p>
<div className="flex mt- items-center mb-8 gap-8">
<label
  className=" font-medium flex items-center gap-2 text-[gray] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
  htmlFor="time-management-toggle"
>
<input type="checkbox" className="accent-primary size-4" />
  Efficiency
</label>  <label
  className=" font-medium flex items-center gap-2 text-[gray] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
  htmlFor="time-management-toggle"
>
<input type="checkbox" className="accent-primary size-4" />
  Efficiency
</label>
</div>
</div>
<div className="absolute top-3 right-3 flex space-x-2">
<button className="text-[12px] text-[#aaaaaa]">
  Morning
</button>
<button className="text-[12px] text-[#aaaaaa]">
  Afternoon
</button>
<button className="text-[12px] text-primary">
  Evening
</button>
</div>





</div>
   
<div className="flex justify-end space-x-2 mt-8">
          <button className="inline-flex items-center w-1/2 justify-center whitespace-nowrap rounded-md text-sm text-[gray] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-[#2a2a2a] border-none h-10 px-4 py-2 ">
            Reset to default
          </button>
          <button className="inline-flex items-center w-1/2 bg-gradient-to-r from-[#161515]  to-[#042e33] justify-center whitespace-nowrap rounded-md text-sm text-[white] ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 border-none  read-only:">
            Apply
          </button>
        </div>
       
      </div>

      
    </div>
  </div>
   
      </>
    );
  };