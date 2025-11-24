'use client';

import React, { useContext } from "react";
import Layout from "./Layout";
import Link from "next/link";
import { MainName } from "./GlobalContext";

const Footer = () => {
    const name = useContext(MainName)
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className="flex items-center lg:py-2">
           Build With <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> 
           by&nbsp; <Link href="https://github.com/gpitrella" className="underline underline-offset-2 ">{name}</Link>
            </div>
            </Layout>
        </footer>
    )
}

export default Footer