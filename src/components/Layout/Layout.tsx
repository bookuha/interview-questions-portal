import {Box, Grid, GridItem, Link, Show, Text} from "@chakra-ui/react";
import Navbar from "./Navbar.tsx";
import {Outlet, useLocation} from "react-router-dom";
import {Aside} from "./Aside.tsx";

export const Layout = () => {

	const {pathname} = useLocation();

	return (
		<Grid
			templateAreas={{
				base: `"nav" 
                       "main"`,
				lg: `"aside nav"
                     "aside main"`, // > 1024px
			}}
			templateColumns={{
				base: "1fr",
				lg: "4vw 1fr",
			}}
			templateRows={{
				lg: '7vh 1fr'
			}}
			height="100vh">
			<GridItem area="nav">
				<Navbar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside">
					<Aside/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<Box paddingX="4vw" paddingY="2px">
					<Text fontSize="xl">IQP <Link color="teal.300">{pathname}</Link></Text>
					<Outlet/>
				</Box>
			</GridItem>
		</Grid>
	)
}