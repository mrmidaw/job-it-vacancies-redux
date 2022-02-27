import { selectVisiblePositions } from "./position-slice";
import { selectFilters } from "features/filter/filter-slice";
import { useSelector } from "react-redux";


export const usePositions = () => {
    const currentFilters = useSelector(selectFilters);
    const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));
    return positions;
};