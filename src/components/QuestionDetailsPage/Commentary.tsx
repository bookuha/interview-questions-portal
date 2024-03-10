import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";
import { Commentary as CommentaryEntity } from "../../models/Commentary.ts";
import { useState } from "react";
import useCreateCommentary from "../../hooks/useCreateCommentary.ts";
import moment from "moment";

interface Props {
  commentary: CommentaryEntity;
}

const Commentary = ({ commentary }: Props) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [areRepliesVisible, setAreRepliesVisible] = useState(false);

  const { mutate } = useCreateCommentary(commentary.questionId);
  const toast = useToast();

  const handleReplyClick = () => {
    setIsReplying(!isReplying);
  };

  const handleCancelReplyClick = () => {
    setIsReplying(false);
  };

  const handleReplyButtonClick = async () => {
    try {
      if (replyContent.trim() !== "") {
        // Call the mutate function to create a new commentary
        await mutate({ content: replyContent, replyToId: commentary.id });

        // Clear the input field after submitting the comment
        setReplyContent("");
        setIsReplying(!isReplying);
        setAreRepliesVisible(true);
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "An error occurred while creating the commentary.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleShowReplies = () => {
    setAreRepliesVisible(!areRepliesVisible);
  };

  return (
    <Box paddingY="1vh">
      <HStack>
        <Text fontSize="md" color={"green.300"}>
          {commentary.creatorName}
        </Text>
        <Text fontSize="md" color={"darkgray"}>
          {moment(commentary.created).fromNow()}
        </Text>
      </HStack>
      <Text fontSize="md">{commentary.content}</Text>
      <HStack>
        <HStack>
          <Icon boxSize="4" as={AiFillLike} />
          <Text fontSize="sm">{commentary.likesCount}</Text>
        </HStack>
        <Link onClick={handleReplyClick}>
          <Text fontSize="sm" color="gray.300">
            Reply
          </Text>
        </Link>
      </HStack>

      {isReplying && (
        <Box mt="2">
          <Input
            variant="flushed"
            placeholder="Type your reply..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
          />
          <HStack width="100%" justifyContent="right">
            <Button mt="2" size="sm" onClick={handleReplyButtonClick}>
              Submit Reply
            </Button>
            <Button mt="2" size="sm" onClick={handleCancelReplyClick}>
              Cancel
            </Button>
          </HStack>
        </Box>
      )}

      {commentary.replies && commentary.replies.length > 0 && (
        <Link onClick={handleShowReplies}>
          <Text fontSize="sm" color="teal.300">
            Show/Hide replies
          </Text>
        </Link>
      )}

      {/* Render replies recursively */}
      {areRepliesVisible &&
        commentary.replies &&
        commentary.replies.length > 0 && (
          <Box paddingLeft="4">
            {commentary.replies.map((reply) => (
              <Commentary key={reply.id} commentary={reply} />
            ))}
          </Box>
        )}
    </Box>
  );
};

export default Commentary;
