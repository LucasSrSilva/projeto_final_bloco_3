import { Link } from "react-router-dom"
import image from "../../assets/home.png"
import ListaCategoria from "../../components/categoria/listacategoria/ListaCategoria"

function Home() {
    return (
        <>
            <div className="bg-stone-700 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
                        <p className='text-xl'>Os melhores produtos pelos melhores preços</p>

                        <div className="flex justify-around gap-4">
                            <Link to="/cadastroCategoria"><button className='rounded bg-white text-stone-900 py-2 px-4'>Cadastrar categoria</button></Link>
                            <button className='rounded bg-white text-stone-900 py-2 px-4'>Ver produtos</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={image}
                            alt="Desenho de um jovem mexendo no computador com scrips e imagens flutuando sobre ele"
                            className="w-2/3" />
                    </div>
                </div>
            </div>
            <ListaCategoria />
        </>
    )
}

export default Home