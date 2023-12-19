import {Box, Divider, Text} from "@chakra-ui/react";
import {algoTasks} from "../../data/algoTasks.ts";
import {AlgorithmTask} from "../../models/AlgorithmTask.ts";

interface Props {
	algoTask: AlgorithmTask;
}

export const Description = ({algoTask}: Props) => {
	return (
		<>
			<Text paddingBottom={5} lineHeight={4}>{algoTask.description}</Text>

			<Box paddingTop="3vh"/>

			<Divider/>
			<Box paddingTop="3vh"/>

			<Text>Similar questions</Text>
			<Box paddingTop="3vh"/>

		</>
	)
}