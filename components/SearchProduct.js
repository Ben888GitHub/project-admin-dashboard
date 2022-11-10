import { TextInput } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';
function SearchProduct({ setQuery }) {
	return (
		<div className="mt-5">
			<TextInput
				id="search"
				placeholder="Search Product"
				className="justify-center  mx-auto w-72"
				onChange={(e) => setQuery(e.target.value)}
				addon={<HiSearch />}
			/>
		</div>
	);
}

export default SearchProduct;
