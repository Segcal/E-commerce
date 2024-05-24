import ErrorPage from "../pages/error-page";
import Layout from "../pages/LandingPage/layout";
import LandingPage from "../pages/LandingPage/index"
import Services from "../pages/Services";

export const Router = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: "/services",
                element: <Services />
            }
        ]
    }
]