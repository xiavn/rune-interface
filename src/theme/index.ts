import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";
import { semanticTokens } from "./semantic-tokens";
import { styles } from "./styles";

const overrides = {
	...foundations,
	semanticTokens,
	styles,
};

export default extendTheme(overrides);
