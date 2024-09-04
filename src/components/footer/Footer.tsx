import { InstagramLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import logo from "../../assets/logonobg.png"

function Footer() {
    return (
        <div className='w-screen bg-stone-800 text-white flex justify-between items-center px-16'>
            <div className='flex flex-col items-center justify-center *:py-1'>
                <div className='flex items-center'>
                    <img className='w-10' src={logo} alt="logo da farmacostore" />
                    <h2 className='uppercase font-semibold'>farmacostore</h2>
                </div>
                <div>
                    <ul className='flex *:px-2'>
                        <li><InstagramLogo size={25} color="#fcfcfc" weight="bold" /></li>
                        <li><GithubLogo size={25} color="#fcfcfc" weight="bold" /></li>
                        <li><LinkedinLogo size={25} color="#fcfcfc" weight="bold" /></li>
                    </ul>
                </div>
            </div>
            <div className='p-4 font-semibold uppercase'>
                <ul>contato</ul>
                <ul>sobre</ul>
                <ul>termos de serviço</ul>
            </div>
        </div>
    )
}

export default Footer