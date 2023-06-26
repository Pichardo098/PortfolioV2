const ModalFormErr = ({showModalErr,setShowModalErr}) => {

  const handleClickCloseModal = () => {
    setShowModalErr(!showModalErr)
  }
  return (
    <section className={`fixed z-40 top-0  bottom-0 right-0 min-h-screen transition-colors   w-full left-0 bg-black/70 flex justify-center items-center ${showModalErr ? "visible" : "invisible"} `}>
      <section className="bg-white/80 text-black w-1/2 text-center rounded-lg max-w-[400px]">
        <h1 className="text-[18px] my-4 px-4 md:text-2xl">Ha ocurrido un error, vuelve a intentarlo más tarde!</h1>
        <button onClick={handleClickCloseModal} className="bg-black/40 rounded-md p-2 mb-4 hover:bg-white">Aceptar</button>
      </section>
    </section>
  )
}

export default ModalFormErr