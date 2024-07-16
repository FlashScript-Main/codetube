import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm("");
        }
    }

    return (
        <div className="rounded-3xl border-[3px] border-sky-400 pl-4 mr-4 bg-white flex items-center justify-center">
            <input 
                className="border-none outline-none w-14 sm:w-24 md:w-40 lg:w-72 xl:w-96 2xl:w-[30rem] text-black" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button 
                className="p-3 text-blue-700"
                onClick={handleSubmit}
            >   
                <Search />
            </button>
        </div>
    )

}

export default SearchBar