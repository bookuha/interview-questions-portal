import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import StartingPage from "./pages/StartingPage.tsx";
import { QuestionsPage } from "./pages/QuestionsPage.tsx";
import { QuestionDetailsPage } from "./pages/QuestionDetailsPage.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";
import { RequireAuth } from "react-auth-kit";
import { AlgoTaskDetailsPage } from "./pages/AlgoTaskDetailsPage.tsx";
import { CreateAlgoTaskPage } from "./pages/CreateAlgoTaskPage.tsx";
import { AlgoTasksPage } from "./pages/AlgoTasksPage.tsx";
import { CreateQuestionPage } from "./pages/CreateQuestionPage.tsx";
import { RegisterPage } from "./pages/RegisterPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <StartingPage /> },
      {
        path: "questions",
        element: (
          <RequireAuth loginPath="/login">
            <QuestionsPage />
          </RequireAuth>
        ),
      },
      {
        path: "questions/:questionId",
        element: (
          <RequireAuth loginPath="/login">
            <QuestionDetailsPage />
          </RequireAuth>
        ),
      },
      {
        path: "questions/create",
        element: (
          <RequireAuth loginPath="/login">
            <CreateQuestionPage />
          </RequireAuth>
        ),
      },
      {
        path: "algorithms",
        element: (
          <RequireAuth loginPath="/login">
            <AlgoTasksPage />
          </RequireAuth>
        ),
      },
      {
        path: "algorithms/:algoTaskId",
        element: (
          <RequireAuth loginPath="/login">
            <AlgoTaskDetailsPage />
          </RequireAuth>
        ),
      },
      {
        path: "algorithms/create",
        element: (
          <RequireAuth loginPath="/login">
            <CreateAlgoTaskPage />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
