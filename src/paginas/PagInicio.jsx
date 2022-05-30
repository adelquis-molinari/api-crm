import {Link} from "react-router-dom"
function PagInicio() {
  const urlImg = "https://images.unsplash.com/photo-1603201667230-bd139210db18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80"
  return (
    // crear inicio de sesion, furmulario izquierda y imagen derecha con tailwindcss
    <div className="md:flex items-center justify-center md:h-screen bg-blue-200 ">
      <div className="flex flex-col items-center justify-center w-full pb-5 pt-5">
        <h1  className="text-center font-bold text-4xl" >Organizer</h1>
        <p className="text-center text-xl p-4">
          Organiza tus clientes de manera facil y eficiente
        </p>
        <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        to="/clientes">
          Ingresar
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center h-screen md:w-full">
        <img 
        className="md:w-full h-full object-cover"
        src={urlImg} alt="" />
      </div>
    </div>
  )
}

export default PagInicio
