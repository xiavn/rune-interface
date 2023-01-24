import { ChakraProvider, Heading } from "@chakra-ui/react";
import CombatGrid from "./combat-grid";
import theme from "./theme";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Heading as="h1" size="4xl" textAlign="center" py={4}>
				Rune Keeper
			</Heading>
			<CombatGrid />
		</ChakraProvider>
	);
}

export default App;
