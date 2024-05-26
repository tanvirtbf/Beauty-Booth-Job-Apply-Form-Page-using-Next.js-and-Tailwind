"use client"
import { useState } from 'react'
import ProgressBar from './ProgressBar'
import SubmitButton from './SubmitButton'

const FirstPart = ({btnState,setBtnState}) => {
  const [firstForm,setFirstForm] = useState({
    name : '',
    email : '',
    phone : '',
    address : '',
    isMale : false,
    isFemale : false,
  })
  console.log(firstForm.name)
  return (
    <div className='text-black w-full sm:w-2/5 p-5 flex flex-col gap-4'>
      <ProgressBar btnState={btnState} />
      <div className="flex flex-col gap-1">
        <h3 className='text-xl text-[#222222] font-medium'>Personal info</h3>
      </div>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder='First and Last Name' required className='inputBorder' value={firstForm.name} onChange={(e)=> setFirstForm((prevState)=> ({...prevState, name : e.target.value}))} />
        <input type="text" placeholder='Email Address' required className='inputBorder' value={firstForm.email} onChange={(e)=> setFirstForm((prevState)=> ({...prevState, email: e.target.value}))}/>
        <input type="text" placeholder='Phone' required className='inputBorder' value={firstForm.phone} onChange={(e)=> setFirstForm((prevState)=> ({...prevState, phone: e.target.value}))}/>
        <input type="text" placeholder='Address' required className='inputBorder' value={firstForm.address} onChange={(e)=> setFirstForm((prevState)=> ({...prevState, address: e.target.value}))}/>
        <div className='flex flex-col gap-1'>
          <div>
            <label htmlFor="Gender" className='text-base text-[#222222] font-medium'>Gender</label>
          </div>
          <div className='flex gap-2'>
            <div className='flex gap-1 items-center' onClick={()=> setFirstForm((prevState)=> ({...prevState, isMale : true, isFemale : false}))}>
              <label htmlFor="male" className='text-sm text-[#222222] font-medium'>Male</label>
              <input type="radio" name="" id="male" checked={firstForm.isMale}/>
            </div>
            <div className='flex gap-1 items-center' onClick={()=> setFirstForm((prevState)=> ({...prevState, isMale: false,isFemale: true}))}>
              <label htmlFor="female" className='text-sm text-[#222222] font-medium'>Female</label>
              <input type="radio" name="" id="female" checked={firstForm.isFemale}/>
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
