import { categories } from "../constants"

const selectedCategory = "VS Code";

const Sidebar = () => {

    return (
        <div className="flex overflow-y-auto h-auto md:h-[95%] md:flex-col">
            {categories.map((item) => (
                <button 
                    key={item.id} 
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
            ))}
        </div>
    )

}

export default Sidebar