import Header from './components/Header'
import Hero from './components/Hero'
import WebinarForm from './components/WebinarForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#FFFFFF] text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="w-full max-w-full flex-1 flex flex-col min-h-0 pt-6 sm:pt-8 lg:pt-[45px] 3xl:pt-14 3xl:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] 1440:grid-cols-[8fr_4fr] 3xl:grid-cols-[3fr_2fr] w-full max-w-full gap-6 lg:gap-12 3xl:gap-16 items-start 3xl:flex-1 3xl:min-h-0">
          <div className="min-w-0 pl-4 sm:pl-6 md:pl-8 lg:pl-[45px] 3xl:pl-16">
            <Hero />
          </div>
          <div className="flex min-w-0 px-0 sm:px-6 md:pr-8 lg:pr-[45px] 3xl:pr-16 lg:sticky lg:top-6 justify-center flex-col gap-4">
            {/* Mobile: footer content just above form */}
            <div className="lg:hidden">
              <Footer />
            </div>
            <div className="relative w-full lg:w-[90%] min-[1441px]:w-[80%] 3xl:w-[90%]">
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none -inset-[14px]"
                style={{
                  filter: 'blur(28px)',
                }}
                aria-hidden
              />
              <div className="relative z-10">
                <WebinarForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Desktop/tablet footer at page bottom */}
      <Footer className="hidden lg:block" />
    </div>
  )
}

export default App
