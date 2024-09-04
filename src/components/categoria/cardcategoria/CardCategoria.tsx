import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border border-solid border-black flex flex-col rounded-2xl overflow-hidden justify-between text-center '>
            <p className='p-8 text-3xl bg-stone-400 h-full'>{categoria.nome}</p>
            <div className="flex *:w-2/4 *:uppercase">
                <Link to={`/editarCategoria/${categoria.id}`} className="bg-stone-800 text-white">
                    <button>editar</button>
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className="bg-red-400">
                    <button >deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria