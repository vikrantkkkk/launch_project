import liveOnZoom from '../assets/liveonzoom.svg'

function WebinarForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div
      className="w-full bg-white border-t border-x rounded-t-2xl md:border md:rounded-2xl"
      style={{
        borderColor: 'var(--Primary-Color_100, #407AFF)',
        boxShadow: '0px 0px 20.4px 0px #00000026',
      }}
    >
      <div className="px-6 pt-5 pb-4 border-b border-slate-100">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-bold text-[#000000]">Join Webinar</h2>
          <img
            src={liveOnZoom}
            alt="Live on Zoom"
            className="object-cover"
          />
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="h-0.5 w-10 rounded-full bg-blue-600" />
          <span className="h-0.5 w-6 rounded-full bg-blue-300" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-6 pt-4 pb-5 space-y-4">
        <div className="space-y-1.5 text-sm">
          <label className="block font-medium text-slate-800">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          />
        </div>

        <div className="space-y-1.5 text-sm">
          <label className="block font-medium text-slate-800">Phone No.</label>
          <input
            type="tel"
            placeholder="+91"
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.35)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 focus-visible:ring-offset-white"
          style={{
            background:
              'linear-gradient(91.44deg, #3F72FF -4.99%, #0036B2 52.99%, #47B4B4 112.17%)',
            borderRadius: '6px',
          }}
        >
          Join Webinar
        </button>
      </form>
    </div>
  )
}

export default WebinarForm

