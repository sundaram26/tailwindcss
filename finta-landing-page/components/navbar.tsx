import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return <div className='flex items-center justify-between py-4'>
        <Link href="/">
            <Image
                draggable={false}
                loading="lazy"
                src="/finta-logo-light.svg"
                height={50}
                width={50}
                alt="logo"
            />
        </Link>
    </div>
}

export default Navbar