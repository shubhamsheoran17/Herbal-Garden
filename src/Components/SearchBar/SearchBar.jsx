import ReactSearchBox from 'react-search-box';
import HerbsInformation from '../HerbsInformation/HerbsInformation';

function SearchBar({ onSearch }) {
    const trees = HerbsInformation();

    const handleSearch = (query) => {
        const filteredResults = trees.filter(tree =>
        tree[0].toUpperCase().includes(query.toUpperCase())
        );
        onSearch(filteredResults);
    };

    return (
        <div className="search-container w-1/2 h-20">
        <ReactSearchBox
            placeholder="Search for a plant..."
            onChange={handleSearch}
            debounce={300}
            inputHeight='50px'
            clearOnSelect='true'
        />
        </div>
    );
}

export default SearchBar;
