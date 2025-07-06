import { createBrowserRouter } from "react-router";
import App from "../App";
import Books from "../pages/Books/Books";
import BorrowSummary from "../pages/borrow/BorrowSummary";
import AddBook from "../pages/Books/AddBook";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                element: <Books></Books>
            },
            {
                path: "/allBooks",
                element: <Books></Books>
            },
            {
                path: "/borrowSummary",
                element: <BorrowSummary></BorrowSummary>
            },
            {
                path: "/addBook",
                Component: AddBook
            }
        ]
    }
])

export default routes;