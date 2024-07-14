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
        <form onSubmit={() => {}} className="rounded-3xl border-[#e3e3e3] pl-4 shadow-none mr-4 bg-white flex items-center justify-center">
            <input 
                className="search-bar text-black" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button 
                className="p-3 text-red-500"
                onClick={handleSubmit}
            >   
                <Search />
            </button>
        </form>
    )

}

export default SearchBar