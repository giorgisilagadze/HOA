import { PrimaryContext } from "@/utils/MainContext";
import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

interface Prop {
  dataLength: number;
  itemsPerPage: number;
  children: any;
  both: boolean;
  changePage?: (arg1: number) => {};
  adminChangePage?: (arg1: number) => {};
}

export default function PagePagination({
  dataLength,
  itemsPerPage = 20,
  children,
  both,
  changePage,
  adminChangePage,
}: Prop) {
  const { filteredCars, handleFilter }: any = useContext(PrimaryContext);
  //current Page
  const [currentPage, setCurrentPage] = useState(0);
  //calculate how many pages will be there
  const pageCount = Math.ceil(dataLength / itemsPerPage);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // get current page number
  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected);
    ScrollToTop();
  };

  useEffect(() => {
    if (filteredCars.length !== 0) {
      setCurrentPage(1);
    }
  }, []);

  return (
    <>
      {both && (
        <ReactPaginate
          breakLabel="..."
          onPageChange={(e) => {
            handlePageClick(e);
            adminChangePage && adminChangePage(e.selected + 1);
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
          if (filteredCars.length !== 0) {
            handleFilter(e.selected + 1);
          } else {
            changePage && changePage(e.selected + 1);
          }
          adminChangePage && adminChangePage(e.selected + 1);
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
