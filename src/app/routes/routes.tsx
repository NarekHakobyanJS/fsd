import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../widgets/mainLayout";
import { HomePage, FilmPage } from "../../pages";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout /> ,
        children : [
            {
                index : true,
                element : <HomePage />,
            },
            {
                path : '/:id',
                element : <FilmPage />
            },
        ]
    }
])