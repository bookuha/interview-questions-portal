import {
  Text,
  Card,
  CardBody,
  Heading,
  Button,
  Box,
  CardFooter,
  Link,
} from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  url: string;
  colorScheme: "green" | "pink";
}

const StartingPageWelcomeCard = ({
  title,
  description,
  url,
  colorScheme,
}: Props) => {
  return (
    <Card minHeight="245px">
      <CardBody>
        <Box>
          <Heading>{title}</Heading>
          <Text paddingTop={2}>{description}</Text>
        </Box>
      </CardBody>
      <CardFooter>
        <Button colorScheme={colorScheme} variant="ghost">
          <Link href={url}>Start</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StartingPageWelcomeCard;
