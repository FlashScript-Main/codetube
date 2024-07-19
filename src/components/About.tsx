import useAbout from "@/constants/useAbout";
import { useLanguage } from "@/language/language-provider";
import { motion } from 'framer-motion';

const About = () => {

    const { language } = useLanguage();
    const aboutInfo = useAbout();

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
                    {aboutInfo.map((item) => (
                        <motion.a 
                            key={item.id}
                            className={item.aTagClassName}
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            transition={{ delay: item.transitionDelay, ease: "easeIn" }}
                            href={item.href}
                            target="_blank"
                        >
                            <img 
                                src={item.imgSrc}
                                alt={item.imgAlt}
                                className={item.imgClassName}
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    )

}

export default About