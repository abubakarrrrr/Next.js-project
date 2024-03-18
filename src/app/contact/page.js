import ContactPage from "../component/ContactPage"


const contact = () => {
  return (
    <>
    <br /><br /><br /><br />
    <div className="w-4/5 m-auto ">
      <h1 className='text-center my-3    text-gray-400 text-3xl font-bold'>Contact Us </h1>
      <ContactPage />
    </div>

    <h1 className="mt-16"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274330387!2d74.00471844300726!3d31.483103656420948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1704270760104!5m2!1sen!2s" width="100%" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></h1>
    </>
  )
}

export default contact
