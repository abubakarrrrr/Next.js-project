// import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
const ContactPage = () => {
    return (

<>
       <div className='grid lg:grid-cols-3 mt-10'>
            <div className=' border-stone-450 mt-5 shadow border text-center mx-3'>
                <h1 className='text-red-500 mt-3'><EmailIcon /></h1>
                <h1 className='font-bold my-3'>Email</h1>
                <p>Monday to Friday Expected <br /> response time: 72hours</p>
                <p className='my-3'>send Email</p>
            </div>
            <div className=' border-stone-450 mt-5 shadow border text-center mx-3'>
                <h1 className='text-red-500 mt-3'><VoiceChatIcon /></h1>
                <h1 className='font-bold my-3'>Live chat</h1>
                <p>Weekdays5: 9AM --- 6PM ET <br /> Weekdays5: 9AM --- 5PM ET</p>
                <p className='my-3'>chat now</p>

            </div>
            <div className=' border-stone-450 mt-5 shadow border text-center mx-3'>
                <h1 className='text-red-500 mt-3'><ChatIcon /></h1>
                <h1 className='font-bold my-3'>Community form</h1>
                <p>Monday to Friday Expected <br /> response time: 72hours</p>
                <p className='my-3'>Ask the Community</p>
            </div>

        </div>
        <h1 className='mt-16 text-center text-2xl'>We'd love hear <span className='text-red-500'> from you </span></h1>
        <form action="https://formspree.io/f/mwkgkqpb" method='POST' className='foem border-spacing-4 text-center  bg-gray-100 border border-stone-700 sm:w-4/5 md:w-1/2 lg:w-2/5 m-auto mt-4'>

<input type="text"  name=''   placeholder='enter your name' className='border border-stone-400  my-3 shadow w-4/5 h-10 text-center ' autoComplete='off' /><br />
<input type="email"  autoComplete='off'  name='email' placeholder=' enter your email' className='border  border-stone-400 my-3 shadow w-4/5 h-10 text-center' /><br />
<textarea name="text" id="" autoComplete='off' cols="30" rows="10" placeholder='message' className='border  border-stone-400  my-3 shadow w-4/5  '></textarea><br />
<button className='bg-red-500 rounded-2xl mb-3  text-white border shadow hover:bg-white hover:text-black p-3 ' >Send Message</button>
</form>


  
     


        </>
 
    )
}

export default ContactPage
