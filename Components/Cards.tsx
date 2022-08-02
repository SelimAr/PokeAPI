import React, {useEffect,useState} from 'react'

    interface Props {
        abilities: {
            name: string;
            ability: string;
            type: string;
            id: number;
            weight: string;
            height: string;
        }[] | undefined;
        image: string;
        name: string;
        type: string;
        id: number;
        weight: string;
        height: string;
        
    }

    const Cards = ( props: Props) => {

    const { image, name, type, abilities, weight, height } = props;

    const [show, setShow] = useState(false);

    const trunc = (string: string, n: number) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    const openModal = () => {
        setShow(true)
    }

    const closeModal = () => {
        setShow(false)
    }

    useEffect(() => {
        if(show){
            document.body.style.overflow = 'hidden';
        }
        return () =>
            document.body.style.overflow = 'unset';
     }, [show]);

  return (
    <>
    <div onClick={openModal} className='bg-[rgba(0,0,0,0.3)] rounded-md w-64 h-73 my-10 mx-10 cursor-pointer
        hover:scale-105 ease-in-out duration-300 overflow-hidden hover:shadow-[0_0_0_15px_rgba(0,0,0,0.3)]'>

        <img className='rounded-tr-md rounded-tl-md w-64 h-64 bg-[rgba(0,0,0,0.2)]' src={image} alt={name} />
        <div className='text-white font-medium text-2xl px-1.5 pb-1 text-center'>{trunc(`${name}`,18)}</div>
        
    </div>
        {show && 
            <div className='bg-[rgba(0,0,0,0.7)] fixed flex justify-center items-center h-screen w-screen inset-0	'>
                <div className='w-56 p-3 bg-[rgba(255,255,255,0.3)] rounded-md flex justify-center items-center'>
                    <button className='absolute top-2 right-0 h-16 w-16' onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" 
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {abilities?.slice(0,1).map((abl: any) => {
                        return <div className='text-center'>
                                    <img className='w-40 h-40' src={image} alt={name}/>
                                    <div className='text-white text-2xl'>{trunc(`${name}`,16)}</div>
                                    <div className="text-white bg-slate-600 rounded-md mt-1">Type : {type}</div>
                                    <div className='text-white bg-amber-700 rounded-md mt-1'>Abilities : {trunc(`${abl.ability.name}`,16)}</div>
                                    <div className='text-white bg-blue-400 rounded-md mt-1'>{height}dm</div>
                                    <div className='text-white bg-indigo-400 rounded-md mt-1'>{weight}Hg</div>
                                </div>
                    })}

                </div>
            </div>
        }
    </>
  )
}

export default Cards;