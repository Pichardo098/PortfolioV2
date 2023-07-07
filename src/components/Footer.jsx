import axios from "axios"

import { useState } from "react"
import ModalFormSucces from "./ModalFormSucces"
import ModalFormErr from "./ModalFormErr"

const Footer = () => {

  const [showModalSucces, setShowModalSucces] = useState(false)
  const [showModalErr, setShowModalErr] = useState(false)

  const [showForm, setShowForm] = useState(false)
  const [showContact, setShowContact] = useState(true)

  const handleClickShowForm = () => {
    if(showContact) {
      setShowContact(false)
      setTimeout(() => {
        setShowForm(!showForm)
      }, "1000");
    }else{
      setShowForm(!showForm)
    }
  }
  const handleClickShowContact = () => {
    if(showForm) {
      setShowForm(false)
      setTimeout(() => {
        setShowContact(!showContact)
      }, "1000");
    }else{
      setShowContact(!showContact)
    }
   
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.currentTarget.name.value
    const email = e.currentTarget.email.value
    const message = e.currentTarget.message.value

    const formData = {
      name,
      email,
      message
    }

    const BASE_URL =  "https://formsubmit.co/ajax/"
    const EMAIL = "jesuspir98@gmail.com"

    axios.post(`${BASE_URL}${EMAIL}`, formData)
      .then(()=> setShowModalSucces(!showModalSucces))
      .catch(()=> setShowModalErr(!showModalErr))

    

    e.currentTarget.reset()

  }
  
  return (
    <footer id="footer" className='relative  w-full h-[100vh] flex flex-col justify-center  items-center max-w-[1200px] mx-auto ' >
        <section className=' z-[1] flex flex-col justify-center gap-3  px-2 relative top-[50px]  min-[400px]:text-[20px] sm:grid sm:grid-cols-[auto,1fr] lg:w-[80%]'>
          <h2 className='font-bold text-[20px] z-[1] md:text-[30px] text-center sm:col-span-2' >Hablemos de negocios</h2>

          {/* Información contacto */}
          <section className="flex flex-col gap-3 ">
            <button onClick={handleClickShowContact} className="h-auto  text-[18px] bg-[#8D8BFF]/50  rounded-md sm:hidden px-2 flex items-center justify-around">
              ¿Deseas contactarme de forma directa?
              <i className={`bx bx-chevron-down ${showContact && "-rotate-180"} duration-1000 transition-all font-bold`}></i>
            </button>
            <section className={`grid grid-cols-[repeat(auto-fill,180px)] sm:grid-cols-[repeat(auto-fill,220px)] justify-center items-center sm:max-h-[1000px] ${showContact ?  "max-h-[500px]" : "max-h-[0px]"} gap-3 overflow-hidden transition-all duration-1000 mx-4 `}>
              {/* Whatsapp */}
              <article className="h-[100px] sm:h-[150px] transition-all duration-500 hover:shadow-inner p-3 hover:shadow-white/60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/60  to-[#8D8BFF]/60 rounded-lg flex flex-col justify-center items-center gap-2">
                <h3 className="text-[#25D366] sm:text-[20px]">Whatsapp</h3>
                <span className="text-[15px] " >
                  <a className="bg-[#25D366]/70  hover:text-[#25D366]/70 hover:bg-white/40 transition-colors flex duration-1000  px-2 py-2 lg:px-3 lg:py-3 lg:text-2xl rounded-full sm:text-[20px]" href="https://wa.me/523313569305/?text=Hola,%20quiero%20saber%20más%20sobre%20tus%20servicios" target="_blank">
                  <i className='bx bxl-whatsapp  ' ></i>
                  </a>
                </span>
              </article>
              <article className="h-[100px] sm:h-[150px] transition-all duration-500 hover:shadow-inner p-3 hover:shadow-white/60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/60  to-[#8D8BFF]/60 rounded-lg flex flex-col justify-center items-center gap-2">
                <h3 className="flex items-center gap-3 sm:text-[20px]" >
                  Tel <a href="tel:+523313569305"><i className='bx bx-phone bg-white/40 rounded-full p-[4px] hover:bg-white/70 hover:text-black transition-colors duration-1000' ></i></a> 
                </h3>
                <span className="text-[15px] font-semibold sm:text-[20px]">+52 3313569305</span>
              </article>
              <article className="h-[100px] sm:h-[150px] transition-all duration-500 hover:shadow-inner p-3 hover:shadow-white/60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/60  to-[#8D8BFF]/60 rounded-lg flex flex-col justify-center items-center">
                <h3 className="flex items-center gap-3 sm:text-[20px]">Correo 
                  <a className="bg-white/40 rounded-full hover:bg-white/70 transition-colors duration-1000 px-[4px] flex justify-center items-center py-1" href="mailto:jesuspir98@gmail.com"><i className='bx bx-envelope  bg-gradient-to-r from-blue-600 via-red-600 to-green-700 text-transparent bg-clip-text' ></i></a> 
                </h3>
                <span className="text-[15px] font-semibold sm:text-[20px]"> jesuspir98@gmail.com</span>
              </article>
            </section>
          </section>

          {/* Formulario */}
          <section className="flex flex-col gap-3">
            <button onClick={handleClickShowForm} className="h-auto bg-[#8D8BFF]/50 rounded-md px-2 text-[18px] sm:hidden flex justify-around items-center">
              ¿ O prefieres enviar tus datos?
              <i className={`bx bx-chevron-down ${showForm && "-rotate-180" } transition-all duration-1000 font-bold `} ></i>
            </button>
            <form onSubmit={handleSubmit} action="https://formsubmit.co/jesuspir98@gmail.com" method="POST" className={`bg-white/20  w-full lg:w-[600px] text-[15px] rounded-2xl md:text-[25px]  overflow-hidden sm:max-h-[1000px] sm:w-[400px] ${showForm ?  "max-h-[430px]" : "max-h-[0px]"} transition-all duration-1000 `}>
              <section className=' w-[80%] lg:w-90% mx-auto py-5 flex flex-col justify-center gap-2'>
              <h3 >Campos obligatorios <span className="text-red-500">*</span> </h3>
              <div className='flex flex-col gap-2'>
                <label htmlFor="name" >Nombre: <span className="text-red-500 font-bold">*</span> </label>
                <input required className='bg-[#8D8BFF]/60 p-2 rounded-lg text-white outline-none ' type="text" id="name"/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email: <span className="text-red-500 font-bold">*</span> </label>
                <input required className='bg-[#8D8BFF]/60 p-2 rounded-lg text-white outline-none ' type="email" id="email"/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="message" >Mensaje:</label>
                <textarea id="message" rows="6" className='bg-[#8D8BFF]/60 rounded-lg text-white outline-none p-1'></textarea>
              </div>
              <button className="bg-[#8D8BFF]/60 rounded-lg py-[5px] w-[50%] self-end">Enviar datos</button>
              </section>
            </form>
          </section>

        </section>
        <section className='absolute bottom-[20px] z-0 -translate-x-1/4  md:-translate-x-[35%] lg:-translate-x-full lg:bottom-[10%]'>
          <div id='box_blue' >
            <img className=' bg-[url("./bkg-section/cuadrado-blur.svg")] bg-cover ' src="./bkg-section/cuadrado-solid.svg" alt="Fondo de forma cuadrada color azul" />
          </div>

        </section>
        <ModalFormSucces showModalSucces={showModalSucces} setShowModalSucces={setShowModalSucces}/>
        <ModalFormErr setShowModalErr={setShowModalErr} showModalErr={showModalErr} />
      </footer>
  )
}

export default Footer