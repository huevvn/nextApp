import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import React from "react";

const Page = () => {
    return (
        <section className="logcss flex h-screen w-full items-center justify-center px-5">
            <Card className="bg-white w-full max-w-lg">
                <CardHeader>
                    <CardTitle className="text-black text-4xl font-black py-5">
                        Log-in
                    </CardTitle>
                    <CardDescription className="text-[#000000] font-medium text-xl">
                        Welcome Back!
                    </CardDescription>
                    <p>Enter your e-mail & password to login to your account</p>
                </CardHeader>
                <CardContent>
                    <form
                        action={async (formData) => {
                            "use server";
                            await signIn("nodemailer");
                        }}
                        className="flex flex-col gap-y-2"
                    >
                        <div>
                            <Label className="text-black text-2xl font-semibold">
                                Email
                            </Label>
                            <Input
                                name="email"
                                type="email"
                                required
                                className="bg-[#ffffff] rounded-xl my-2 py-5"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <Label className="text-black text-2xl font-semibold">
                                Password
                            </Label>
                            <Input
                                name="password"
                                type="password"
                                required
                                className="bg-[#ffffff] rounded-xl my-2"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex">
                            <Button className="bg-[#2E073F] text-yellow-200 w-full rounded-full mt-1 mb-3 mr-3 py-5  hover:bg-black hover:text-white">
                                Submit
                            </Button>
                            <Button className="bg-yellow-300 text-black rounded-full mt-1 mb-3 ml-r py-5 hover:bg-black hover:text-white">
                                Log-in with Google <FaGoogle />
                            </Button>
                        </div>
                        <p className="flex">
                            Not a member yet?{" "}
                            <span className="underline text-blue-700 mx-1">
                                <a href="./signup">Create Account!</a>
                            </span>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default Page;
