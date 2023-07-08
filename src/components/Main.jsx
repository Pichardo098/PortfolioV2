import { useState } from "react"

const stylesImages = {
  0 :"-ml-[0%]",
  1 :"-ml-[100%]",
  2 :"-ml-[200%]",
  3 :"-ml-[300%]"
}

const Main = () => {
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
    <main id="info_personal" className='relative  w-full h-[400vh] flex flex-col justify-between '>
        {/* Presentación  */}
        <article  id='presentation' className='h-full flex flex-col relative justify-center items-end  max-w-[1200px] mx-auto' >
            <section className='w-[70%] z-[1] grid gap-8 px-2 relative top-[-30px] min-[400px]:text-[20px] lg:w-[50%] lg:pr-10 sm:w-[60%] '>
              
              <h2 className='font-bold text-[30px] md:text-[35px] lg:text-[40px] ' >Hola!</h2>
              <p className='text-[#c2c1c1] md:text-[35px] '>
                Soy Jesús Pichardo, desarrollador Web Front-end, amante de la tecnología.

              </p>
              <section className="flex flex-col  ">
                <a href="#proyects" className="max-w-max btn_ref md:text-[30px]">Ver proyectos 
                </a>
                <hr  className="underline "/>
                <a href="#about_me" className="max-w-max btn_ref2 md:text-[30px]">Saber más acerca de mí 
                </a>
                <hr  className="underline2 "/>
              </section>
              <section className='text-white text-[30px]'>
                <ul className='flex justify-around '>
                  <li className='md:text-[35px] flex justify-center items-center md:before:text-[25px] relative before:content-["Vite"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><img className="h-[30px] aspect-square object-contain select-none" src="https://raw.githubusercontent.com/vitejs/vite/bfad16cd1365e578ce4adff30d805009c13b4fb4/docs/public/logo.svg" alt="" /></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["Javascript"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-javascript text-yellow-300' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["React"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-react text-blue-500' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["VSC"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-visual-studio text-blue-400' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["HTML"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-html5 text-red-800' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["CSS"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-css3 text-blue-600' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["Tailwind"] before:absolute before:-translate-x-[60%] lg:before:-translate-x-1/2 lg:before:left-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818] before:invisible hover:before:visible '><i className='bx bxl-tailwind-css text-cyan-300' ></i></li>
                </ul>
              </section>
            </section>
            <section className='absolute bottom-[20px] z-0 -translate-x-1/4 md:-translate-x-[35%] lg:-translate-x-[80%] select-none'>
              <div id='photo_personal' className='rounded-full relative  border-2 border-red-600'>
                <img src="./bkg-section/elipse_solid_red.svg" alt="Imagen personal Jesus Antonio" />
                <div >
                  <img className="absolute bottom-0 rounded-full p-6 " src="./bkg-section/zyro-image.png" alt="Imagen personal Jesus Antonio" />
                </div>
              </div>

            </section>
        </article>
        {/* About me */}
        <article id='about_me' className='h-full flex flex-col relative justify-center items-start  max-w-[1200px] mx-auto overflow-hidden lg:overflow-visible' >
            <section className='w-[70%] z-[1] grid gap-8 px-2 relative pl-6  min-[400px]:text-[20px]  lg:w-[50%] lg:pr-10  '>
              <h2 className="ont-bold text-[30px] md:text-[35px] ">Acerca de mí</h2>
              <p className='text-[#c2c1c1] md:text-[30px] '>
                <span className="font-bold text-white">A</span>ctualmente me encuentro viviendo en Zapopan, Jal. México, tengo 25 años.<br />
                <span className="font-bold text-white">U</span>na de las metas que tengo es dominar distintos lenguajes de programación, actualemente trabajo con JS, React, HTML, CSS. <br />
                <span className="font-bold text-white">M</span>e gusta mucho desarrollar y plasmar mis ideas sobre cualquier sitio Web.
                <br /><br />
                <span className="font-bold text-white">M</span>e considero una persona amigable y responsable dentro y fuera del ámbito laboral, me gusta expresar mis ideas así como respetar los diferentes puntos de vista que existen.
              </p>


            </section>
            <section className='absolute bottom-[35px] right-0 z-0 translate-x-1/4 md:translate-x-[35%] lg:translate-x-1/4 '>
              <div  className='rounded-full relative h-[370px] sm:h-[550px] lg:h-[550px] aspect-square border-[20px] md:border-[30px] shadow-[0_0px_40px_5px_rgba(0,0,0,0.3)] shadow-[#194d33] border-[#278757] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black  to-[#194d33]/40'>
                
              </div>
            </section>
        </article>
        {/* Habilidades */}
        <article  id='skills' className='h-full flex flex-col relative justify-center items-end lg:items-center  max-w-[1200px] mx-auto' >
            <section className='w-[100%] z-[1] grid gap-8 px-2 relative top-[-30px] min-[400px]:text-[20px] lg:w-[50%] lg:pr-10   '>
              <h2 className='font-bold text-[30px] md:text-[35px] ' >Habilidades</h2>
              <section className="w-[300px] flex flex-col gap-6 sm:w-[500px] lg:w-[600px]">
                <article className="flex flex-col gap-1">
                  <section className="flex justify-between sm:text-[25px]  ">
                    <h4 >React con Vite</h4>
                    <span>80%</span>
                  </section>
                  <div className="h-5 sm:h-10 w-full bg-white/50 rounded-md overflow-hidden">
                    <hr className="w-[80%] border-none h-full bg-[#5300eb]/60 rounded-md"/>
                  </div>
                </article>
                <article className="flex flex-col gap-1">
                  <section className="flex justify-between sm:text-[25px]">
                    <h4>Javascript</h4>
                    <span>85%</span>
                  </section>
                  <div className="h-5 sm:h-10 w-full bg-white/50 rounded-md overflow-hidden">
                    <hr className="w-[85%] border-none h-full bg-[#5300eb]/60 rounded-md"/>
                  </div>
                </article>
                <article className="flex flex-col gap-1">
                  <section className="flex justify-between sm:text-[25px]">
                    <h4>HTML</h4>
                    <span>95%</span>
                  </section>
                  <div className="h-5 sm:h-10 w-full bg-white/50 rounded-md overflow-hidden">
                    <hr className="w-[95%] border-none h-full bg-[#5300eb]/60 rounded-md"/>
                  </div>
                </article>
                <article className="flex flex-col gap-1">
                  <section className="flex justify-between sm:text-[25px]">
                    <h4>CSS</h4>
                    <span>90%</span>
                  </section>
                  <div className="h-5 sm:h-10 w-full bg-white/50 rounded-md overflow-hidden">
                    <hr className="w-[90%] border-none h-full bg-[#5300eb]/60 rounded-md"/>
                  </div>
                </article>
                <article className="flex flex-col gap-1 sm:text-[25px]">
                  <section className="flex justify-between">
                    <h4>Tailwind</h4>
                    <span>90%</span>
                  </section>
                  <div className="h-5 sm:h-10 w-full bg-white/50 rounded-md overflow-hidden">
                    <hr className="w-[90%] border-none h-full bg-[#5300eb]/60 rounded-md"/>
                  </div>
                </article>

              </section>
            </section>
            <section className='absolute bottom-[35px] right-0 z-0 -translate-x-1/4 md:-translate-x-[35%] lg:-translate-x-full select-none '>
              <div  className=' select-none rounded-full relative h-[370px] sm:h-[550px] lg:h-[550px] aspect-square border-[20px] md:border-[30px] shadow-[0_0px_40px_5px_rgba(0,0,0,0.3)] shadow-[#5300eb] border-[#5300EB] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black  to-[#5300eb]/40'>
                
              </div>
            </section>
        </article>

        {/* Proyectos */}
        <article  id='proyects' className='h-full flex flex-col relative  items-center  justify-center max-w-[1200px] mx-auto'>
          <section className='w-[100%] sm:w-[80%] z-[1] flex flex-col  gap-8 px-2 relative lg:flex-col lg:w-full   '>
            <h2 className='font-bold text-[20px] md:text-[30px] ' >Mis últimos proyectos</h2>
            <section className="relative overflow-hidden max-sm:w-[300px]   lg:w-[600px] ">
              {/* Contenedor de proyectos */}
              <section className={`w-[400%] flex transition-all ${stylesImages[imageToShow]}  max-[380px]:h-[400px] max-sm:h-[550px] sm:h-[550px]  lg:h-[500px] `}>

                <div className='proyects grid gap-1 justify-center lg:items-center w-[calc(100%_/_4)] bg-white/30 rounded-lg py-2 text-center overflow-auto sm:grid-cols-2  items-center sm:px-[3%] '>
                  <div className="h-[300px] ">
                    <img className="rounded-[20px]  overflow-hidden mx-auto  h-full object-contain " src="./proyects/ecommerce.png" alt="Página Web de E-commerce" />
                  </div>
                  <section className="flex flex-col justify-start items-center gap-3">
                    <button className="duration-1000 grid justify-center items-center bg-gradient-to-r from-gray-600 to-[#10FFF1]/70 p-2 rounded-lg hover:from-gray-300 hover:to-[#10FFF1]/50 hover:text-black/40 font-semibold transition-colors">
                      <a href="https://ecommerce-cart-jp.netlify.app" target="_blank">
                        Visitar el sitio <i className='bx bxs-right-arrow'></i> 
                      </a>
                    </button>
                    <h3 className='font-bold' >E-commerce</h3>
                    <p className='text-[#c2c1c1] max-sm:px-6 '>
                      Este proyecto se realizó con React y Vite, así como JS, Axios, HTML y CSS/Tailwind. <br />
                      El objetivo de este proyecto es representar en lo mayor posible el trabajo real que se tiene que hacer en un E-commerce. <br />
                      Uno de los retos que tuve en este proyecto fue el manejo de React-Router y el tema de los estados Globales, ya que al trabajar en diferentes páginas fue mucho más sencillo hacerlo de esa manera, sin embargo, al principio fue un poco dificl de entender.
                    </p>
                  </section>
                </div>

                <div className='proyects grid gap-1 justify-center lg:items-center w-[calc(100%_/_4)] bg-white/30 rounded-lg py-2 text-center overflow-auto sm:grid-cols-2 items-center sm:px-[3%]'>
                  <div className="h-[300px] ">
                    <img className="rounded-[10px]  overflow-hidden mx-auto  h-full object-contain " src="./proyects/pokedex1.png" alt="Página web de Pokemon"/>
                  </div>
                  <section className="flex flex-col justify-start items-center gap-3">
                    <button className="duration-1000 grid justify-center items-center bg-gradient-to-r from-gray-600 to-[#10FFF1]/70 p-2 rounded-lg hover:from-gray-300 hover:to-[#10FFF1]/50 hover:text-black/40 font-semibold transition-colors">
                      <a href="https://apipokemon-v2-jp.netlify.app/pokedex" target="_blank">
                        Visitar el sitio <i className='bx bxs-right-arrow'></i> 
                      </a>
                    </button>
                    <h3 className='font-bold' >Pokédex</h3>
                    <p className='text-[#c2c1c1] max-sm:px-6 '>
                      Este proyecto se realizó con React y Vite, así como JS, Axios, HTML y CSS/Tailwind. <br />
                      El objetivo de este proyecto fue consumir la Api de "Pokemón" y poder hacer un manejo personalizado con estos datos. <br />
                      El reto principal fue él como consumir una cantidad tan grande de información, ya que se trata de más de 1200 pokemones, el organizarla y mostrarla fue todo un reto así como el crear las rutas para cada vista.
                    </p>
                  </section>
                </div>

                <div className='proyects grid gap-1 justify-center lg:items-center w-[calc(100%_/_4)] bg-white/30 rounded-lg py-2 text-center overflow-auto sm:grid-cols-2 items-center sm:px-[3%]'>
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
                      Este proyecto se realizó con React y Vite, así como JS, Axios, HTML y CSS/Tailwind. <br />
                      El objetivo de este proyecto fue consumir la Api de "Rick and Morty" la cual almacena los datos importantes de la serie. <br />
                      El reto principal fue el aprender a relizar la busqueda mediante el input ya que era el segundo proyecto haciendo uso de de las tecnologías antes mencionadas.
                    </p>
                  </section>
                </div>

                <div className='proyects grid gap-1 justify-center lg:items-center w-[calc(100%_/_4)] bg-white/30 rounded-lg py-2 text-center overflow-auto sm:grid-cols-2 items-center sm:px-[3%]'>
                  <div className="h-[300px] ">
                    <img className="  overflow-hidden mx-auto  h-full object-contain " src="./proyects/app_clima.png" alt="Página web del clima" />
                  </div>
                  <section className="flex flex-col justify-start items-center gap-3">
                    <button className="duration-1000 grid justify-center items-center bg-gradient-to-r from-gray-600 to-[#10FFF1]/70 p-2 rounded-lg hover:from-gray-300 hover:to-[#10FFF1]/50 hover:text-black/40 font-semibold transition-colors">
                      <a href="https://weatherapp-jp.netlify.app/" target="_blank">
                        Visitar el sitio <i className='bx bxs-right-arrow'></i> 
                      </a>
                    </button>
                    <h3 className='font-bold' >Weather App</h3>
                    <p className='text-[#c2c1c1]'>
                      Este proyecto se realizó con React y Vite, así como JS, Axios, HTML y CSS/Tailwind. <br />
                      Este proyecto tiene como finalidad el poder obtener el tiempo real en tu ubicación así como poder consultar el de otras regiones. <br />
                      El reto principal este proyecto fue el poder obtener la ubicación del usuario, el trabajar por primera vez con Tokens y hacer una vista personalizada para tipo de clima.
                    </p>
                  </section>
                </div>

                
              </section>

            <button onClick={handleClickPreviousProyect} className="flex items-center justify-center absolute top-[35%] sm:top-1/2 left-2  -translate-y-1/2 bg-[#10FFF1]/50 h-10 text-black text-[25px] hover:bg-[#10FFF1] aspect-square rounded-full my-auto "><i className='bx bx-chevron-left '></i></button> 
            <button onClick={handleClickNextProyect} className="flex items-center justify-center absolute top-[35%] sm:top-1/2 right-2 -translate-y-1/2 bg-[#10FFF1]/50 h-10 text-black text-[25px] hover:bg-[#10FFF1] aspect-square rounded-full my-auto "><i className='bx bx-chevron-right '></i></button>
            
            <section className={`relative flex justify-center gap-10 h-auto  mt-5 transition-all`}>
              <button onClick={() => handleClickViewProyect(0)} className={`h-5 aspect-square ${imageToShow == 0 && "bg-[#10FFF1]" } rounded-full border-2 border-gray-600`}></button>
              <button onClick={() => handleClickViewProyect(1)} className={`h-5 aspect-square ${imageToShow == 1 && "bg-[#10FFF1]" } rounded-full border-2 border-gray-600`}></button>
              <button onClick={() => handleClickViewProyect(2)} className={`h-5 aspect-square ${imageToShow == 2 && "bg-[#10FFF1]" } rounded-full border-2 border-gray-600`}></button>
              <button onClick={() => handleClickViewProyect(3)} className={`h-5 aspect-square ${imageToShow == 3 && "bg-[#10FFF1]" } rounded-full border-2 border-gray-600`}></button>

            </section>
            </section>
          </section>
          <section className='absolute bottom-[20px] -translate-x-1/4 md:-translate-x-[35%] lg:-translate-x-[80%] lg:bottom-[10%]  select-none'>
            <div className='bg-[url("./bkg-section/triangulo-blur-blue.svg")] bg-cover bg-center' >
              <img className='blur-lg ' src="./bkg-section/triangulo-solid-blue.svg" alt="" />
            </div>
          </section>
        </article>
      </main>
  )
}

export default Main