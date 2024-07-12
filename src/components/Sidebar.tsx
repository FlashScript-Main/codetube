import React from "react";
import { categories } from "../constants"
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
// import { CategoriesType } from "../types";

// const selectedCategory = "VS Code";

type SidebarType = {
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<React.Dispatch<React.SetStateAction<string>>, Error>>
}

const Sidebar = ({ selectedCategory, setSelectedCategory, refetch }: SidebarType) => {

    // const handleMe = () => setSelectedCategory(item.name)
    

    // const result = () => {
    //     handleMe();
    //     refetch
    // }

    console.log(selectedCategory)
    return (
        <div className="flex overflow-y-auto h-auto md:h-[95%] md:flex-col">
            {categories.map((item) => (
                <div 
                    key={item.id} 
                    
                    onClick={
                        () => {
                            setSelectedCategory(item.name)
                            // if (selectedCategory === item.name) {
                            //     refetch
                            // }
                        }
                    }
                >
                    <button 
                        // onClick={refetch} 
                        className=" opacity-50 hover:opacity-100 transition-colors flex justify-between items-center category-btn" 
                        style={{
                            background: item.name === selectedCategory ? "#FC1503" : "",
                            opacity: item.name === selectedCategory ? "1" : ""
                        }}
                    >
                        <img 
                            className="w-8 mr-4"
                            src={item.icon} 
                            alt={item.name} 
                            
                        />
                        
                        <span>{item.name}</span>
                    </button>
                </div>
            ))}
        </div>
    )

}

export default Sidebar