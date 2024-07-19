import { axiosLogo, flashScriptLogo, framermotionLogo, githubDarkLogo, polypaneLogo, pwaDarkLogo, pwaLightLogo, rapidAPILogo, reactLogo, reactqueryLogo, tailwindLogo, typescriptLogo, viteLogo } from "@/constants";
import { useLanguage } from "@/language/language-provider";

const About = () => {

    const { language } = useLanguage();

    return (
        <div className="w-full pt-2 md:pt-4 xl:pt-8">
            <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl text-rose-600 dark:text-main-title font-semibold text-center">
                {language === "FA" ? "این وب سایت با چه ابزارهایی ساخته شده است؟" : "What CodeTube is Built With?"}
            </h1>

            <div className="grid place-content-center">
                <div className="w-[50rem] h-[50rem] relative border-2 border-rose-700 grid place-content-center">
                    <div className="absolute w-40 h-40 translate-x-[200%] translate-y-[200%]">
                        <img src={flashScriptLogo} alt="" className="rounded-full" />
                    </div>
                    <div className="absolute w-20 h-20 translate-x-[200%] translate-y-[200%]">
                        <img src={reactLogo} alt="" />
                    </div>
                    <div className="absolute w-20 h-20 translate-x-[200%] translate-y-[200%]">
                        <img src={viteLogo} alt="" />
                    </div>
                    <div className="absolute w-20 h-20 translate-x-[200%] translate-y-[200%]">
                        <img src={tailwindLogo} alt="" />
                    </div>
                    <div className="absolute w-16 h-16 translate-x-[200%] translate-y-[200%]">
                        <img src={typescriptLogo} alt="" />
                    </div>
                    <a className="absolute w-20 h-20 translate-x-[200%] translate-y-[200%]">
                        <img src={githubDarkLogo} alt="" />
                    </a>



                        <img src={rapidAPILogo} alt="" />
                        <img src={reactqueryLogo} alt="" />
                        <img src={framermotionLogo} alt="" />
                        <img src={axiosLogo} alt="" />
                        <img src={polypaneLogo} alt="" />
                        <img src={pwaDarkLogo} alt="" />
                        <img src={pwaLightLogo} alt="" />
                </div>
            </div>
        </div>
    )

}

export default About