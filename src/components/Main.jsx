import { useState } from "react"

const stylesImages = {
  0 :"-ml-[0%]",
  1 :"-ml-[100%]",
  2 :"-ml-[200%]",
  3 :"-ml-[300%]"
}

const Main = ({refProyects}) => {
  const [imageToShow, setImageToShow] = useState(0)


  const handleClickNextProyect = () => {
    if(imageToShow < 3){
      setImageToShow(imageToShow + 1)
    }else if(imageToShow == 3){
      setImageToShow(0)
    }
  }
  const handleClickPreviousProyect = () => {
    if(imageToShow > 0){
      setImageToShow(imageToShow - 1)
    }else if(imageToShow == 0){
      setImageToShow(2)
    }
  }


  const handleClickViewProyect =  (value) => {
        setImageToShow(value)
  }


  return (
    <main id="info_personal" className='relative  w-full h-[200vh] flex flex-col justify-between '>
        <article  id='about_me' className='h-full flex flex-col relative justify-center items-end  max-w-[1200px] mx-auto' >
            <section className='w-[70%] z-[1] grid gap-8 px-2 relative top-[-30px] min-[400px]:text-[20px] lg:w-[50%] lg:pr-10  '>
              
              <h2 className='font-bold text-[30px] md:text-[30px]' >Hola!</h2>
              <p className='text-[#c2c1c1] md:text-[30px] '>
              Actualmente me encuentro viviendo en Zapopan, Jal. México, tengo 25 años.<br />
              Una de las metas que tengo es aprender varios lenguajes de programación, actualemente manejo JS, React, HTML, CSS.
              Me gusta mucho desarrollar y plasmar mis ideas sobre cualquier sitio Web.
              </p>
              <section className='text-white text-[30px]'>
                <ul className='flex justify-around '>
                  <li className='md:text-[35px] flex justify-center items-center md:before:text-[25px] relative before:content-["Vite"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><img className="h-[30px] aspect-square object-contain" src="https://raw.githubusercontent.com/vitejs/vite/bfad16cd1365e578ce4adff30d805009c13b4fb4/docs/public/logo.svg" alt="" /></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["Javascript"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-javascript text-yellow-300' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["React"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-react text-blue-500' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["VSC"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-visual-studio text-blue-400' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["HTML"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-html5 text-red-800' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["CSS"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-css3 text-blue-600' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["Tailwind"] before:absolute before:-translate-x-[60%] lg:before:-translate-x-1/2 lg:before:left-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818] before:invisible hover:before:visible '><i className='bx bxl-tailwind-css text-cyan-300' ></i></li>
                </ul>
              </section>
            </section>
            <section className='absolute bottom-[20px] z-0 -translate-x-1/4 md:-translate-x-[35%] lg:-translate-x-[80%]'>
              <div id='photo_personal' className='rounded-full relative  border-2 border-red-600'>
                <img src="./bkg-section/elipse_solid_red.svg" alt="Imagen personal Jesus Antonio" />
                <div >
                  <img className="absolute bottom-0 rounded-full p-6 " src="./bkg-section/zyro-image.png" alt="Imagen personal Jesus Antonio" />
                </div>
              </div>

            </section>
        </article>
        <article ref={refProyects} id='proyects' className='h-full flex flex-col relative  items-center  justify-center max-w-[1200px] mx-auto'>
          <section className='w-[100%] sm:w-[80%] z-[1] flex flex-col  gap-8 px-2 relative lg:flex-row lg:w-full  '>
            <h2 className='font-bold text-[20px] md:text-[30px] ' >Mis últimos proyectos</h2>
            <section className="relative overflow-hidden max-sm:w-[300px]   lg:w-[500px] ">
              {/* Contenedor de proyectos */}
              <section className={`w-[400%] flex transition-all ${stylesImages[imageToShow]}  max-[380px]:h-[400px] max-sm:h-[550px] sm:h-[550px]  lg:h-[600px] `}>

                <div className='proyects grid gap-1 justify-center lg:items-center w-[calc(100%_/_4)] bg-white/40 rounded-lg py-2 text-center overflow-auto sm:grid-cols-2  items-center sm:px-[3%] '>
                  <div className="h-[300px] ">
                    <img className="rounded-[20px]  overflow-hidden mx-auto  h-full object-contain " src="./proyects/rick_morty.png" alt="Página Web de Rick and Morty" />
                  </div>
                  <section className="flex flex-col justify-start items-center gap-3">
                    <button className="duration-1000 grid justify-center items-center bg-gradient-to-r from-gray-600 to-[#10FFF1]/70 p-2 rounded-lg hover:from-gray-300 hover:to-[#10FFF1]/50 hover:text-black/40 font-semibold transition-colors">
                      <a href="https://rick-and-morty-api-jp.netlify.app/" target="_blank">
                        Visitar el sitio <i className='bx bxs-right-arrow'></i> 
                      </a>
                    </button>
                    <h3 className='font-bold' >Rick And Morty</h3>
                    <p className='text-[#c2c1c1] '>
                      Este proyecto se hizo con la finalidad de poder obtener las diferentes locaciones del univero de Rick And Morty; se utilizó React, versionamiento con Git y Github, Axios y para el diseño se utilizó Tailwind.
                    </p>
                  </section>
                </div>

                <div className='proyects grid gap-1 justify-center lg:items-center w-[calc(100%_/_4)] bg-white/40 rounded-lg py-2 text-center overflow-auto sm:grid-cols-2 items-center sm:px-[3%]'>
                  <div className="h-[300px] ">
                    <img className="rounded-[20px]  overflow-hidden mx-auto  h-full object-contain " src="./proyects/app_clima.png" alt="Página web del clima" />
                  </div>
                  <section className="flex flex-col justify-start items-center gap-3">
                    <button className="duration-1000 grid justify-center items-center bg-gradient-to-r from-gray-600 to-[#10FFF1]/70 p-2 rounded-lg hover:from-gray-300 hover:to-[#10FFF1]/50 hover:text-black/40 font-semibold transition-colors">
                      <a href="https://weatherapp-jp.netlify.app/" target="_blank">
                        Visitar el sitio <i className='bx bxs-right-arrow'></i> 
                      </a>
                    </button>
                    <h3 className='font-bold' >Weather App</h3>
                    <p className='text-[#c2c1c1]'>
                      Este proyecto tiene como finalidad el poder obtener el clima en tu ciudad y otras regiones del mundo, así como otros parámetros en tiempo exacto utilizando la API de OpenWeather, se utilizó React, versionamiento de Git y Gituhub, Axios y para el diseño Tailwind.
                    </p>
                  </section>
                </div>

                <div className='proyects grid gap-1 justify-center lg:items-center w-[calc(100%_/_4)] bg-white/40 rounded-lg py-2 text-center overflow-auto sm:grid-cols-2 items-center sm:px-[3%]'>
                  <div className="h-[300px] ">
                    <img className="rounded-[20px]  overflow-hidden mx-auto  h-full object-contain " src="./proyects/pokedex1.png" alt="Página web de Pokemon"/>
                  </div>
                  <section className="flex flex-col justify-start items-center gap-3">
                    <button className="duration-1000 grid justify-center items-center bg-gradient-to-r from-gray-600 to-[#10FFF1]/70 p-2 rounded-lg hover:from-gray-300 hover:to-[#10FFF1]/50 hover:text-black/40 font-semibold transition-colors">
                      <a href="https://apipokemon-v2-jp.netlify.app/pokedex" target="_blank">
                        Visitar el sitio <i className='bx bxs-right-arrow'></i> 
                      </a>
                    </button>
                    <h3 className='font-bold' >Pokédex</h3>
                    <p className='text-[#c2c1c1]'>
                      Este proyecto tiene la función de poder visualizar todos los pokemones que existen, así como buscar únicamente el de tú agrado y poder obtener más información acerca de ese Pokemon en específico, se utilizó React, Axios, versionamiento de Git y Github y para el diseño Tailwind.
                    </p>
                  </section>
                </div>

                <div className='proyects grid gap-1 justify-center lg:items-center w-[calc(100%_/_4)] bg-white/40 rounded-lg py-2 text-center overflow-auto sm:grid-cols-2 items-center sm:px-[3%]'>
                  <div className="h-[300px] ">
                    <img className="rounded-[20px]  overflow-hidden mx-auto  h-full object-contain " src="./proyects/rick_morty.png" alt="Página Web de Rick and Morty" />
                  </div>
                  <section className="flex flex-col justify-start items-center gap-3">
                    <button className="duration-1000 grid justify-center items-center bg-gradient-to-r from-gray-600 to-[#10FFF1]/70 p-2 rounded-lg hover:from-gray-300 hover:to-[#10FFF1]/50 hover:text-black/40 font-semibold transition-colors">
                      <a href="https://rick-and-morty-api-jp.netlify.app/" target="_blank">
                        Visitar el sitio <i className='bx bxs-right-arrow'></i> 
                      </a>
                    </button>
                    <h3 className='font-bold' >Rick And Morty</h3>
                    <p className='text-[#c2c1c1]'>
                      Este proyecto se hizo con la finalidad de poder obtener las diferentes locaciones del univero de Rick And Morty; se utilizó React, versionamiento con Git y Github, Axios y para el diseño se utilizó Tailwind.
                    </p>
                  </section>
                </div>

                
              </section>

            <button onClick={handleClickPreviousProyect} className="absolute top-[35%] sm:top-1/2 left-2  -translate-y-1/2 bg-[#10FFF1]/50 h-10 text-black text-[25px] hover:bg-[#10FFF1] aspect-square rounded-full my-auto "><i className='bx bx-chevron-left'></i></button> 
            <button onClick={handleClickNextProyect} className="absolute top-[35%] sm:top-1/2 right-2 -translate-y-1/2 bg-[#10FFF1]/50 h-10 text-black text-[25px] hover:bg-[#10FFF1] aspect-square rounded-full my-auto "><i className='bx bx-chevron-right'></i></button>
            
            <section className={`relative flex justify-center gap-10 h-auto  mt-5 transition-all`}>
              <button onClick={() => handleClickViewProyect(0)} className={`h-5 aspect-square ${imageToShow == 0 && "bg-[#10FFF1]" } rounded-full border-2 border-gray-600`}></button>
              <button onClick={() => handleClickViewProyect(1)} className={`h-5 aspect-square ${imageToShow == 1 && "bg-[#10FFF1]" } rounded-full border-2 border-gray-600`}></button>
              <button onClick={() => handleClickViewProyect(2)} className={`h-5 aspect-square ${imageToShow == 2 && "bg-[#10FFF1]" } rounded-full border-2 border-gray-600`}></button>
              <button onClick={() => handleClickViewProyect(3)} className={`h-5 aspect-square ${imageToShow == 3 && "bg-[#10FFF1]" } rounded-full border-2 border-gray-600`}></button>

            </section>
            </section>
          </section>
          <section className='absolute bottom-[20px] -translate-x-1/4 md:-translate-x-[35%] lg:-translate-x-[60%] lg:bottom-[20%]'>
            <div className='bg-[url("./bkg-section/triangulo-blur-blue.svg")] bg-cover bg-center' >
              <img className='blur-lg ' src="./bkg-section/triangulo-solid-blue.svg" alt="" />
            </div>
          </section>
        </article>
      </main>
  )
}

export default Main