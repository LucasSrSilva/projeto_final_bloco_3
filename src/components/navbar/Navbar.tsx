import { Bell, SignOut, User } from '@phosphor-icons/react'
import logo from "../../assets/logonobg.png"
import "./navbar.css"

function Navbar() {
    return (
        <header className=' bg-stone-800 text-white flex justify-between items-center h-[10vh] w-screen'>
            <div className="flex items-center justify-between text-3xl ">
                <img src={logo} alt="Logo" className="h-20" />
                <h2 className=" font-montSerrat uppercase">farmacostore</h2>
            </div>
            <div>
                <input className="rounded-md  w-64 h-8 p-3 uppercase placeholder" placeholder="pesquisar" />
            </div>
            <div className="flex">
                <button className="mr-10"><Bell size={32} color="#78716C" weight="bold" /></button>
                <div className="mr-10 flex items-center">
                    <User size={32} color="#fcfcfc" weight="bold" />
                    <div className="mx-5">
                        <p>JorgeSilva</p>
                        <p>jorge@jorge</p>
                    </div>
                    <SignOut size={32} color="#fcfcfc" weight="bold" />
                </div>
            </div>
        </header>
    )
}

export default Navbar
