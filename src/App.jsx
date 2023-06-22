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
        setPrincipalColor("#0C08B1")
      }else if(1 > proyectsH  ){
        setPrincipalColor("#10FFF1")
      }

    }

    window.addEventListener('scroll' ,handleScroll)


  }, [])

  



  return (
    <div id='body' className={`min-h-screen  text-white bg-black `}>
      <header className={`fixed z-40 top-0  ${getMenu ? "bg-[#181818]" : "bg-black"} h-[84px] md:h-[122px] w-full flex justify-center`}>
      <section className={`absolute flex top-[84px] w-full h-screen justify-center bg-[#181818] md:top-[122px]  transition-all ${getMenu ? "translate-x-0" : "translate-x-full invisible"}  `}>
            <section className='flex flex-col justify-around text-center w-[60%] text-[35px] font-semibold transition-colors md:w-[70%] md:text-[40px] '>
              <section className='text-start grid gap-5 md:h-[30%]'>
                <div style={{color: principalColor }} className={` list_menu`} ><a href="#info_personal">Acerca de mi</a></div>
                <div style={{color: principalColor }} className={` list_menu`} ><a href="#proyects">Proyectos</a></div>
                <div style={{color: principalColor }} className={` list_menu`} ><a href="#footer">Contacto</a></div>
              </section>
              <section className='flex justify-around '>
                <div><a href="#" ><i style={{color: principalColor }} className={`bx bxl-linkedin-square  element_menu footer_links`}></i></a></div>
                <div><a href="#"><i style={{color: principalColor }} className={`bx bxl-github  element_menu footer_links`}></i></a></div>
                <div><a href="#"><i style={{color: principalColor }} className={`bx bxl-instagram-alt  element_menu footer_links`}></i></a></div>
              </section>
            </section>
        </section>
        <nav className={`flex justify-between fixed w-screen transition-colors items-center text-end  `}>
          <div>
            <a href="#">
              <img className='md:w-[200px]' src="./images/logo.svg" alt="Logo Academlo" />
            </a>
          </div>
          <h1 onClick={handleMenu} style={{color: principalColor}} className={`min-[400px]:text-[25px] cursor-pointer px-4 font-bold  text-[20px] hover:drop-shadow-2xl md:text-[30px] md:p-4`} id='name'>
            Jesús<br/>Pichardo
          </h1>
          
          <section className='fixed bottom-[45px] right-[45px] font-bold text-xl invisible md:visible '>
            <h2>Web Designer</h2>
            <p>Back <span style={{color: principalColor }}>End</span> </p>
          </section>
        </nav>
      </header>
      <Main refProyects={refProyects}/>
      <Footer/>
    </div>
  )
}

export default App