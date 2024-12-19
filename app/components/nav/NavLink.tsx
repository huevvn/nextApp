"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
    navLink,
}: {
    navLink: { link: string; label: string; icon: React.ReactElement };
}) => {
    const { label, icon, link } = navLink;
    const pathName = usePathname();
    const isActive = pathName === link;

    return (
        <Link
            href={link}
            className={`flex ${
                isActive ? "text-yellow-200" : "text-[#F0EBD8]"
            } duration-500 my-4 md:text-lg lg:text-2xl gap-3 items-center p-3 rounded-3xl font-bold ${"hover:bg-[#dc143c]"}`}
        >
            {React.cloneElement(icon, { className: "w-5 h-5" })}
            {label}
        </Link>
    );
};

export default NavLink;
