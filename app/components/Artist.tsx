"use client";

import React from "react";
import SwiperCards from "./SwiperCards";

const Artist = () => {
    return (
        <div className="h-full mt-8">
            <SwiperCards
                className="h-[30rem]"
                paginationImages
                items={[
                    {
                        card: (
                            <div className="flex items-start justify-start w-full h-full relative">
                                <video
                                    className="absolute w-full h-full object-cover rounded-2xl inset-0"
                                    autoPlay
                                    muted
                                    loop
                                >
                                    <source
                                        type="video/mp4"
                                        src="/chromoVid.mp4"
                                    />
                                </video>
                            </div>
                        ),
                        src: "/tyler.jpg",
                        label: "Tyler, The Creator",
                        description:
                            "Experience the electrifying performances by Tyler.", // I want to make new line here
                    },
                    {
                        card: (
                            <div className="flex items-start justify-start w-full h-full relative">
                                <video
                                    className="absolute w-full h-full object-cover rounded-2xl inset-0"
                                    autoPlay
                                    muted
                                    loop
                                >
                                    <source
                                        type="video/mp4"
                                        src="/vacvid.mp4"
                                    />
                                </video>
                            </div>
                        ),
                        src: "/vacman.jpg",
                        label: "VACATIONS",
                        description:
                            "Experience the electrifying performances by Tyler.",
                    },
                    {
                        card: (
                            <div className="flex items-start justify-start w-full h-full relative">
                                <video
                                    className="absolute w-full h-full object-cover object-bottom rounded-2xl inset-0"
                                    autoPlay
                                    muted
                                    loop
                                >
                                    <source
                                        type="video/mp4"
                                        src="/vanman.mp4"
                                    />
                                </video>
                            </div>
                        ),
                        src: "/vansire.jpg",
                        label: "Vansire",
                        description:
                            "Catch the magical moments of Vansire's concert.",
                    },
                ]}
            />
        </div>
    );
};

export default Artist;
