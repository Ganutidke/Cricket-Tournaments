import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DemoImg from '../../public/CricketDemoImg.jpg'

const TournamentCard = ({ img, name }) => {
    return (
        <div className="max-w-sm  shadow-xl  rounded-lg">
            <Link href={`/tournaments/${name.toLowerCase()}`} className=' w-full h-full rounded-lg shadow-lg'>
                <Image className="rounded-t-lg" src={img || DemoImg} alt={name} />
                <div className="flex justify-center rounded-b-lg bg-[#0268BB] text-white items-center h-20 ">
                    <div className='flex flex-wrap '>
                        <h3 className='font-semibold text-2xl'>{name}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TournamentCard