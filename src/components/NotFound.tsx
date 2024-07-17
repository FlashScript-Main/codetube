import { Link } from "react-router-dom"
import { House, MoveDown, MoveLeft, MoveUp } from "lucide-react"
import { useLanguage } from "@/language/language-provider"

const NotFound = () => {

    const { language } = useLanguage();

    return (
        <div className="w-full min-h-screen flex flex-col items-center space-y-20 mt-10 md:space-y-32 md:mt-16 xl:space-y-48 xl:mt-24">
            <h1 className="text-4xl md:text-7xl xl:text-9xl text-rose-600 dark:text-main-title font-semibold">
                {language === "FA" ? "گم شدی؟" : "Are you Lost?"}
            </h1>

            <div className="grid place-content-center">
                <h5 className={`text-base flex ${language === "EN" && "gap-1"} md:text-3xl text-orange-500 dark:text-indigo-300 font-medium relative`}>
                    {language === "FA" ? "برگرد " : "Go back"}
                    <Link to="/" className={`flex justify-center items-center group ${language === "FA" && "order-first mr-2"}`}>
                        <span className={`text-red-700 dark:text-purple-400 font-bold ml-1 mr-1 group-hover:text-rose-600 dark:group-hover:text-main-title ${language === "FA" && "order-last ml-2"}`}>
                            {language === "FA" ? "خونه" : "Home"}
                        </span>
                        <span>
                            <House className="w-5 md:w-10 md:h-10 text-red-700 dark:text-purple-400 group-hover:text-rose-600 dark:group-hover:text-main-title duration-0" />
                        </span>
                    </Link>

                    <MoveDown className={`absolute text-pink-500 dark:text-indigo-500 md:w-10 md:h-10 lg:w-14 lg:h-14 ${language === "FA" ? "-top-6 -left-[0.1rem] md:-top-11 lg:-left-[0.5rem] lg:-top-[4rem]" : "-top-6 right-[2.9rem] md:-top-10 lg:right-[2.5rem] lg:-top-[3.7rem]"}`} />
                    <MoveLeft className={`absolute text-pink-500 dark:text-indigo-500 md:w-10 md:h-10 lg:w-14 lg:h-14 ${language === "FA" ? "rotate-180 -left-7 md:-left-12 lg:-left-16 lg:-top-[0.2rem]" : "-right-7 md:-right-12 lg:-right-16 lg:-top-[0.2rem]"}`} />
                    <MoveUp className={`absolute text-pink-500 dark:text-indigo-500 md:w-10 md:h-10 lg:w-14 lg:h-14 ${language === "FA" ? "top-6 -left-[0.1rem] md:top-11 lg:-left-[0.5rem] lg:top-[3rem]" : "top-7 right-[2.9rem] md:top-12 lg:right-[2.5rem] lg:top-[3.3rem]"}`} />
                </h5>
            </div>
        </div>
    )

}

export default NotFound