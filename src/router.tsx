import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./components/Layout/Layout.tsx"
import StartingPage from "./pages/StartingPage.tsx";
import {QuestionsPage} from "./pages/QuestionsPage.tsx";
import {QuestionDetailsPageV2} from "./pages/QuestionDetailsPageV2.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {RequireAuth} from "react-auth-kit";
import {AlgoTaskDetailsPage} from "./pages/AlgoTaskDetailsPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element: <StartingPage/>},
            {path: "questions", element:
                    <RequireAuth loginPath="/login">
                        <QuestionsPage/>
                    </RequireAuth>},
            {path: "questions/:questionId", element:
                    <RequireAuth loginPath="/login">
                        <QuestionDetailsPageV2/>
                    </RequireAuth>},
            {path: "algorithms/1", element:
                    <RequireAuth loginPath="/login">
                        <AlgoTaskDetailsPage/>
                    </RequireAuth>}
        ]
    },
    {
        path: "/login",
        element: <LoginPage/>,
    }
]);

export default router;