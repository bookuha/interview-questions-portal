import {Box, Button, Divider, HStack, TabList, Tabs, Text, Tab, TabPanel, TabPanels} from "@chakra-ui/react";
import {TaskHeaderInfo} from "../components/AlgoTaskDetailsPage/TaskHeaderInfo.tsx";
import {algoTasks} from "../data/algoTasks.ts";
import {EditorAndResultsSection} from "../components/AlgoTaskDetailsPage/EditorAndResultsSection.tsx";
import {useState} from "react";
import {Description} from "../components/AlgoTaskDetailsPage/Description.tsx";

export const AlgoTaskDetailsPage = () => {
	const [tabIndex, setTabIndex] = useState<number>(0);


	const handleSubmission = (code: string) => {
		console.log(code);
	}

	return (
		<>
			<HStack paddingY="6vh" alignItems="top" gap={4}>
				<Box flex="2">
					<TaskHeaderInfo
						algoTask={algoTasks[0]}/>

					<Tabs
						index={tabIndex}
						onChange={(index) => setTabIndex(index)}
						variant="line"
						colorScheme="teal">
						<TabList>
							<Tab>Info</Tab>
							<Tab>Results</Tab>
						</TabList>
						<Box paddingTop="3vh"/>
						<TabPanels>
						<TabPanel padding="0">
							<Description algoTask={algoTasks[0]}/>
						</TabPanel>
						<TabPanel padding="0">
							Your latest results:
							<Box paddingTop="3vh"/>
						</TabPanel>
						</TabPanels>
					</Tabs>

					<Divider/>
					<Text color="gray.600">Copyright ©️ 2023 IQP All rights reserved</Text>
				</Box>
				<EditorAndResultsSection
					algoTask={algoTasks[0]}
					onSubmit={handleSubmission}/>
			</HStack>
		</>
	)
}