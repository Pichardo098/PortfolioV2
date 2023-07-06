import { useEffect, useRef, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {

  const [getMenu, setGetMenu] = useState(false)
  const [principalColor, setPrincipalColor] = useState("#FF2B51")
  const refProyects = useRef()

  
  const handleMenu = () => {
    setGetMenu(!getMenu)
  }

  useEffect(() => {
    const handleScroll = () => {
      const proyects = refProyects.current.getBoundingClientRect()
      
      const proyectsY = proyects.y
      const proyectsH = -proyects.height

      if(proyectsY > 0){
        setPrincipalColor("#FF2B51")
      }else if(proyectsY == proyectsH ){
        setPrincipalColor("#8D8BFF")
      }else if(1 > proyectsH  ){
        setPrincipalColor("#10FFF1")
      }

    }

    window.addEventListener('scroll' ,handleScroll)


  }, [])

  



  return (
    <div id='body' className={`min-h-screen  text-white bg-black relative `}>
      <header className={`fixed z-10 top-0  ${getMenu ? "bg-[#181818]" : "bg-black"} h-[84px] md:h-[122px] w-full flex justify-center lg:bg-black`}>
        <section className={`absolute flex top-[84px] w-full h-screen justify-center bg-[#181818] md:top-[122px]  transition-all ${getMenu ? "translate-x-0" : "translate-x-full invisible"}   lg:translate-x-0 lg:invisible lg:w-full lg:min-h-screen lg:block `}>
            <section className='flex flex-col justify-around text-center w-[60%] text-[35px] font-semibold transition-colors md:w-[70%] md:text-[40px] '>


              <section className='text-start grid gap-5 md:h-[30%] lg:fixed lg:visible lg:bottom-[60%] lg:right-[-200px] lg:rotate-90 lg:flex lg:text-[30px] lg:h-auto  '>
                <div style={{color: principalColor }} className={` list_menu hover:scale-105  `} ><a href="#info_personal">Acerca de mi</a></div>
                <div style={{color: principalColor }} className={` list_menu hover:scale-105 `} ><a href="#proyects">Proyectos</a></div>
                <div style={{color: principalColor }} className={` list_menu hover:scale-105 `} ><a href="#footer">Contacto</a></div>
              </section>

              <section className='flex justify-around lg:fixed  lg:visible lg:bottom-[155px] lg:right-[20px] lg:gap-4'>
                <section className='flex lg:gap-4 gap-3 justify-around'>
                <div className='relative'>
                  <a href="/cv/jesusPichardo_cv.pdf" download>
                    <i style={{color: principalColor }} className='bx bxs-file-pdf hover:scale-105'></i>
                  </a>
                  <span id='downloadCv' style={{color: principalColor }} className='absolute text-[15px] left-1/2 -translate-x-1/2 -top-5 -translate-y-1/2 bg-[#181818] py-[3px] px-2 rounded-md select-none'>Descargar CV</span>
                </div>
                <div><a href="https://www.linkedin.com/in/jes%C3%BAs-antonio-pichardo-r%C3%ADos-464981275/" target='_blank' ><i style={{color: principalColor }} className={`bx bxl-linkedin-square  element_menu footer_links hover:scale-110`}></i></a></div>
                <div><a href="https://github.com/Pichardo098" target='_blank' ><i style={{color: principalColor }} className={`bx bxl-github  element_menu footer_links hover:scale-110`}></i></a></div>
                <div><a href="https://www.instagram.com/antoniopich98/" target='_blank'><i style={{color: principalColor }} className={`bx bxl-instagram-alt  element_menu footer_links hover:scale-110`}></i></a></div>
                </section>
                {/* <a class="fab fa-whatsapp" href="https://wa.me/523313569305/?text=Hola,%20quiero%20saber%20más%20sobre%20tus%20servicios" target="_blank">WP</a> */}
              </section>
            </section>
        </section>
        <nav className={`flex justify-between fixed w-screen transition-colors items-center text-end  `}>
          <div>
            <a href="#">
              <img className='md:w-[200px]' src="./images/logo.svg" alt="Logo Academlo" />
            </a>
          </div>
          <h1 onClick={handleMenu} style={{color: principalColor}} className={`min-[400px]:text-[25px] cursor-pointer px-4 font-bold  text-[20px] hover:drop-shadow-2xl md:text-[30px] md:p-4 hover:scale-110 lg:hover:scale-100 lg:cursor-auto`} id='name'>
            Jesús<br/>Pichardo
          </h1>
          
          <section className='fixed bottom-[45px] inline-block w-[220px]  md:right-[45px] font-bold text-xl invisible md:visible lg:ring-offset-inherit lg:left-[45px] lg:text-start lg:text-[25px] select-none '>
            <h2 className='inline-block h-auto' >Web Designer</h2> <br />
            <p className='inline-block h-auto'>Back <span style={{color: principalColor }}>End</span> </p>
          </section>
        </nav>
      </header>
      <Main refProyects={refProyects}/>
      <Footer/>
    </div>
  )
}

export default App
