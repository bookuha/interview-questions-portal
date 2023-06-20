import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import StartingPage from "./pages/StartingPage";
import QuestionDetailsPage from "./pages/QuestionDetailsPage";
import questions from "./data/questions";

function App() {
  return (
    <>
      <Navbar />
      <Box paddingX="35px" paddingY="10px">
        <StartingPage/>
        <QuestionDetailsPage question={questions[0]} />
      </Box>
    </>
  );
}

export default App;
