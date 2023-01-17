import React from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type Pagination = {
    handleNextPage: any;
    handleBackPage: any;
    page: number,
    totalPages: number,
}

const Pagination = ({ handleBackPage, handleNextPage, page, totalPages }: Pagination) => {

    return (
        <div className="pagination-container">
        <button onClick={handleBackPage} className="pagination-button"><div><FiArrowLeft size={30} color="#373E59"/></div></button>
        <div className='pagination-page'>{page} of {totalPages}</div>
        <button onClick={handleNextPage} className="pagination-button"><div><FiArrowRight size={30} color="#373E59"/></div></button>
    </div>
    )
}

export default Pagination;