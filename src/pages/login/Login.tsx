import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = (props: { setEmail: (email: string) => void }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div className="max-w-auto h-[700px] mx-auto relative flex flex-col">
                {/* form */}
                <div className="h-[600px] w-[90%] md:w-[70%] lg:w-[40%] lg:h-[500px] mx-auto flex flex-col items-center justify-center gap-10 text-[#5A5A5D] lg:mt-20">
                    <h2 className="text-3xl font-medium text-black">
                        Login to your account
                    </h2>
                    <form className="flex flex-col gap-10 w-[70%]">
                        {/* email */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="text" className="font-medium">
                                Email & Username
                            </label>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Email & Username"
                                    className="border-2 p-3 rounded-md w-full hover:border-purple-500/[.5] focus:border-purple-500 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="text" className="font-medium">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={isVisible ? "text" : "password"}
                                    placeholder="Password"
                                    className="border-2 p-3 rounded-md w-full hover:border-red-500/[.5] focus:border-red-500 focus:outline-none"
                                    required
                                />
                                <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3">
                                    <div onClick={toggleVisibility}>
                                        {isVisible ? (
                                            <AiOutlineEyeInvisible size={20} />
                                        ) : (
                                            <AiOutlineEye size={20} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end password */}
                        <div className="flex flex-col">
                            <button
                                type="submit"
                                className="bg-[#007DFA] lg:w-[100%] text-white 
            text-center font-medium p-3 rounded-md hover:bg-[#3390ed]"
                            >
                                Login
                            </button>
                            <div className="mt-5 text-center flex items-center">
                                <div className="flex-1 border-t border-gray-300"></div>
                                <p className="mx-4">OR</p>
                                <div className="flex-1 border-t border-gray-300"></div>
                            </div>
                            <Link to={"/signup"}>
                                <button
                                    type="submit"
                                    className="bg-white w-[100%] text-[#3390ed] 
            text-center font-medium p-3 rounded-md border-solid border-2 border-sky-500 mt-5
            hover:bg-[#f4f6f7]"
                                >
                                    Register
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
