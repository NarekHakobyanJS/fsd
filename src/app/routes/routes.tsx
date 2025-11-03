import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../widgets/mainLayout";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout /> ,
        children : [
            {
                index : true,
                element : <>Home</>,
            },
            {
                path : '/:id',
                element : <>FIlms</>,
            },
        ]
    }
])