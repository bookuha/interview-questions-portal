import { HTMLChakraProps, Stack } from "@chakra-ui/react";
import Commentary from "./Commentary";

interface Props extends HTMLChakraProps<"div"> {}

const CommentsSection = ({ ...chakraProps }: Props) => (
  <Stack {...chakraProps}>
    <Commentary />
    <Commentary />
    <Commentary />
    <Commentary />
  </Stack>
);

export default CommentsSection;
