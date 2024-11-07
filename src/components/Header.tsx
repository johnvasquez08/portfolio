import { HomeIcon, MagnifyingGlassIcon, WalletIcon } from '@heroicons/react/24/solid'


export default function Header() {
  return (
    <div className="flex justify-between w-full items-center bg-black text-white p-3">
        <div className='w-1/12 justify-self-start'>
            
            <svg className="text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.559-8-8-8m3.681 11.559c-.159.241-.441.319-.681.159c-1.881-1.159-4.241-1.4-7.041-.759c-.281.081-.519-.119-.6-.359c-.081-.281.119-.519.359-.6c3.041-.681 5.681-.4 7.759.881c.281.119.322.438.203.678zm.96-2.2c-.2.281-.559.4-.841.2C9.641 8.24 6.359 7.84 3.841 8.64c-.319.081-.681-.081-.759-.4c-.081-.319.081-.681.4-.759c2.919-.881 6.519-.441 9 1.081c.238.119.359.519.159.797m.078-2.24C10.16 5.6 5.878 5.438 3.438 6.2a.75.75 0 0 1-.919-.481c-.119-.4.119-.8.481-.919c2.841-.841 7.519-.681 10.481 1.081c.359.2.481.681.281 1.041c-.203.278-.681.397-1.044.197z"/></svg>
        </div>
        <div className='w-1/4 flex items-center'>
            <div className='p-2 bg-stone-800 size-10 flex justify-center items-center rounded-full '>
                <button onClick={(e)=> e.preventDefault}>
                    <HomeIcon className='size-7 text-gray-300'/>
                </button>
            </div>
            <div className='bg-stone-800 w-96 h-10 p-2 flex items-center rounded-full focus:border-red-200 ml-5'>
                <button onClick={(e)=>e.preventDefault}>
                    <MagnifyingGlassIcon className='size-7  text-gray-300'/>
                </button>
                <span className='ml-4 w-3/4 mr-2'>
                    <input className='bg-transparent focus:outline-none h-full w-full' type="text" placeholder='Que deseas conocer?'/>
                </span>
                
                <button>
                    <WalletIcon className='size-7  text-gray-300'/>
                </button>
            </div>
        </div>
        <div>
            <span className="mr-4 text-gray-300 font-bold">Registrarse</span>
            <span className="text-black bg-white p-3 rounded-lg font-bold">Iniciar Sesion</span>
        </div>
    </div>
  )
}
