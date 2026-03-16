import heroImage from '../assets/heroimage.svg'
import heroImageMobile from '../assets/heroimagemobile.svg'
import nseLogo from '../assets/nse.svg'
import sebiLogo from '../assets/SEBI Registered.svg'
import isoLogo from '../assets/ISO.svg'
import bseLogo from '../assets/bse.svg'
import x2Logo from '../assets/X 2.svg'

function Hero() {
  return (
    <section className="w-full min-w-0 pb-0 flex flex-col gap-6">
      <div className="inline-flex rounded-full">
        <div
          className="inline-flex items-center rounded-full px-4 py-1 text-2xl font-medium text-white"
          style={{
            background:
              'linear-gradient(91.52deg, #3F72FF -69.26%, #0036B2 49.06%, #47B4B4 169.82%)',
            boxShadow: '0px 2.07px 5px 0px #0059FF6B',
          }}
        >
          The Future Of Trading Is Here
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <img src={x2Logo} alt="X2" className="h-11 w-11 rounded-2xl shadow-lg object-contain" />
        <p className="flex flex-wrap items-center gap-2 text-3xl sm:text-4xl lg:text-5xl 1440:text-5xl 2xl:text-5xl 3xl:text-6xl font-bold leading-tight">
          <span
            style={{
              background:
                'linear-gradient(94.4deg, #3F72FF 14.23%, #0036B2 60.53%, #47B4B4 107.78%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              paddingBottom: '4px',
            }}
          >
            The Biggest
          </span>
          <span className="text-black">Launch of 2026</span>
        </p>
      </div>

      <p
        className="font-sans font-medium text-base 3xl:text-lg max-w-2xl"
        style={{ color: '#404040' }}
      >
        A powerful fully automated trading platform designed for peak performance trading all on
        autopilot. Our Premium StrykeX Membership includes:
      </p>

      <div className="flex flex-wrap items-stretch gap-3">
        <div
          className="flex items-center gap-3 px-5 py-4 min-w-[220px] rounded-[6px]"
          style={{
            background: '#FFFFFFB5',
            border: '1px solid transparent',
            borderImage:
              'linear-gradient(99.13deg, #E66F25 -10.05%, #3A2E7D 50.57%, #E22028 120.21%) 1',
            backdropFilter: 'blur(2.16538405418396px)',
            boxShadow: '0px 0px 35.34px 0px #E66F253B',
            borderRadius: '6px',
            overflow: 'hidden',
          }}
        >
          <img
            src={nseLogo}
            alt="NSE"
            className="h-10 w-20 rounded-md object-contain"
          />
          <div className="leading-tight text-gray-900">
            <div className="text-xl sm:text-2xl font-semibold">Empanelled</div>
            <div className="text-xs sm:text-sm font-medium">Algo Vendor</div>
          </div>
        </div>

        <div className="inline-flex items-center rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-slate-100 bg-white text-xs sm:text-sm">
          {/* SEBI */}
          <div className="flex items-center gap-3 px-4 py-3 whitespace-nowrap">
              <img
                src={sebiLogo}
                alt="SEBI"
                className="object-contain"
              />
              <div className="leading-tight whitespace-nowrap">
                <div className="text-[11px] text-gray-700">SEBI Registered</div>
                <div className="text-[11px] font-semibold text-gray-900">
                  INH000013925
                </div>
              </div>
          </div>
          <div className="self-center h-8 w-px bg-slate-200" />

          {/* ISO */}
          <div className="flex items-center gap-3 px-4 py-3 whitespace-nowrap">
              <img
                src={isoLogo}
                alt="ISO"
                className="object-contain"
              />
              <div className="leading-tight whitespace-nowrap">
                <div className="text-[11px] font-semibold text-gray-900">
                  ISO Certified
                </div>
              </div>
          </div>
          <div className="self-center h-8 w-px bg-slate-200" />

          {/* BSE */}
          <div className="flex items-center gap-3 px-4 py-3 whitespace-nowrap">
              <img
                src={bseLogo}
                alt="BSE"
                className="Object-contain"
              />
              <div className="leading-tight text-[11px] text-gray-600 whitespace-nowrap">
                <div>Enlistment No.</div>
                <div className="font-semibold text-gray-900">5940</div>
              </div>
          </div>
        </div>
      </div>

      <div className="max-w-md shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <div
          className="rounded-2xl p-[0.9px]"
          style={{
            background:
              'linear-gradient(91.44deg, #3F72FF -4.99%, #0036B2 52.99%, #47B4B4 112.17%)',
          }}
        >
          <div className="rounded-2xl overflow-hidden bg-white">
            {/* Top gradient strip */}
            <div
              className="px-6 py-2 text-center text-sm font-semibold text-white"
              style={{
                background:
                  'linear-gradient(95deg, #3F72FF 0%, #0036B2 50%, #47B4B4 100%)',
              }}
            >
              Introducing ⚡ StrykeX 2.0
            </div>

            {/* Bottom date/time row */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white px-4 py-2 text-xs sm:text-sm text-[#404040]">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-md border border-slate-300 text-[10px]">
                  📅
                </span>
                <span>
                  Date:{' '}
                  <span className="font-semibold text-black">17th March</span>
                </span>
              </div>
              <div className="h-6 w-px bg-slate-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-md border border-slate-300 text-[10px]">
                  ⏰
                </span>
                <span>
                  Time:{' '}
                  <span className="font-semibold text-black">8pm Onwards</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

        <img
          src={heroImage}
          alt="StrykeX launch banner"
          className="hidden md:block"
        />
        <img
          src={heroImageMobile}
          alt="StrykeX launch banner"
          className="md:hidden"
        />
    </section>
  )
}

export default Hero
