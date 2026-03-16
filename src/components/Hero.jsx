import lifetimeSvg from '../assets/lifetime.svg'
import checkSvg from '../assets/check.svg'
import mainimgSvg from '../assets/mainimg.svg'
import mainimg2Svg from '../assets/mainimg2.svg'
import mainimg3Svg from '../assets/mainimg3.svg'

const featureColumns = [
  [
    'Unlimited Pre-built Algo Deployments',
    'Custom No Code Strategy Builder',
    '35 Pre Built Premium Algo Strategies',
  ],
  [
    '8 Ready Made Non Directional Algo Strategies',
    '90+ Custom Indicators',
    'Trading View and Chartink Integration',
  ],
  [
    'Advanced Algo Trading Course',
    'Fully Automatic Trading',
  ],
]

function Hero() {
  return (
    <section className="w-full min-w-0 pb-6">
      <h1 className="flex flex-wrap items-center gap-3 mb-4 font-sans font-bold text-gray-900 leading-none min-w-0">
        <span className="text-3xl sm:text-4xl lg:text-[40px] 1440:text-[48px] 2xl:text-[42px] 3xl:text-[56px] min-w-0 break-words">
          StrykeX Algos
        </span>
        <img
          src={lifetimeSvg}
          alt="Lifetime"
          className="h-[1.5rem] sm:h-[1.75rem] min-[1024px]:h-8 1440:h-[2rem] min-[1981px]:h-9 w-auto object-contain flex-shrink-0 block"
        />
      </h1>
      <p className="font-sans font-medium text-sm 1440:text-base 2xl:text-sm 3xl:text-lg text-gray-600 max-w-3xl">
        A powerful fully automated trading platform designed for peak performance trading all on autopilot. Our Premium StrykeX Membership includes:
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-lg:grid-cols-1 gap-x-6 lg:gap-x-8 gap-y-1.5 1440:gap-x-6 1440:gap-y-0.5 2xl:gap-x-8 2xl:gap-y-1.5 3xl:gap-x-12 3xl:gap-y-2 mt-[32px] 3xl:mt-12 text-[10px] min-[1440px]:text-[12px] min-[1981px]:text-base text-[#040404] font-sans min-w-0">
        {featureColumns.map((column, colIndex) => (
          <li key={colIndex} className="flex flex-col gap-2 1440:gap-1 3xl:gap-2 min-w-0">
            {column.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 1440:gap-1 3xl:gap-2 min-w-0">
                <img
                  src={checkSvg}
                  alt=""
                  className="w-4 h-4 1440:w-[14px] 1440:h-[14px] 2xl:w-4 2xl:h-4 3xl:w-6 3xl:h-6 shrink-0"
                  aria-hidden
                />
                <span className="min-w-0 break-words">{feature}</span>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <div
        className="mt-8 2xl:mt-12 3xl:mt-12 w-full min-w-0 rounded-xl overflow-hidden border border-gray-100 bg-gray-50/30 mx-1 sm:mx-2"
        style={{ boxShadow: '0px 0px 20.9px 0px #00000040' }}
      >
        <img
          src={mainimgSvg}
          alt="StrykeX dashboard preview"
          className="hidden lg:block w-full h-auto object-contain"
        />
        <img
          src={mainimg3Svg}
          alt="StrykeX dashboard preview"
          className="hidden md:block lg:hidden w-full h-auto object-contain"
        />
        <img
          src={mainimg2Svg}
          alt="StrykeX dashboard preview"
          className="md:hidden w-full h-auto object-contain block"
        />
      </div>
    </section>
  )
}

export default Hero
