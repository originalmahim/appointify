export const Pricing = () => {
  return (
    <>
    <div className="bg-gray-100 py-10">
  <div className="max-w-6xl mx-auto px-5">
    <div className="text-center mb-10">
      <h1 className="text-3xl font-semibold mb-2">Pricing</h1>
      <p className="text-gray-600">
        Risus commodo laoreet lacus purus pharetra elementum. Pulvinar porta
        porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat
        magno semper risus facilidunt.
      </p>
    </div>
    <div className="flex justify-center space-x-4 mb-6">
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-white shadow-md">
        Monthly
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gray-300">
        Yearly
      </button>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-gray-300">
        Early Bird
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div
        className="rounded-lg border text-card-foreground bg-white shadow-lg p-5"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap tracking-tight text-lg font-semibold">
            Lite plan
          </h3>
          <p className="text-sm text-gray-600">Hi sit amet consectetur quis</p>
        </div>
        <div className="p-6">
          <ul className="text-gray-600 space-y-2 mb-4">
            <li>1 user in workspace</li>
            <li>Workflow automations</li>
            <li>Weekly billing</li>
            <li>5 GB cloud storage</li>
          </ul>
          <div className="text-3xl font-semibold mb-4">$24/mo</div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Get started
          </button>
        </div>
      </div>
      <div
        className="rounded-lg border text-card-foreground bg-white shadow-lg p-5"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap tracking-tight text-lg font-semibold">
            Basic plan
          </h3>
          <p className="text-sm text-gray-600">Hi sit amet consectetur quis</p>
        </div>
        <div className="p-6">
          <ul className="text-gray-600 space-y-2 mb-4">
            <li>3 users in workspace</li>
            <li>Workflow automations</li>
            <li>Weekly billing</li>
            <li>10 GB cloud storage</li>
          </ul>
          <div className="text-3xl font-semibold mb-4">$32/mo</div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Get started
          </button>
        </div>
      </div>
      <div
        className="rounded-lg border text-card-foreground bg-white shadow-lg p-5"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap tracking-tight text-lg font-semibold">
            Pro plan
          </h3>
          <p className="text-sm text-gray-600">Hi sit amet consectetur quis</p>
        </div>
        <div className="p-6">
          <ul className="text-gray-600 space-y-2 mb-4">
            <li>5 users in workspace</li>
            <li>Workflow automations</li>
            <li>Weekly billing</li>
            <li>15 GB cloud storage</li>
          </ul>
          <div className="text-3xl font-semibold mb-4">$40/mo</div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Get started
          </button>
        </div>
      </div>
      <div
        className="rounded-lg border text-card-foreground bg-white shadow-lg p-5"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="whitespace-nowrap tracking-tight text-lg font-semibold">
            Advanced plan
          </h3>
          <p className="text-sm text-gray-600">Hi sit amet consectetur quis</p>
        </div>
        <div className="p-6">
          <ul className="text-gray-600 space-y-2 mb-4">
            <li>7 users in workspace</li>
            <li>Workflow automations</li>
            <li>Weekly billing</li>
            <li>20 GB cloud storage</li>
          </ul>
          <div className="text-3xl font-semibold mb-4">$48/mo</div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Get started
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};