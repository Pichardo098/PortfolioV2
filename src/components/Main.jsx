const Main = ({refProyects}) => {
  return (
    <main id="info_personal" className='relative  w-full h-[200vh] flex flex-col justify-between '>
        <article  id='about_me' className='h-full flex flex-col relative justify-center items-end  max-w-[1200px] mx-auto' >
            <section className='w-[70%] z-10 grid gap-8 px-2 relative top-[-30px] min-[400px]:text-[20px] lg:w-[50%] lg:pr-10 '>
              
              <h2 className='font-bold text-[30px] md:text-[40px]' >Hola!</h2>
              <p className='text-[#c2c1c1] md:text-[30px] '>
              Actualmente me encuentro viviendo en Zaopoan, Jal. México, tengo 25 años.<br />
              Una de las metas que tengo es aprender varios lenguajes de programación, actualemente manejo JS, React, HTML, CSS.
              Me gusta mucho desarrollar y plasmar mis ideas sobre cualquier sitio Web.
              </p>
              <section className='text-white text-[30px]'>
                <ul className='flex justify-around '>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["VueJs"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-vuejs'></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["Javascript"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-javascript' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["React"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-react' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["VSC"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-visual-studio' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["HTML"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-html5' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["CSS"] before:absolute before:left-1/2 before:-translate-x-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818]  before:invisible hover:before:visible  '><i className='bx bxl-css3' ></i></li>
                  <li className='md:text-[35px] md:before:text-[25px] relative before:content-["Tailwind"] before:absolute before:-translate-x-[60%] lg:before:-translate-x-1/2 lg:before:left-1/2 before:translate-y-[100%] before:text-[#FF2B51] before:text-[20px] before:mt-3 before:px-2 before:rounded-md before:bg-[#181818] before:invisible hover:before:visible '><i className='bx bxl-tailwind-css' ></i></li>
                </ul>
              </section>
            </section>
            <section className='absolute bottom-[20px] z-0 -translate-x-1/4 md:-translate-x-[35%] lg:-translate-x-[80%]'>
              <div id='photo_personal' className='rounded-full bg-[url("./bkg-section/zyro-image.png")] bg-cover bg-center  border-2 border-red-600'>
                <img src="./bkg-section/elipse_solid_red.svg" alt="Imagen personal Jesus Antonio" />
              </div>

            </section>
        </article>
        <article ref={refProyects} id='proyects' className='h-full flex flex-col relative  items-center  justify-center max-w-[1200px] mx-auto'>
          <section className='w-[80%] z-10 flex flex-col  gap-8 px-2 relative lg:flex-row lg:w-full  '>
            <h2 className='font-bold text-[20px] md:text-[30px]' >Mis últimos proyectos</h2>
            <section className='w-full h-[400px] min-[390px]:h-[600px] min-[400px]:text-[20px] bg-white/30 rounded-xl p-4 overflow-scroll flex justify-center text-center md:text-[30px] md:h-[700px]'>
              <section className='grid gap-4 ' >
              <div className='grid gap-1 lg:flex lg:items-center '>
                <img className=' rounded-[45px] mx-auto lg:h-[500px] ' src="./proyects/rick_morty.png" alt="Página Web de Rick and Morty" />
                <section>
                  <h3 className='font-bold' >Rick And Morty</h3>
                  <p className='text-[#c2c1c1]'>
                    Este proyecto se hizo con la finalidad de poder obtener las diferentes locaciones del univero de Rick And Morty; se utilizó React, versionamiento con Git y Github, Axios y para el diseño se utilizó Tailwind.
                  </p>
                </section>
              </div>
              <hr />
              <div className='grid gap-1 lg:flex lg:items-center'>
                <img className='mx-auto  lg:h-[500px] ' src="./proyects/app_clima.png" alt="Página web del clima" />
                <section>
                  <h3 className='font-bold' >App del Clima</h3>
                  <p className='text-[#c2c1c1]' >
                    Este proyecto tiene como finalidad el poder obtener el clima en tu ciudad y otras regiones del mundo, así como otros parámetros en tiempo exacto utilizando la API de OpenWeather, se utilizó React, versionamiento de Git y Gituhub, Axios y para el diseño Tailwind.
                  </p>
                </section>
              </div>
              <hr />
              <div className='grid gap-1  lg:flex lg:items-center'>
                <img className=' rounded-[10px] mx-auto lg:row-span-2 lg:h-[500px]' src="./proyects/pokedex1.png" alt="Página web de Pokemon" />
                <section>
                  <h3 className='font-bold' >Pokédex</h3>
                  <p className='text-[#c2c1c1]' >
                    Este proyecto tiene la función de poder visualizar todos los pokemones que existen, así como buscar únicamente el de tú agrado y poder obtener más información acerca de ese Pokemon en específico, se utilizó React, Axios, versionamiento de Git y Github y para el diseño Tailwind.
                  </p>
                </section>
              </div>
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