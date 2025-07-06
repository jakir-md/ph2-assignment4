import { useGetBorrowSummaryQuery } from "../../redux/api/baseApi";
import type { IBorrowSummary } from "../../types";

export default function BorrowSummary() {
  const { isLoading, data } = useGetBorrowSummaryQuery(undefined, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  if (isLoading) {
    return (
      <div className="mx-auto my-20 w-10">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="md:w-3/4 mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>ISBN</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((item:IBorrowSummary, indx: number) => (
            <tr key={indx}>
              <th>{indx + 1}</th>
              <th>{item.book.title}</th>
              <td>{item.book.isbn}</td>
              <td>{item.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
