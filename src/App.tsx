import { ChakraProvider, Heading } from "@chakra-ui/react";
import theme from "./theme";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Heading as="h1" size="4xl" textAlign="center" py={4}>
				Rune Keeper
			</Heading>
		</ChakraProvider>
	);
}

export default App;
