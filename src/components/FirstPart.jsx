"use client"
import { useState } from "react";
import Button from "./Button";

const FirstPart = () => {
  const [firstFormData,setFirstFormData] = useState({
    names : '',
    email : '',
    phone : '',
    address : '',
    isMale : false,
    isFemale : false,
    file : '',
  })
  const [errorMessage,setErrorMessage] = useState("")

  return (
    <div className='text-black w-full py-5 flex flex-col gap-4'>
      <div className="flex flex-col gap-1">
        <h3 className='text-xl text-[#222222] font-medium'>Personal info</h3>
      </div>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder='First and Last Name' required className='inputBorder' value={firstFormData.names} onChange={(e)=> setFirstFormData((prevState)=> ({...prevState,names: e.target.value}))} />
        <input type="text" placeholder='Email Address' required className='inputBorder' value={firstFormData.email} onChange={(e)=> setFirstFormData((prevState)=> ({...prevState, email: e.target.value}))}/>
        <input type="text" placeholder='Phone' required className='inputBorder' value={firstFormData.phone} onChange={(e)=> setFirstFormData((prevState)=> ({...prevState, phone: e.target.value}))}/>
        <input type="text" placeholder='Address' required className='inputBorder' value={firstFormData.address} onChange={(e)=> setFirstFormData((prevState)=> ({...prevState, address: e.target.value}))}/>
        <div className='flex flex-col gap-1'>
          <div>
            <label htmlFor="Gender" className='text-base text-[#222222] font-medium'>Gender</label>
          </div>
          <div className='flex gap-2'>
            <div className='flex gap-1 items-center' onClick={(e)=> setFirstFormData((prevState)=> ({...prevState, isMale: true, isFemale: false}))}>
              <label htmlFor="male" className='text-sm text-[#222222] font-medium'>Male</label>
              <input type="radio" name="" id="male" checked={firstFormData.isMale}/>
            </div>
            <div className='flex gap-1 items-center' onClick={(e)=> setFirstFormData((prevState)=> ({...prevState, isMale: false, isFemale: true}))}>
              <label htmlFor="female" className='text-sm text-[#222222] font-medium'>Female</label>
              <input type="radio" name="" id="female" checked={firstFormData.isFemale}/>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='font-medium text-base text-[#222222]'>Upload Resume</h4>
          <p className='text-sm font-medium text-[#222222]'>(File accepted: .pdf, .doc/docx - Max file size: 150KB for demo limit)</p>
          <div className='p-2 border border-[#DDDDDD] rounded'>
            <div className='relative h-9 flex items-center'>
              <input type="file" id="myFile" name="filename" style={{color:'#999999',fontSize:'14px', fontWeight:'400'}} value={firstFormData.file} onChange={(e)=> setFirstFormData((prevState)=> ({...prevState, file: e.target.value}))} />
            </div>
          </div>
        </div>
        <div className="bg-[#F0F0F0] w-full h-0.5 rounded-lg mt-5 mb-2"></div>
      </form>
    </div>
  )
}

export default FirstPart






































// "use client"
// import { useState } from 'react'
// import ProgressBar from './ProgressBar'
// import SubmitButton from './SubmitButton'

// const FirstPart = ({,set}) => {
//   const [firstForm,setFirstForm] = useState({
//     name : '',
//     email : '',
//     phone : '',
//     address : '',
//     isMale : false,
//     isFemale : false,
//     file : '',
//   })
//   console.log(firstForm.file)
//   return (
//     <div className='text-black w-full sm:w-2/5 p-5 flex flex-col gap-4'>
//       <ProgressBar ={} />
//       <div className="flex flex-col gap-1">
//         <h3 className='text-xl text-[#222222] font-medium'>Personal info</h3>
//       </div>
//       <form className="flex flex-col gap-3">
//         <input type="text" placeholder='First and Last Name' required className='inputBorder' value={firstForm.name} onChange={(e)=> setFirstForm((prevState)=> ({...prevState, name : e.target.value}))} />
//         <input type="text" placeholder='Email Address' required className='inputBorder' value={firstForm.email} onChange={(e)=> setFirstForm((prevState)=> ({...prevState, email: e.target.value}))}/>
//         <input type="text" placeholder='Phone' required className='inputBorder' value={firstForm.phone} onChange={(e)=> setFirstForm((prevState)=> ({...prevState, phone: e.target.value}))}/>
//         <input type="text" placeholder='Address' required className='inputBorder' value={firstForm.address} onChange={(e)=> setFirstForm((prevState)=> ({...prevState, address: e.target.value}))}/>
//         <div className='flex flex-col gap-1'>
//           <div>
//             <label htmlFor="Gender" className='text-base text-[#222222] font-medium'>Gender</label>
//           </div>
//           <div className='flex gap-2'>
//             <div className='flex gap-1 items-center' onClick={()=> setFirstForm((prevState)=> ({...prevState, isMale : true, isFemale : false}))}>
//               <label htmlFor="male" className='text-sm text-[#222222] font-medium'>Male</label>
//               <input type="radio" name="" id="male" checked={firstForm.isMale}/>
//             </div>
//             <div className='flex gap-1 items-center' onClick={()=> setFirstForm((prevState)=> ({...prevState, isMale: false,isFemale: true}))}>
//               <label htmlFor="female" className='text-sm text-[#222222] font-medium'>Female</label>
//               <input type="radio" name="" id="female" checked={firstForm.isFemale}/>
//             </div>
//           </div>
//         </div>
//         <div className='flex flex-col gap-2'>
//           <h4 className='font-medium text-base text-[#222222]'>Upload Resume</h4>
//           <p className='text-sm font-medium text-[#222222]'>(File accepted: .pdf, .doc/docx - Max file size: 150KB for demo limit)</p>
//           <div className='p-2 border border-[#DDDDDD] rounded'>
//             <input type="file" id="myFile" name="filename" style={{color:'#999999',fontSize:'14px', fontWeight:'400'}} value={firstForm.file} onChange={(e)=> setFirstForm((prevState)=>({...prevState, file: e.target.value}))}/>
//           </div>
//         </div>
//         <div className="bg-[#F0F0F0] w-full h-0.5 rounded-lg mt-5 mb-2"></div>
//         <SubmitButton set={set} ={} />
//       </form>
//     </div>
//   )
// }

// export default FirstPart
