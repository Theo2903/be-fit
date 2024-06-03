import axios from "axios";

export const getAlimentById = async (setAlimentData, id) => {
    axios
        .get(`https://world.openfoodfacts.org/api/v0/product/${id}.json`)
        .then((response) => {
            setAlimentData(response.data);
        });
};