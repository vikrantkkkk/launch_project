import fbSvg from '../assets/fb.svg'
import xSvg from '../assets/x.svg'
import whatsappSvg from '../assets/whatsapp.svg'
import mailSvg from '../assets/mail.svg'
import phoneSvg from '../assets/phone.svg'
import arrowtSvg from '../assets/arrowt.svg'

function Footer() {
  return (
    <footer className="w-full bg-[#FFFFFF]">
      <div className="w-full py-4 sm:py-5 lg:py-[25px] 3xl:py-8 px-4 sm:px-6 md:px-8 lg:px-[45px] 3xl:px-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-5 xl:gap-6 items-start w-full">
          {/* Column 1: Share + Contact - aligned to logo start */}
          <div className="flex flex-col gap-4 min-w-0 shrink-0">
            <div className="flex flex-col gap-2">
              <span className="font-sans font-semibold text-xs 1440:text-sm 2xl:text-xs 3xl:text-base text-gray-900">
                Share this on:
              </span>
              <div className="flex items-center gap-3">
                <a href="#" className="flex items-center justify-center hover:opacity-80 transition" aria-label="Facebook">
                  <img src={fbSvg} alt="" className="w-5 h-5 1440:w-6 1440:h-6 2xl:w-5 2xl:h-5 3xl:w-7 3xl:h-7" aria-hidden />
                </a>
                <a href="#" className="flex items-center justify-center hover:opacity-80 transition" aria-label="X">
                  <img src={xSvg} alt="" className="w-5 h-5 1440:w-6 1440:h-6 2xl:w-5 2xl:h-5 3xl:w-7 3xl:h-7" aria-hidden />
                </a>
                <a href="#" className="flex items-center justify-center hover:opacity-80 transition" aria-label="WhatsApp">
                  <img src={whatsappSvg} alt="" className="w-5 h-5 1440:w-6 1440:h-6 2xl:w-5 2xl:h-5 3xl:w-7 3xl:h-7" aria-hidden />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-sans font-semibold text-xs 1440:text-sm 2xl:text-xs 3xl:text-base text-gray-900">
                Contact Us:
              </span>
              <a
                href="mailto:help@stockwiz.in"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition font-sans font-medium text-xs 1440:text-sm 2xl:text-xs 3xl:text-base"
              >
                <img src={mailSvg} alt="" className="w-4 h-4 1440:w-5 1440:h-5 2xl:w-4 2xl:h-4 3xl:w-6 3xl:h-6 shrink-0" aria-hidden />
                help@stockwiz.in
              </a>
              <a
                href="tel:08065919278"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition font-sans font-medium text-xs 1440:text-sm 2xl:text-xs 3xl:text-base"
              >
                <img src={phoneSvg} alt="" className="w-4 h-4 1440:w-5 1440:h-5 2xl:w-4 2xl:h-4 3xl:w-6 3xl:h-6 shrink-0" aria-hidden />
                080-65919278
              </a>
            </div>
          </div>

          {/* Column 2: Disclaimer - space in between */}
          <div className="flex flex-col gap-1.5 min-w-0 flex-1 lg:max-w-2xl">
            <span className="font-sans font-semibold text-xs 1440:text-sm 2xl:text-xs 3xl:text-base text-gray-900 block">
              Disclaimer:
            </span>
            <div className="font-sans font-medium text-[11px] 1440:text-xs 2xl:text-[11px] 3xl:text-sm text-gray-600 space-y-2">
              <p>
                Investments in securities are subject to market risk. Past performance is not a guarantee of future results. Registration granted by SEBI and certification from NISM in no way guarantees performance of the intermediary or provides any assurance of returns to investors.
              </p>
              <p>
                *Past performance is not indicative of future returns. A SEBI-registered intermediaries&apos; services including their recommendation may not be always profitable, as actual market movements may be at variance with anticipated trends. You are not being offered any guaranteed or assured returns.
              </p>
            </div>
          </div>

          {/* Column 3: Terms & Conditions - aligned to form end */}
          <div className="flex flex-col gap-1.5 min-w-0 shrink-0 lg:max-w-sm">
            <span className="font-sans font-semibold text-xs 1440:text-sm 2xl:text-xs 3xl:text-base text-gray-900 block">
              Terms & Conditions:
            </span>
            <p className="font-sans font-medium text-[11px] 1440:text-xs 2xl:text-[11px] 3xl:text-sm text-gray-600">
              You agree to share information entered on this page with STOCKWIZ TECHNOLOGIES LLP (owner of this page) and Razorpay, adhering to applicable laws.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 font-sans font-semibold text-[11px] 1440:text-xs 2xl:text-[11px] 3xl:text-sm text-[#3F75FF] hover:opacity-80 transition w-fit"
            >
              Merchant&apos;s business policies
              <img src={arrowtSvg} alt="" className="w-3 h-3 1440:w-3.5 1440:h-3.5 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 shrink-0" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
