import { useState } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import razorpaySvg from '../assets/razorpay.svg'
import paymentgatewaySvg from '../assets/paymentgateway.svg'
import underlineSvg from '../assets/underline.svg'

function PaymentForm({ onBackClick, compact }) {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    language: 'en',
  })
  
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(form.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission logic
      console.log('Form submitted successfully:', form);
    }
  }

  const amount = '23,999.00'

  const isCompact = compact === true

  const inputClass =
    isCompact
      ? 'w-full px-4 py-2.5 text-sm rounded-[6px] focus:ring-2 focus:outline-none transition bg-white focus:border-[var(--Primary-Color_100,#407AFF)] focus:ring-[var(--Primary-Color_100,#407AFF)] [border:1px_solid_var(--stroke-light,#DCDCDC)]'
      : 'w-full px-4 py-2.5 text-sm max-[1439px]:text-xs max-[1439px]:py-1.5 1440:py-3 1440:text-base 2xl:py-2.5 2xl:text-sm 3xl:py-4 3xl:text-base border border-[#DCDCDC] rounded-[6px] focus:ring-2 focus:outline-none transition bg-white focus:border-[var(--Primary-Color_100,#407AFF)] focus:ring-[var(--Primary-Color_100,#407AFF)]'
  const errorInputClass = 'border-red-500 focus:border-red-500 focus:ring-red-500'
  const labelClass = 'block font-sans font-medium text-[13px] max-[1439px]:text-[11px] max-[1439px]:mb-0.5 1440:text-[14px] 2xl:text-[13px] 3xl:text-base text-[#000000] mb-1'
  const errorTextClass = 'text-red-500 text-xs mt-1 block font-medium'

  return (
    <div
      className={`w-full bg-[#FFFFFF] ${isCompact ? 'min-h-full rounded-none flex flex-col overflow-x-hidden' : 'min-h-0 min-[1440px]:min-h-[520px] rounded-2xl overflow-hidden'} ${!isCompact ? 'p-6 max-[1439px]:p-4' : ''}`}
      style={{
        ...(isCompact
          ? { padding: '16px' }
          : {
              border: '1px solid var(--Primary-Color_100, #407AFF)',
              boxShadow: '0px 0px 20.4px 0px #00000026',
            }),
      }}
    >
      <div className={`flex items-center mb-6 ${isCompact ? 'gap-3' : 'justify-between max-[1439px]:mb-3'}`}>
        <div className="flex items-center gap-3">
          {onBackClick && (
            <button
              type="button"
              onClick={onBackClick}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition text-gray-700 -ml-1 shrink-0"
              aria-label="Back"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
          )}
          <div>
            <h2 id={onBackClick ? 'payment-modal-title' : undefined} className="font-sans font-bold text-lg max-[1439px]:text-base 1440:text-[20px] 2xl:text-lg 3xl:text-2xl text-[#000000]">
              Payment Details
            </h2>
            <img
              src={underlineSvg}
              alt=""
              className="mt-2.5 w-auto h-1 object-contain object-left"
              aria-hidden
            />
          </div>
        </div>
        {!isCompact && (
          <img src={razorpaySvg} alt="Razorpay" className="h-5 max-[1439px]:h-4 1440:h-6 2xl:h-5 3xl:h-7 w-auto shrink-0" />
        )}
      </div>

      <form onSubmit={handleSubmit} className={isCompact ? 'flex flex-col flex-1 min-h-0' : ''}>
        <div className={isCompact ? 'flex-shrink-0' : ''}>
        <div className={`space-y-5 ${!isCompact ? 'max-[1439px]:space-y-2' : ''}`}>
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange}
            className={`${inputClass} ${errors.fullName ? errorInputClass : ''}`}
          />
          {errors.fullName && <span className={errorTextClass}>{errors.fullName}</span>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-red-500">*</span>
          </label>
          <div className="flex group">
            <span
              className={`inline-flex items-center px-3 py-2.5 text-xs rounded-l-[6px] bg-gray-50 text-gray-600 group-focus-within:border-[var(--Primary-Color_100,#407AFF)] border-r-0 ${
                isCompact
                  ? `py-2.5 text-xs [border:1px_solid_var(--stroke-light,#DCDCDC)] ${errors.phone ? 'border-red-500' : ''}`
                  : `max-[1439px]:py-1.5 max-[1439px]:text-xs 1440:py-3 1440:text-sm 2xl:py-2.5 2xl:text-xs 3xl:py-4 3xl:text-base border border-[#DCDCDC] ${errors.phone ? 'border-red-500' : ''}`
              }`}
            >
              +91
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={handleChange}
              className={`flex-1 rounded-l-none rounded-r-[6px] ${inputClass} ${errors.phone ? errorInputClass : ''}`}
            />
          </div>
          {errors.phone && <span className={errorTextClass}>{errors.phone}</span>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            value={form.email}
            onChange={handleChange}
            className={`${inputClass} ${errors.email ? errorInputClass : ''}`}
          />
          {errors.email && <span className={errorTextClass}>{errors.email}</span>}
        </div>
        <div>
          <label className={labelClass}>Amount</label>
          <input
            type="text"
            readOnly
            value={`₹ ${amount}`}
            className={`${inputClass} bg-gray-50 select-none cursor-default pointer-events-none focus:ring-0 focus:border-[#DCDCDC] font-semibold`}
            tabIndex={-1}
            onFocus={(e) => e.target.blur()}
          />
        </div>
        <div>
          <label htmlFor="language" className={labelClass}>
            Select Program Language
          </label>
          <FormControl fullWidth size="small" sx={{ mt: 0 }}>
            <Select
              id="language"
              name="language"
              value={form.language}
              onChange={handleChange}
              displayEmpty
              renderValue={(v) => (v === 'en' ? 'English' : 'हिंदी')}
              sx={{
                borderRadius: '6px',
                border: '1px solid',
                borderColor: isCompact ? 'var(--stroke-light, #DCDCDC)' : '#DCDCDC',
                backgroundColor: 'white',
                fontFamily: 'inherit',
                fontSize: isCompact ? '0.875rem' : undefined,
                margin: 0,
                ...(isCompact
                  ? {
                      minHeight: 0,
                      height: '38px',
                      '& .MuiSelect-select': {
                        py: '6px',
                        px: '12px',
                        fontSize: '0.875rem',
                        lineHeight: 1.25,
                        boxSizing: 'border-box',
                      },
                    }
                  : {
                      height: '42px', // Match standard input height
                      '@media (min-width: 1440px)': { height: '46px' },
                      '@media (min-width: 1920px)': { height: '54px' },
                      '& .MuiSelect-select': {
                        py: '0 !important',
                        px: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        boxSizing: 'border-box',
                      },
                    }),
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '&.Mui-focused': { borderColor: errors.language ? '#ef4444' : 'var(--Primary-Color_100, #407AFF)', boxShadow: errors.language ? '0 0 0 2px rgba(239, 68, 68, 0.25)' : '0 0 0 2px rgba(64, 122, 255, 0.25)' },
                ...(errors.language && {
                  borderColor: '#ef4444',
                })
              }}
              MenuProps={{
                disableScrollLock: true,
                PaperProps: {
                  sx: {
                    borderRadius: '6px',
                    mt: 0.5,
                    maxHeight: 200,
                    ...(isCompact && {
                      '& .MuiMenuItem-root': {
                        fontSize: '0.875rem !important',
                        minHeight: '36px !important',
                        padding: '8px 12px !important',
                      },
                    }),
                  },
                },
              }}
            >
              <MenuItem value="en" sx={isCompact ? { fontSize: '0.875rem', minHeight: 36, py: 1, px: 1.5 } : undefined}>
                English
              </MenuItem>
              <MenuItem value="hi" sx={isCompact ? { fontSize: '0.875rem', minHeight: 36, py: 1, px: 1.5 } : undefined}>
                हिंदी
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        </div>
        </div>

        {isCompact ? (
          /* Mobile full-page: button + payment gateway at bottom, flush left/right/bottom */
          <div
            className="flex flex-col gap-0 mt-auto pt-6 flex-shrink-0"
            style={{
              width: 'calc(100% + 32px)',
              marginLeft: '-16px',
              marginBottom: '-16px',
            }}
          >
            <button
              type="submit"
              className="font-sans font-semibold text-base py-5 text-white text-center w-full rounded-none hover:opacity-95 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition border-0 flex items-center justify-center"
              style={{
                background: 'linear-gradient(95.6deg, #3FADFF -22.88%, #336CDC 49.27%, #47B4B4 122.91%)',
              }}
            >
              Pay ₹{amount}
            </button>
            <div
              className="flex items-center justify-center w-full py-3"
              style={{ background: '#F0F4FF' }}
            >
              <img
                src={paymentgatewaySvg}
                alt="Payment methods"
                className="max-w-[55%] w-auto h-8 object-contain"
              />
            </div>
          </div>
        ) : (
          /* Desktop: 60% payment gateway, 40% Pay button strip (from 1024px) */
          <div
            className="flex flex-col sm:flex-row items-stretch gap-0 mt-8 overflow-hidden h-16 3xl:h-[5rem]"
            style={{ marginLeft: '-24px', marginRight: '-24px', marginBottom: '-24px', background: '#F0F4FF' }}
          >
            <div className="w-full sm:w-[60%] shrink-0 flex items-center justify-center py-0 pl-5 pr-2 sm:rounded-bl-2xl overflow-hidden">
              <img
                src={paymentgatewaySvg}
                alt="Payment methods"
                className="w-auto h-8 object-contain min-[1024px]:max-w-[75%] min-[1024px]:h-11 min-[1080px]:h-9 min-[1921px]:h-8 max-[1080px]:min-w-[140px]"
              />
            </div>
            <div className="w-full sm:w-[40%] shrink-0 flex rounded-b-2xl sm:rounded-bl-none sm:rounded-br-2xl overflow-hidden min-w-[140px]">
              <button
                type="submit"
                className="font-sans font-semibold text-sm py-3 px-4 max-[1439px]:text-xs max-[1439px]:py-2 max-[1439px]:px-3 1440:text-[16px] 1440:py-5 1440:px-6 2xl:text-sm 2xl:py-2.5 2xl:px-4 3xl:text-lg 3xl:py-6 3xl:px-8 text-white text-center w-full h-full min-h-0 rounded-b-2xl sm:rounded-bl-none sm:rounded-br-2xl hover:opacity-95 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition border-0 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(95.6deg, #3FADFF -22.88%, #336CDC 49.27%, #47B4B4 122.91%)',
                }}
              >
                Pay ₹{amount}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default PaymentForm
