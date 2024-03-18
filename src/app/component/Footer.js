// import React from 'react'
'use client'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div>
        <div className='flex m-auto border lg:relative mt-5 lg:top-20 rounded-2xl  bg-white justify-between' style={{width:"90%"}}>
        <div className='text-black-400 ml-10 '>
        
<p className='pt-2'>Ready to get started? </p>
<p>Talk to us Today</p>
        </div>
        <div className='mt-50% mr-10'>
            <button className='bg-red-600 mt-3 rounded-2xl mb-3  text-white border shadow hover:bg-white hover:text-black p-3'>Get started</button>
        </div>
      </div>
    <div className='bg-black text-white sm:text-center'>
    <div className='mt-10 grid lg:grid-cols-4 gap-3 bg-black m-auto  text-white' style={{width:"90%"}}>
      <div className='   lg:pt-24'>
        <h1 className='text-2xl'>Muhammad Abubakar</h1>
        <p className='' style={{fontSize:'15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio hic vero culpa blanditiis. Quasi.</p>
      </div>
      <div className='   lg:pt-24'>
        <p>Subcribe to get importance updates</p>
        <input type="text" className='h-10 mt-3' placeholder='Your e-mail' />
        <br />
        <button className='bg-red-700 rounded-2xl  mt-2  text-white border shadow hover:bg-white hover:text-black p-3'>Subcribe</button>
      </div>
      <div className='   lg:pt-24'>
        <p>follow Us</p>
        <div className='flex justify-between -tracking-widest sm:text-center sm:m-auto pt-3 '>
        <h1 className='text-center' style={{width:"35px", height:'35px', border:'solid 2px white', borderRadius:'35px'}}><FacebookRoundedIcon className=' mb-4'></FacebookRoundedIcon></h1>
        <h1 className=' sm:m-auto sm:text-center' style={{width:"35px", height:'35px', border:'solid 2px white', borderRadius:'35px'}}>
<TwitterIcon className='mb-4 ml-1'></TwitterIcon>
        </h1>
        <h1 className='text-center' style={{width:"35px", height:'35px', border:'solid 2px white', borderRadius:'35px'}}><InstagramIcon className='mb-4'></InstagramIcon></h1>
        </div>
      </div>
      <div className='   lg:pt-24'>
        <a href="+92 3431427193" className=' no-underline text-white'>Call Us</a>
        <br />
        +92 3431427193  
      </div>
    </div>
    <h1><hr /></h1>
    <div className='flex m-auto justify-between pb-8'style={{width:"90%"}}>
        <div className='w-1/2'>
            @{new Date().getFullYear()}Mianabubakar All right Reserveed
        </div>
        <div className='w-1/2'>
            PRIVACY POLICY <br />
            TERMS & CONDITIONs
        </div>
    </div>
</div>
    </div>
  )
}

export default Footer
