import {Box, Icon, Link, VStack} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {BiBox, BiMenu, BiSearch, BiStats} from "react-icons/bi";
import {FiSettings} from "react-icons/fi";

export const Aside = () => {
	return (
		<VStack backgroundColor="#222224" paddingY="4vh" gap={6} height="100%">
			<RouterLink to="/"><Icon as={BiMenu} boxSize="2.2vw"/></RouterLink>
			<Box boxSize="1.2vw"/>
			<RouterLink to="/questions"><Icon as={BiSearch} boxSize="2.2vw"/></RouterLink>
			<Link><Icon as={BiBox} boxSize="2.2vw"/></Link>
			<Link><Icon as={BiStats} boxSize="2.2vw"/></Link>
			<Link><Icon as={FiSettings} boxSize="2.2vw"/></Link>
		</VStack>
	)
}