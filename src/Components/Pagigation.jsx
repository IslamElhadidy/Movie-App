import React from 'react'
import ReactPaginate from 'react-paginate';

function Pagigation({getPage}) {

  const handlePageClick = (data) => {
    getPage(data.selected + 1)
  }





  return (
    <>


        <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={3}
        previousLabel="< السابق"

        containerClassName = {'pagination justify-content-center'}

        pageClassName = {'page-item'}
        pageLinkClassName	 = {'page-link'}

        previousClassName  = {'page-item'}
        previousLinkClassName	= {'page-link'}

        nextClassName		 = {'page-item'}
        nextLinkClassName	= {'page-link'}

        activeClassName = {'active'}

        />

    </>
  )
}

export default Pagigation