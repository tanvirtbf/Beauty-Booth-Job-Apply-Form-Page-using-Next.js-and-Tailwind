import React from 'react'
import ProgressBar from './ProgressBar'
import SubmitButton from './SubmitButton'

const FirstPart = ({btnState,setBtnState}) => {
  return (
    <div className='text-black w-full sm:w-2/5 p-5 flex flex-col gap-4'>
      <ProgressBar btnState={btnState} />
      <div className="flex flex-col gap-1">
        <h3 className='text-xl text-[#222222] font-medium'>Personal info</h3>
      </div>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder='First and Last Name' required className='inputBorder' />
        <input type="text" placeholder='Email Address' required className='inputBorder'/>
        <input type="text" placeholder='Phone' required className='inputBorder'/>
        <input type="text" placeholder='Address' required className='inputBorder'/>
        <div className='flex flex-col gap-1'>
          <div>
            <label htmlFor="Gender" className='text-base text-[#222222] font-medium'>Gender</label>
          </div>
          <div className='flex gap-2'>
            <div className='flex gap-1 items-center'>
              <label htmlFor="male" className='text-sm text-[#222222] font-medium'>Male</label>
              <input type="radio" name="" id="male" checked={false} />
            </div>
            <div className='flex gap-1 items-center'>
              <label htmlFor="female" className='text-sm text-[#222222] font-medium'>Female</label>
              <input type="radio" name="" id="female" checked={true} />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='font-medium text-base text-[#222222]'>Upload Resume</h4>
          <p className='text-sm font-medium text-[#222222]'>(File accepted: .pdf, .doc/docx - Max file size: 150KB for demo limit)</p>
          <div className='p-2 border border-[#DDDDDD] rounded'>
            <input type="file" id="myFile" name="filename" style={{color:'#999999',fontSize:'14px', fontWeight:'400'}} />
          </div>
        </div>
        <div className="bg-[#F0F0F0] w-full h-0.5 rounded-lg mt-5 mb-2"></div>
        <SubmitButton setBtnState={setBtnState} btnState={btnState} />
      </form>
    </div>
  )
}

export default FirstPart
