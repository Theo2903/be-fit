import axios from "axios";


export const getAliments = async (setIsLoading, setOffData, searchValue) => {
    if (searchValue.length >= 3) {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}&search_simple=1&page_size=100&page=1&json=1`
            );
            // exclude empty name
            setOffData(
                response.data.products.filter(
                    (product) => product.product_name.trim() !== ""
                )
            );
            setIsLoading(false);
        } catch (error) {
            console.error("error:", error);
        }
    }
};