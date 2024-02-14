import {createBrowserRouter} from "react-router-dom";

import Client from "../layouts/Client";
import TodosPage from "../pages/TodosPage";
import CommentsPage from "../pages/CommentsPage";
import AlbumsPage from "../pages/AlbumsPage";
import Post from "../components/postsContainer/Post";

const router = createBrowserRouter([
    {
        path: '', element: <Client/>, children: [
            {
                path: 'todos', element: <TodosPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {
                        path: 'root_post', element: <Post/>
                    }
                ]
            },
            {
                path: 'albums', element: <AlbumsPage/>
            }
        ]
    }
])

export {router}