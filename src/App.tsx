import QuestionDetailsPage from "./components/QuestionDetailsPage";
import QuestionsGrid from "./components/QuestionsGrid";
import questions from "./data/questions";

function App() {
  return (
    <>
      <QuestionDetailsPage question={questions[0]} />
    </>
  );
}

export default App;
