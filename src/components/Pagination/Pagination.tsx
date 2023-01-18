import React from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const COMPONENT_ID = 'pokedex-pagination'

type Pagination = {
    handleNextPage: any;
    handleBackPage: any;
    page: number,
    totalPages: number,
}

const Pagination = ({ handleBackPage, handleNextPage, page, totalPages }: Pagination) => {

    return (
        <div className="pagination-container" id={COMPONENT_ID}>
        <button onClick={handleBackPage} className="pagination-button" id={`${COMPONENT_ID}-back`}><div><FiArrowLeft size={30} color="#373E59"/></div></button>
        <div className='pagination-page'>{page} of {totalPages}</div>
        <button onClick={handleNextPage} className="pagination-button" id={`${COMPONENT_ID}-next`}><div><FiArrowRight size={30} color="#373E59"/></div></button>
    </div>
    )
}

export default Pagination;