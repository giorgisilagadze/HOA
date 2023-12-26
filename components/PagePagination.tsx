import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

interface Prop {
  dataLength: number;
  itemsPerPage: number;
  children: any;
  both: boolean;
  changePage: (arg1: number) => {};
}

export default function PagePagination({
  dataLength,
  itemsPerPage = 20,
  children,
  both,
  changePage,
}: Prop) {
  //current Page
  const [currentPage, setCurrentPage] = useState(0);
  //calculate how many pages will be there
  const pageCount = Math.ceil(dataLength / itemsPerPage);
  // get current page number
  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected);
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {both && (
        <ReactPaginate
          breakLabel="..."
          onPageChange={(e) => {
            handlePageClick(e);
          }}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          breakLinkClassName={"font-bold text-gray-400"}
          breakClassName={"w-8 h-8 flex items-center justify-center"}
          //main container
          containerClassName={`flex items-center gap-1`}
          //single page number
          pageLinkClassName={`px-2 h-8 text-md border border-gray-300 flex items-center justify-center rounded-lg`}
          //previous page number
          previousLinkClassName={`hidden`}
          //next page number
          nextLinkClassName={`hidden`}
          //active page
          activeLinkClassName={"bg-[#022FB0] !important text-white"}
          forcePage={currentPage}
        />
      )}

      <div>{children}</div>
      <ReactPaginate
        breakLabel="..."
        onPageChange={(e) => {
          handlePageClick(e);
          changePage(e.selected + 1);
          console.log(e.selected + 1);
          ScrollToTop();
        }}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        breakLinkClassName={"font-bold text-gray-400"}
        breakClassName={"w-8 h-8 flex items-center justify-center"}
        //main container
        containerClassName={`flex items-center gap-1`}
        //single page number
        pageLinkClassName={`px-2 h-8 text-md  border border-gray-300
                 flex items-center justify-center rounded-lg`}
        //previous page number
        previousLinkClassName={`hidden`}
        //next page number
        nextLinkClassName={`hidden`}
        //active page
        activeLinkClassName={"bg-[#022FB0] !important text-white"}
        forcePage={currentPage}
      />
    </>
  );
}
