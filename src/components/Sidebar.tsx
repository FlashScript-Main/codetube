import useCategories from "../constants/useCategories"
import { SidebarType } from "../types";

// const selectedCategory = "VS Code";

const Sidebar = ({ selectedCategory, setSelectedCategory }: SidebarType) => {

    // console.log(selectedCategory)

    const categories = useCategories();

    return (
        <div className="flex overflow-y-auto h-auto md:h-[95%] md:flex-col gap-4">
            {categories.map((item) => (
                <button
                    key={item.id} 
                    className={`flex justify-center items-center font-bold py-2 px-2 rounded-3xl border border-transparent hover:border hover:border-blue-500 ${item.name === selectedCategory && "bg-blue-200 text-blue-900"}`}
                    onClick={() => setSelectedCategory(item.name)}
                    
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
                </button>
            ))}

            <h5 className="copyright mt-6 text-white">
                Copyright 2024 {" "}
                <a href="https://github.com/FlashScript-Main/youtube_clone_first" className="text-main-title hover:underline">
                    FlashScript
                </a>
            </h5>
        </div>
    )

}

export default Sidebar