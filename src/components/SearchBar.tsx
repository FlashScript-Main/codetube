import { Search } from 'lucide-react';

const SearchBar = () => {

    return (
        <form onSubmit={() => {}} className="rounded-3xl border-[#e3e3e3] pl-4 shadow-none mr-4 bg-white flex items-center justify-center">
            <input 
                className="search-bar" 
                placeholder="Search..." 
                value=""
                onChange={() => {}}
            />

            <button type="submit" className="p-3 text-red-500">
                <Search />
            </button>
        </form>
    )

}

export default SearchBar