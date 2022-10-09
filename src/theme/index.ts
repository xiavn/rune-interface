import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";

const overrides = {
    ...foundations,
};

export default extendTheme(overrides);
