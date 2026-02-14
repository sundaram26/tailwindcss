import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const links = [
        {
            href: "/guide",
            title: "Guide"
        },
        {
            href: "/pricing",
            title: "Pricing"
        },
        {
            href: "/login",
            title: "Login"
        },
    ]

    return (
        <div className='flex items-center justify-between py-4 px-4'>
            <Link href="/">
                <Image
                    draggable={false}
                    loading="lazy"
                    src="/finta-logo-light.svg"
                    height={65}
                    width={65}
                    alt="logo"
                    />
            </Link>

            <div className='flex items-center gap-8'>
                {links.map((link, index) => (
                    <Link
                    href={link.href}
                    key={index}
                    className='text-neutral-800 font-medium text-sm hover:text-neutral-500 transition duration-200'
                    >
                        {link.title}
                    </Link>
                ))}

                <button className='bg-[#2579F4] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md'>
                    Start free trial
                </button>
            </div>            
        </div>
    )
}

export default Navbar