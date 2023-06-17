import QuestionsGrid from "./components/QuestionsGrid";
import questions from "./data/questions";

function App() {
  return (
    <>
      <QuestionsGrid questions={questions} title={"Newbee"} />
    </>
  );
}

export default App;
