import { Box, Flex, Heading} from "@chakra-ui/react";
import StartingPageWelcomeCard from "../components/StartingPageWelcomeCard";
import QuestionsGrid from "../components/QuestionsGrid";
import questions from "../data/questions";
import LinksList from "../components/LinksList";

const StartingPage = () => {
  return (
    <>
      <Flex gap={4} flexDirection={{ sm: "column", md: "row" }}>
        <StartingPageWelcomeCard
          title={"C# interview questions"}
          description={"Prepare to your C# interview."}
          url={""}
          colorScheme="green"
        />
        <StartingPageWelcomeCard
          title={"Master your F#"}
          description={"Answer F# questions from professionals."}
          url=""
          colorScheme="pink"
        />
      </Flex>
      <Box>
        <Heading size="lg" padding={4}>
          Categories
        </Heading>
        <LinksList
          links={[
            { label: "Newbie", url: "" },
            { label: "Internals", url: "" },
            { label: "Soft skills", url: "" },
            { label: "CLR", url: "" },
            { label: "Trending", url: "" },
            { label: "Extreme", url: "" },
          ]}
          paddingX="2vw"
          flexDirection="row"
          maxWidth="45vw"
          linkChakraProps={{
            fontSize: "xl",
            color: "teal.400",
            marginRight: "1vw",
          }}
        />
      </Box>

      <QuestionsGrid title={"Hot 🔥"} questions={questions} paddingY="8px" />
    </>
  );
};

export default StartingPage;
