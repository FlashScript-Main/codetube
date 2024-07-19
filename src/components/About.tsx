import { flashScriptLogo, framermotionLogo, pwaDarkLogo, pwaLightLogo, rapidAPILogo, reactLogo, reactqueryLogo, reactrouterLogo, shadcnDarkLogo, shadcnLightLogo, tailwindLogo, typescriptLogo, viteLogo } from "@/constants";
import { useLanguage } from "@/language/language-provider";
import { useTheme } from "@/theme/theme-provider";
import { motion } from 'framer-motion';

const About = () => {

    const { language } = useLanguage();
    const { theme } = useTheme();

    return (
        <motion.div 
            className="w-full pt-2 md:pt-4 xl:pt-8"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut"}}
        >   
            <div className="overflow-hidden p-2 -mb-14">
                <motion.h1 
                        className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl text-rose-600 dark:text-main-title font-semibold text-center"
                        initial={{ y: "100%"}}
                        animate={{ y: "0%" }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                    {language === "FA" ? "این وب سایت با چه ابزارهایی ساخته شده است؟" : "What CodeTube is Built With?"}
                </motion.h1>
            </div>

            <div className="grid place-content-center">
                <div className="w-[50rem] h-[50rem] relative grid place-content-center">
                    <motion.a 
                        className="absolute w-40 h-40 translate-x-[200%] translate-y-[200%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, ease: "easeIn" }}
                        href="https://github.com/FlashScript-Main/codetube"
                        target="_blank"
                    >
                        <img src={flashScriptLogo} alt="" className="rounded-full" />
                    </motion.a>

                    <motion.a 
                        className="absolute w-20 h-20 translate-x-[450%] translate-y-[200%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, ease: "easeIn" }}
                        href="https://react.dev/"
                        target="_blank"
                    >
                        <img src={reactLogo} alt="" />
                    </motion.a>

                    <motion.a 
                        className="absolute w-20 h-20 translate-x-[600%] translate-y-[250%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, ease: "easeIn" }}
                        href="https://vitejs.dev/"
                        target="_blank"
                    >
                        <img src={viteLogo} alt="" />
                    </motion.a>

                    <motion.a 
                        className="absolute w-20 h-20 translate-x-[300%] translate-y-[250%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, ease: "easeIn" }}
                        href="https://tailwindcss.com/"
                        target="_blank"
                    >
                        <img src={tailwindLogo} alt="" />
                    </motion.a>

                    <motion.a 
                        className="absolute w-16 h-16 translate-x-[320%] translate-y-[480%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, ease: "easeIn" }}
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                    >
                        <img src={typescriptLogo} alt="" />
                    </motion.a>

                    <motion.a 
                        className="absolute w-20 h-20 translate-x-[650%] translate-y-[380%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, ease: "easeIn" }}
                        href="https://rapidapi.com/ytdlfree/api/youtube-v31/playground/apiendpoint_568ae1b5-7353-441d-8753-cfa5337ade8f"
                        target="_blank"
                    >
                        <img src={rapidAPILogo} alt="" />
                    </motion.a>

                    <motion.a 
                        className="absolute w-20 h-20 translate-x-[640%] translate-y-[550%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, ease: "easeIn" }}
                        href="https://tanstack.com/query/latest"
                        target="_blank"
                    >
                        <img src={reactqueryLogo} alt="" />
                    </motion.a>

                    <motion.a 
                        className="absolute w-16 h-16 translate-x-[330%] translate-y-[690%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9, ease: "easeIn" }}
                        href="https://www.framer.com/motion/"
                        target="_blank"
                    >
                        <img src={framermotionLogo} alt="" />
                    </motion.a>

                    <motion.a 
                        className="absolute w-20 h-20 translate-x-[330%] translate-y-[690%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1, ease: "easeIn" }}
                        href="https://reactrouter.com/en/main"
                        target="_blank"
                    >
                        <img src={reactrouterLogo} alt="" className="rounded-full" />
                    </motion.a>

                    <motion.a 
                        className="absolute w-20 h-20 translate-x-[580%] translate-y-[680%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3, ease: "easeIn" }}
                        href="https://web.dev/explore/progressive-web-apps"
                        target="_blank"
                    >
                        <img src={theme === "dark" ? pwaDarkLogo : pwaLightLogo} alt="" />
                    </motion.a>

                    <motion.a 
                        className="absolute w-20 h-20 translate-x-[450%] translate-y-[780%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, ease: "easeIn" }}
                        href="https://ui.shadcn.com/"
                        target="_blank"
                    >
                        <img src={theme === "dark" ? shadcnDarkLogo : shadcnLightLogo} alt="" className="rounded-full" />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    )

}

export default About