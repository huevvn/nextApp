"use client";

import { Button } from "@/components/ui/button";
import { BsEnvelopeOpenHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import React from "react";

const CardInfo = ({
    activeCard,
}: {
    activeCard?: { label?: string; description?: string };
}) => {
    return (
        <div className="left-14">
            {/* Auth Buttons Positioned Above */}
            <div className="absolute right-10 top-10 flex space-x-4 z-50">
                {/* Support */}
                <Button className="bg-white hover:bg-yellow-200 hover:text-black text-black rounded-full px-5 py-7">
                    Buy me a Coffee <BsEnvelopeOpenHeart />
                </Button>

                {/* Profile */}
                <Button className="bg-green-950 hover:bg-black text-white hover:text-yellow-200 rounded-full px-6 py-7">
                    Profile <CgProfile />
                </Button>
            </div>
        </div>
    );
};

export default CardInfo;
