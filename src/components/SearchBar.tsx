import { useLanguage } from '@/language/language-provider';
import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const { language } = useLanguage()

    const [searchTerm, setSearchTerm] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm("");
        }
    }

    return (
        <form 
            className={`rounded-3xl border-[3px] border-rose-600 dark:border-sky-400 mr-4 bg-white flex items-center justify-center ${language === "FA" ? "order-first pr-4" : "pl-4"}`}
            onSubmit={handleSubmit}
        >
            <input 
                className={`border-none outline-none w-14 sm:w-24 md:w-40 lg:w-72 xl:w-96 2xl:w-[30rem] text-black ${language === "FA" && "text-end"}`} 
                placeholder={language === "FA" ? "...جستجو" : "Search..." }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button 
                className={`p-3 text-pink-500 dark:text-blue-700 hover:text-pink-800 dark:hover:text-main-title ${language === "FA" && "order-first"}`}
                type='submit'
            >   
                <Search />
            </button>
        </form>
    )

}

export default SearchBar