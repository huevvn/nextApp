"use client";

import React from "react";
import Image from "next/image";

const page = () => {
    return (
        <section>
            <h1 className="trend text-5xl font-black text-white mt-5">Pop</h1>
            <section className="flex">
                {/* First div */}
                <div className="flex items-center mt-3">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative mt-2 w-[280px] h-[175px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/clairo.jpg"
                            alt="Hurry Up Tomorrow"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Clairo{""}
                        </span>
                    </button>
                </div>
                {/* Second div */}
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/pop/t8.jpg"
                            alt="TUL8TE"
                            layout="fill"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-5 text-yellow-300 text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            TUL8TE{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/twknd.webp"
                            alt="The weeknd"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            The Weeknd{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/lc.jpg"
                            alt="Lewis Capaldi"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Lewis Capaldi{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/bh.jpeg"
                            alt="Beach House"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Beach House{" "}
                        </span>
                    </button>
                </div>
            </section>
            {/* second section */}
            <h1 className="trend text-5xl font-black text-white mt-5">
                Hip-Hop / Rap
            </h1>
            <section className="flex">
                {/* First div */}
                <div className="flex items-center mt-3">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative mt-2 w-[280px] h-[175px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/kw.jpg"
                            alt="Hurry Up Tomorrow"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Kanye West{""}
                        </span>
                    </button>
                </div>
                {/* Second div */}
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rap/scott.webp"
                            alt="Travis Scott"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-5 text-yellow-300 text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Travis Scott{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rap/drake.webp"
                            alt="Drake"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Drake{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rap/jc.jpg"
                            alt="J. Cole"
                            layout="fill"
                            className="object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            J. Cole{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/rap/yeat.png"
                            alt="Yeat"
                            layout="fill"
                            className="object-cover object-right transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Yeat{" "}
                        </span>
                    </button>
                </div>
            </section>
            {/* third section */}
            <h1 className="trend text-5xl font-black text-white mt-5">Indie</h1>
            <section className="flex">
                {/* First div */}
                <div className="flex items-center mt-3">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative mt-2 w-[280px] h-[175px] rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/indie/vac.jpg"
                            alt="Vacations"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Vacations{""}
                        </span>
                    </button>
                </div>
                {/* Second div */}
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/indie/mdm.jpg"
                            alt="Mac DeMarco"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-5 text-yellow-300 text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Mac DeMarco{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/indie/sw.jpg"
                            alt="Still Woozy"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Still Woozy{" "}
                        </span>
                    </button>
                </div>

                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/indie/m.jpg"
                            alt="J. Cole"
                            layout="fill"
                            className="object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Mitski{" "}
                        </span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ml-5">
                    <button
                        onClick={() => {
                            // Handle click logic here, e.g., navigate or log
                        }}
                        className="group relative w-[280px] h-[175px] object-cover object-right rounded-3xl overflow-hidden cursor-pointer"
                    >
                        {/* Image tag */}
                        <Image
                            src="/usedPics/categoryPics/indie/ch.jpg"
                            alt="Chezile"
                            layout="fill"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl group-hover:opacity-60"
                        />
                        {/* Overlay text */}
                        <span className="absolute bottom-4 left-4 text-yellow-300 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Chezile{" "}
                        </span>
                    </button>
                </div>
            </section>
        </section>
    );
};

export default page;
