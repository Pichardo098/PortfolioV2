const Footer = () => {


  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.currentTarget.name.value
    const email = e.currentTarget.email.value
    const message = e.currentTarget.message.value

    console.log({name, email, message})

    e.currentTarget.reset()

  }
  
  return (
    <footer id="footer" className='relative  w-full h-[100vh] flex flex-col justify-center pb-4 items-center max-w-[1200px] mx-auto ' >
        <section className='w-[90%] h-[80%] z-10 flex flex-col justify-center gap-8 px-2 relative top-[50px]  min-[400px]:text-[20px] '>
        <h2 className='font-bold text-[20px] md:text-[30px]' >Hablemos de negocios</h2>
          <form onSubmit={handleSubmit} className='bg-white/20  w-full  rounded-2xl md:text-[25px] ' >
            <section className='h-[100%] w-[80%] mx-auto py-5 flex flex-col justify-center gap-5'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name" >Nombre: <span className="text-red-500 font-bold">*</span> </label>
              <input required className='bg-[#494993] p-2 rounded-lg text-white outline-none ' type="text" id="name"/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="email">Email: <span className="text-red-500 font-bold">*</span> </label>
              <input required className='bg-[#494993] p-2 rounded-lg text-white outline-none ' type="email" id="email"/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="message" >Mensaje:</label>
              <textarea id="message" rows="6" className='bg-[#494993] rounded-lg text-white outline-none p-2'></textarea>
            </div>
            <button className="bg-[#494993] rounded-lg py-[5px]">Enviar datos</button>
            </section>
            

          </form>

        </section>
        <section className='absolute bottom-[20px] z-0 -translate-x-1/4 '>
          <div id='box_blue' >
            <img className=' bg-[url("./bkg-section/cuadrado-blur.svg")] bg-cover ' src="./bkg-section/cuadrado-solid.svg" alt="Fondo de forma cuadrada color azul" />
          </div>

        </section>
      </footer>
  )
}

export default Footer