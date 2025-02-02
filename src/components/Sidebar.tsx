import { useLanguage } from "@/language/language-provider";
import useCategories from "../constants/useCategories"
import { SidebarType } from "../types";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

// const selectedCategory = "VS Code";

const Sidebar = ({ selectedCategory, setSelectedCategory }: SidebarType) => {

    // console.log(selectedCategory)

    const categories = useCategories();
    const { language } = useLanguage();

    return (
        <div className="flex overflow-y-auto h-auto md:h-[95%] md:flex-col gap-4">
            {categories.map((item) => (
                <motion.button
                    key={item.id} 
                    className={`flex justify-center items-center font-bold py-2 px-2 rounded-3xl border border-transparent hover:border hover:border-orange-600 dark:hover:border-blue-500 ${item.name === selectedCategory && "bg-yellow-400 dark:bg-blue-200 text-rose-700 dark:text-blue-900"}`}
                    onClick={() => setSelectedCategory(item.name)}
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ delay: Number(`0.5${item.id}`) , duration: 0.5 }}
                >
                    <div className="flex justify-center md:justify-start items-center w-32 md:w-36">
                        <img 
                            className="w-8 mr-2 md:mr-4"
                            src={item.icon} 
                            alt={item.name} 
                        />
                        
                        <span className="text-sm">
                            {item.name}
                        </span>
                    </div>
                </motion.button>
            ))}

            <h5 className="copyright mt-6 text-main-text-h1-light dark:text-white flex gap-1">
                <span className={`${language === "FA" ? "order-last" : ""}`}>
                    {language === "FA" ? " حق نشر با": "Copyright 2024 "}
                </span>
                <Link to="/about" className="text-rose-600 dark:text-main-title hover:underline">
                    FlashScript
                </Link>
            </h5>
        </div>
    )

}

export default Sidebar