function DashboardPreview() {
  const navItems = ['Dashboard', 'Pre-Built Algos', 'Strategy Builder', 'AI Trading Bots', 'My Account']
  const marketCards = [
    { name: 'Nifty', value: '23,508.40', change: '+258.90 (1.11%)' },
    { name: 'Bank Nifty', value: '52,100.00', change: '+420.00 (0.81%)' },
    { name: 'Sensex', value: '78,200.00', change: '+350.00 (0.45%)' },
    { name: 'Fin Nifty', value: '21,800.00', change: '+180.00 (0.83%)' },
  ]
  const deployedAlgos = [
    { name: 'Momentum AlgoFullio', multiplier: '2X', pnl: '+₹11,50,000', status: 'Active', action: 'Square Off' },
    { name: 'Bank Nifty Monthly Straddle 2.0', multiplier: '2X', pnl: '+₹1,50,000', status: 'Active', action: 'View Details' },
    { name: 'Trend Individual Algo', multiplier: '1X', pnl: '+₹45,000', status: 'Paused', action: 'View Details' },
    { name: 'Momentum Surge', multiplier: '2X', pnl: '+₹82,000', status: 'Active', action: 'Square Off' },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-card-lg overflow-hidden border border-gray-100">
      <div className="flex min-h-[520px]">
        {/* Sidebar */}
        <aside className="w-48 bg-gray-50 border-r border-gray-200 flex flex-col py-4 px-3">
          <div className="font-semibold text-gray-800 mb-4 text-sm 3xl:text-base">StrykeX</div>
          <input
            type="text"
            placeholder="Search"
            className="w-full px-2 py-1.5 text-sm 3xl:text-base border border-gray-200 rounded mb-4 bg-white"
            readOnly
          />
          <nav className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <button
                key={item}
                className={`text-left px-3 py-2 rounded text-sm 3xl:text-base font-medium ${
                  i === 0 ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          <button className="mt-auto flex items-center gap-2 px-3 py-2 text-sm 3xl:text-base text-gray-600 hover:bg-gray-100 rounded">
            <span className="text-gray-400">✕</span> Contact Us
          </button>
        </aside>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg 3xl:text-xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 3xl:w-9 3xl:h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm 3xl:text-base">🔔</span>
              <span className="w-8 h-8 3xl:w-9 3xl:h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm 3xl:text-base">⚙</span>
              <div className="flex items-center gap-1">
                <span className="w-8 h-8 3xl:w-9 3xl:h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs 3xl:text-sm font-medium">JS</span>
                <span className="text-sm 3xl:text-base text-gray-600">John Smith ▾</span>
              </div>
            </div>
          </div>
          <p className="text-xl 3xl:text-2xl font-bold text-gray-800 mb-4">Hello Shivam, Welcome Back</p>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {marketCards.map((card) => (
              <div key={card.name} className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                <div className="text-xs 3xl:text-sm text-gray-500">{card.name}</div>
                <div className="text-sm 3xl:text-base font-semibold text-gray-800">{card.value}</div>
                <div className="text-xs 3xl:text-sm text-emerald-600">{card.change}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 mb-4">
            <div className="text-sm 3xl:text-base font-medium text-gray-700">Overall Profit/Loss (3mths)</div>
            <div className="text-lg 3xl:text-xl font-bold text-emerald-600">+₹1,50,000.84</div>
            <div className="text-xs 3xl:text-sm text-gray-500">8.5 Transactions · Last updated</div>
            <div className="flex gap-4 mt-1 text-xs 3xl:text-sm">
              <span>Booked P&L: +₹1,50,000.84</span>
              <span>Cap Deployed: +₹1,50,000.84</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <div className="bg-emerald-100 text-emerald-700 text-xs 3xl:text-sm font-medium px-2 py-1 rounded flex items-center gap-1">
              🐂 Market Sentiment Bullish
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between bg-gray-50 px-3 py-2 border-b border-gray-200">
              <span className="text-sm 3xl:text-base font-semibold text-gray-800">Deployed Algos</span>
              <div className="flex gap-1">
                <span className="text-xs 3xl:text-sm px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">Active</span>
                <span className="text-xs 3xl:text-sm px-2 py-0.5 rounded bg-amber-100 text-amber-700">Paused</span>
                <span className="text-xs 3xl:text-sm px-2 py-0.5 rounded bg-gray-200 text-gray-600">Stopped</span>
              </div>
            </div>
            <div className="hidden sm:grid grid-cols-12 gap-2 px-3 py-2 text-xs 3xl:text-sm font-medium text-gray-500 border-b border-gray-100">
              <span className="col-span-4">Algo Name</span>
              <span className="col-span-2">Multiplier</span>
              <span className="col-span-2">Running P&L</span>
              <span className="col-span-2">Deployment Type</span>
              <span className="col-span-2">Total P&L</span>
            </div>
            {deployedAlgos.map((algo) => (
              <div
                key={algo.name}
                className="grid grid-cols-12 gap-2 px-3 py-2 text-sm 3xl:text-base border-b border-gray-100 last:border-0 items-center"
              >
                <span className="col-span-4 font-medium text-gray-800 truncate">{algo.name}</span>
                <span className="col-span-2 text-gray-600">{algo.multiplier}</span>
                <span className="col-span-2 text-emerald-600 font-medium">{algo.pnl}</span>
                <span className="col-span-2">
                  <button className="text-indigo-600 hover:underline text-xs 3xl:text-sm">{algo.action}</button>
                </span>
                <span className="col-span-2 text-gray-500 text-xs 3xl:text-sm">{algo.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview
