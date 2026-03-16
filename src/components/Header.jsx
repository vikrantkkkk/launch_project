import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className="w-full max-w-full overflow-hidden">
      <div className="w-full max-w-full pt-[25px] 3xl:pt-8 px-4 sm:px-6 md:px-8 lg:px-[45px] 3xl:px-16">
        <img
          src={logo}
          alt="STOCKWIZ"
          className="h-7 w-auto 1440:h-8 3xl:h-10"
        />
      </div>
    </header>
  )
}

export default Header
