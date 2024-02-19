import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/usersPage";
import UsersDetailsPage from "./pages/usersDetailsPage";
import {loaders} from "./services/loaders";
import PostsofCurrentUser from "./components/postsContainer/PostsofCurrentUser";
import PostDetailsPage from "./pages/postDetailsPage";
import Comments from "./components/commentsComponent/Comments";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
            index:true, element: <Navigate to={'users'}/>
        },
            {
                path: 'users', element: <UsersPage/>, loader: () => loaders.getAll()
            },
            {
                path: 'users/:id', element: <UsersDetailsPage/>, children: [
                    {
                        path: 'postsTitle', element: <PostsofCurrentUser/>,
                    }
                ]
            },
            {
                path: 'posts', element: <PostDetailsPage/>, children: [
                    {
                        path: ':postId/comments', element: <Comments/>
                    }
                ]
            }
        ]
    }
])

export {router}