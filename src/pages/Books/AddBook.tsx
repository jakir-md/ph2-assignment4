import { useState } from "react";
import { useNavigate } from "react-router";
import { useAddABookMutation } from "../../redux/api/baseApi";
import toast from "react-hot-toast";

export default function AddBook() {
  const [myBook, setMyBook] = useState({
    title: "",
    author: "",
    isbn: "",
    genre: "",
    description: "",
    available: true,
    copies: "",
  });

  const navigate = useNavigate();
  const [addABook, {}] = useAddABookMutation(undefined);
  const [validationError, setValidationError] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await addABook(myBook);
    if (res.error) {
      setValidationError(true);
    } else {
        navigate("/allBooks");
        toast.success('Book Added Successfully!');
    };
  };

  return (
    <div className="md:w-3/4 w-11/12 mx-auto">
      <h1 className="text-center font-bold text-3xl py-5">Add A New Book</h1>
      <form className="fieldset" onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-5">
            <label className="label">Title</label>
            <input
              type="text"
              className="w-full input focus:outline-0"
              placeholder="Book Title"
              defaultValue={myBook.title}
              onChange={(e) => {
                setMyBook({ ...myBook, title: e.target.value });
                setValidationError(false);
              }}
            />
          </div>
          <div className="w-full col-span-2">
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-md border px-2">
              <legend className="fieldset-legend">Availability</legend>
              <label className="label pt-0">
                <input
                  type="checkbox"
                  checked={myBook.available}
                  onChange={() => {
                    setMyBook({
                      ...myBook,
                      available: !myBook.available,
                    });
                    setValidationError(false);
                  }}
                  className="checkbox"
                />
                {myBook.available ? (
                  <span>Available</span>
                ) : (
                  <span>Unavailable</span>
                )}
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
                setValidationError(false);
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
              onChange={(e) => {
                setMyBook({ ...myBook, isbn: e.target.value });
                setValidationError(false);
              }}
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
                setValidationError(false);
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
                setValidationError(false);
              }}
            />
          </div>
        </div>
        <div className="">
          <label className="label">Description</label>
          <textarea
            className="textarea w-full"
            placeholder="Description"
            onChange={(e) => {
              setMyBook({
                ...myBook,
                description: e.target.value,
              });
              setValidationError(false);
            }}
          ></textarea>
        </div>
        {validationError && (
          <span className="text-xs font-bold text-red-500">
            Please fill out all the fields correctly
          </span>
        )}
        <button className="btn btn-neutral w-1/4 mx-auto mt-4">Add</button>
      </form>
    </div>
  );
}
