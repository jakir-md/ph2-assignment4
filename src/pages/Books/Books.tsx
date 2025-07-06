import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import {
  useBorrowABookMutation,
  useDeleteABookMutation,
  useGetAllBooksQuery,
  useUpdateBookByIdMutation,
} from "../../redux/api/baseApi";
import type { IBook } from "../../types";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function Books() {
  const [myBook, setMyBook] = useState({
    _id: "",
    title: "",
    author: "",
    isbn: "",
    genre: "",
    description: "",
    available: false,
    copies: "",
  });

  const [borrowDate, setBorrowDate] = useState(new Date());
  const [borrowError, setBorrowError] = useState(false);
  // const {} =

  const { isLoading, data } = useGetAllBooksQuery(undefined, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const [borrowABook, {}] = useBorrowABookMutation(undefined);
  const [deleteABook, {}] = useDeleteABookMutation(undefined);
  const [updateBookById, {}] = useUpdateBookByIdMutation(undefined);

  const navigate = useNavigate();

  const handleDelete = (bookId: string) => {
    console.log("delete", bookId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        const result = await deleteABook(bookId);
        console.log(result);
      }
    });
  };

  const handleEdit = (book: IBook) => {
    const doc = document.getElementById("my_modal_5") as HTMLDialogElement;
    setMyBook(book);
    console.log("current book", myBook);
    doc.showModal();
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const doc = document.getElementById("my_modal_5") as HTMLDialogElement;
    doc.close();
    const updateBook = async () => {
      await updateBookById({
        bookId: myBook._id,
        bookInfo: myBook,
      });
    };
    updateBook();
    toast.success("Book Updated Successfully!");
  };

  const handleBorrow = (book: IBook) => {
    const doc = document.getElementById("my_modal_6") as HTMLDialogElement;
    setMyBook(book);
    doc.showModal();
  };

  const handleBorrowSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj = {
      book: myBook._id,
      quantity: parseInt(myBook.copies),
      dueDate: borrowDate.toISOString(),
    };

    console.log(obj.dueDate);
    const res = await borrowABook(obj);
    if (res.error) {
      setBorrowError(true);
    } else {
      const doc = document.getElementById("my_modal_6") as HTMLDialogElement;
      setBorrowError(false);
      toast.success("Successfully Borrowed!");
      navigate("/borrowSummary");
      doc.close();
    }
  };

  if (isLoading) {
    return (
      <div className="mx-auto my-20 w-10">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
          <div className="modal-box rounded-md">
            <h1 className="text-2xl font-bold text-center">Update Book</h1>
            <div className="modal-action">
              <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <div className="card-body px-4">
                  <form className="fieldset" onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-7 gap-2 md:gap-4">
                      <div className="col-span-5">
                        <label className="label">Title</label>
                        <input
                          type="text"
                          className="w-full text-sm border-1 border-base-300 px-2 py-3 rounded-md focus:outline-0"
                          placeholder="Book Title"
                          defaultValue={myBook.title}
                          onChange={(e) => {
                            setMyBook({ ...myBook, title: e.target.value });
                          }}
                        />
                      </div>
                      <div className="col-span-2">
                        <fieldset className="fieldset bg-base-100 border-base-300 rounded-md border px-2">
                          <legend className="fieldset-legend">
                            Availability
                          </legend>
                          <label className="label pt-0">
                            <input
                              type="checkbox"
                              checked={myBook.available}
                              onChange={() => {
                                setMyBook({
                                  ...myBook,
                                  available: !myBook.available,
                                });
                              }}
                              className="checkbox"
                            />
                            <div className="hidden md:block">
                              {myBook.available ? (
                                <span>Available</span>
                              ) : (
                                <span>Unavailable</span>
                              )}
                            </div>
                          </label>
                        </fieldset>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="label">Author</label>
                        <input
                          type="text"
                          className="w-full input focus:outline-0"
                          placeholder="Author"
                          name="author"
                          defaultValue={myBook.author}
                          onChange={(e) => {
                            setMyBook({ ...myBook, author: e.target.value });
                          }}
                        />
                      </div>
                      <div>
                        <label className="label">ISBN</label>
                        <input
                          type="text"
                          className="w-full input focus:outline-0"
                          placeholder="ISBN"
                          name="isbn"
                          defaultValue={myBook.isbn}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="label">Genre</label>
                        <input
                          type="text"
                          className="w-full input focus:outline-0"
                          placeholder="Genre"
                          name="genre"
                          defaultValue={myBook.genre}
                          onChange={(e) => {
                            setMyBook({ ...myBook, genre: e.target.value });
                          }}
                        />
                      </div>
                      <div>
                        <label className="label">Copies</label>
                        <input
                          type="text"
                          className="w-full input focus:outline-0"
                          placeholder="Copies"
                          name="copies"
                          defaultValue={myBook.copies}
                          onChange={(e) => {
                            setMyBook({
                              ...myBook,
                              copies: e.target.value.toString(),
                              available: parseInt(e.target.value) > 0,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <button className="btn btn-neutral w-1/4 mx-auto mt-4">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <dialog id="my_modal_6" className="modal  modal-bottom sm:modal-middle">
          <div className="modal-box rounded-md">
            <h1 className="text-2xl font-bold text-center">Borrow Book</h1>
            <div className="modal-action">
              <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <div className="card-body">
                  <form className="fieldset" onSubmit={handleBorrowSubmit}>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="label">Copies</label>
                        <input
                          type="text"
                          className="w-full border-1 border-base-300 px-2 py-3 rounded-md focus:outline-0"
                          placeholder="Copies"
                          name="copies"
                          defaultValue={myBook.copies}
                          onChange={(e) => {
                            setMyBook({
                              ...myBook,
                              copies: e.target.value.toString(),
                            });
                            setBorrowError(false);
                          }}
                        />
                        {borrowError && (
                          <span className="text-xs text-red-500 font-bold mt-2">
                            Requested Copies are out of stock
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col items-start">
                        <label className="label">Due Date</label>
                        <input
                          type="datetime-local"
                          className="border-1 border-base-300 px-2 py-3 rounded-md w-full"
                          onChange={(e) => {
                            setBorrowDate(new Date(e.target.value));
                          }}
                        />
                      </div>
                    </div>
                    <button className="btn bg-[#06923E] text-white w-1/4 mx-auto mt-4">
                      Borrow
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setBorrowError(false)}>close</button>
          </form>
        </dialog>
        <div className="lg:block hidden">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>ISBN</th>
                <th>Copies</th>
                <th>Availability</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.books.map((book: IBook, indx: number) => (
                <tr key={indx}>
                  <th>{indx + 1}</th>
                  <th>{book.title}</th>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.isbn}</td>
                  <td>{book.copies}</td>
                  <td>
                    {book.available ? (
                      <TiTick className="w-6 h-6 text-green-500" />
                    ) : (
                      <RxCross2 className="w-6 h-6 text-red-500" />
                    )}
                  </td>
                  <td className="flex gap-2 items-center justify-around">
                    <FaEdit
                      onClick={() => handleEdit(book)}
                      className="w-6 h-6 hover:cursor-pointer"
                    />
                    <MdDelete
                      onClick={() => handleDelete(book._id)}
                      className="w-6 h-6 hover:cursor-pointer text-red-500"
                    />
                    <button
                      onClick={() => handleBorrow(book)}
                      className={`btn bg-[#06923E] text-white disabled:cursor-not-allowed`}
                      disabled={!book.available}
                    >
                      Borrow
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {data.books.map((book: IBook, indx: number) => (
              <div
                key={indx}
                className="border-1 border-base-300 rounded-sm shadow p-4 flex flex-col justify-between"
              >
                <div className="mb-4">
                  <h2 className="text-lg font-semibold mb-1">{book.title}</h2>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Author:</span> {book.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Genre:</span> {book.genre}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">ISBN:</span> {book.isbn}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Copies:</span> {book.copies}
                  </p>
                  <p className="text-sm flex gap-1 items-center">
                    <span className="font-medium">Availability:</span>{" "}
                    {book.available ? (
                      <TiTick className="w-5 h-5 text-green-500" />
                    ) : (
                      <RxCross2 className="w-5 h-5 text-red-500" />
                    )}
                  </p>
                </div>

                <div className="flex justify-end gap-2">
                  <div className="text-sm px-3 py-1 bg-yellow-100 border border-yellow-500 text-yellow-700 rounded hover:bg-yellow-200">
                    <FaEdit
                      onClick={() => handleEdit(book)}
                      className="w-6 h-6 hover:cursor-pointer"
                    />
                  </div>
                  <div className="text-sm px-3 py-1 bg-red-100 border border-red-500 text-red-700 rounded hover:bg-red-200">
                    <MdDelete
                      onClick={() => handleDelete(book._id)}
                      className="w-6 h-6 hover:cursor-pointer text-red-500"
                    />
                  </div>
                  <button
                    onClick={() => handleBorrow(book)}
                    className={`btn bg-[#06923E] text-white disabled:cursor-not-allowed`}
                    disabled={!book.available}
                  >
                    Borrow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
