"use client";

import { logo } from "@/assets";
import Image from "next/image";
import Router from "next/router";

const dataNavbar = [
    {
        title: "Home",
    },
    {
        title: "About",
        slug: "about",
    },
    {
        title: "Promotions",
        badge: "HOT",
        colorBadge: "bg-red-500",
    },
    {
        title: "Blogs",
    },
    {
        title: "Contact Us",
    },
];

const Navbar = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='max-w-[1920px] w-full px-[116px]'>
                <div className='w-full flex justify-between h-[96px] items-center'>
                    <div>
                        <Image
                            alt='logo'
                            width={500}
                            height={500}
                            src={logo}
                            className='w-[207px]'
                        />
                    </div>
                    <div className='flex'>
                        {dataNavbar?.map((item, i) => (
                            <div
                                onClick={() => Router.push(item.slug)}
                                key={i}
                                className='px-[16px] text-[14px] font-bold cursor-pointer relative'>
                                {item.badge && (
                                    <div
                                        className={`absolute top-[-15px] right-0 px-[9px] py-[3px] text-white text-[8px] rounded-full ${item.colorBadge}`}>
                                        {item.badge}
                                    </div>
                                )}
                                <div className='opacity-70'>{item.title}</div>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center'>
                        <button
                            onClick={() => alert("click masuk")}
                            className='text-black font-medium mr-[24px] cursor-pointer'>
                            Masuk
                        </button>
                        <button
                            onClick={() => alert("click daftar sekaranng")}
                            className='bg-primary px-[18px] py-[10px] rounded-full text-white cursor-pointer '>
                            Daftar Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
