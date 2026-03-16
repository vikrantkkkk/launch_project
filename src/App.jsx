import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PaymentForm from './components/PaymentForm'
import Footer from './components/Footer'

function App() {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#FFFFFF] text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="w-full max-w-full flex-1 flex flex-col min-h-0 pt-6 sm:pt-8 lg:pt-[45px] 3xl:pt-14 3xl:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] 1440:grid-cols-[8fr_4fr] 3xl:grid-cols-[3fr_2fr] w-full max-w-full gap-8 lg:gap-12 3xl:gap-16 items-start 3xl:flex-1 3xl:min-h-0">
          <div className="min-w-0 pl-4 sm:pl-6 md:pl-8 lg:pl-[45px] 3xl:pl-16">
            <Hero />
          </div>
          <div className="hidden lg:flex min-w-0 pr-4 sm:pr-6 md:pr-8 lg:pr-[45px] 3xl:pr-16 lg:sticky lg:top-6 justify-center">
            <div className="relative w-[90%] min-[1441px]:w-[80%] 3xl:w-[90%]">
              {/* Soft primary-color glow from form border, blends into background */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none -inset-[14px]"
                style={{
                  // background: 'rgba(64, 122, 255, 0.08)',
                  filter: 'blur(28px)',
                }}
                aria-hidden
              />
              <div className="relative z-10">
                <PaymentForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {/* Next button: visible only below 1024px (mobile layout) */}
      <div className="lg:hidden w-full px-4 sm:px-6 md:px-8 pb-6 pt-2">
        <button
          type="button"
          onClick={() => setPaymentModalOpen(true)}
          className="w-full py-3 rounded-xl font-sans font-semibold text-sm text-white transition hover:opacity-95 focus:ring-2 focus:ring-offset-2 focus:ring-[#407AFF]"
          style={{ background: 'linear-gradient(95.6deg, #3FADFF -22.88%, #336CDC 49.27%, #47B4B4 122.91%)' }}
        >
          Next
        </button>
      </div>

      {/* Full-page payment form: below 1024px when Next is clicked (not a modal) */}
      {paymentModalOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto"
          role="region"
          aria-labelledby="payment-modal-title"
        >
          <PaymentForm onBackClick={() => setPaymentModalOpen(false)} compact />
        </div>
      )}
    </div>
  )
}

export default App
