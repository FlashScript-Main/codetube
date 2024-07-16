import { Link } from "react-router-dom"
import { House, MoveDown, MoveLeft, MoveUp } from "lucide-react"

const NotFound = () => {

    return (
        <div className="w-full min-h-screen flex flex-col items-center space-y-20 mt-10 md:space-y-32 md:mt-16 xl:space-y-48 xl:mt-24">
            <h1 className="text-4xl md:text-7xl xl:text-9xl text-main-title font-semibold">
                Are you Lost?
            </h1>

            <div className="grid place-content-center">
                <h5 className="text-base flex md:text-3xl text-indigo-300 font-medium relative">
                    Go back
                    <Link to="/" className="flex justify-center items-center group">
                        <span className="text-purple-400 font-bold ml-1 mr-1 group-hover:text-main-title">
                            Home
                        </span>
                        <span>
                            <House className="w-5 md:w-10 md:h-10 text-purple-400 group-hover:text-main-title duration-0" />
                        </span>
                    </Link>

                    <MoveDown className="absolute -top-6 right-[2.9rem] text-indigo-500 md:w-10 md:h-10 md:-top-10 lg:w-14 lg:h-14 lg:right-[2.5rem] lg:-top-[3.7rem]" />
                    <MoveLeft className="absolute text-indigo-500 -right-7 md:w-10 md:h-10 md:-right-12 lg:w-14 lg:h-14 lg:-right-16 lg:-top-[0.2rem]" />
                    <MoveUp className="absolute top-7 right-[2.9rem] text-indigo-500 md:w-10 md:h-10 md:top-12 lg:w-14 lg:h-14 lg:right-[2.5rem] lg:top-[3.3rem]" />
                </h5>
            </div>
        </div>
    )

}

export default NotFound