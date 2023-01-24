import { Box } from "@chakra-ui/react";
import { ComponentType } from "react";
import { Stage, Layer, Circle, Rect } from "react-konva";

const sizes = {
	height: 500,
	width: 500,
	gridX: 4,
	gridY: 4,
};

const CombatGrid: ComponentType = () => {
	return (
		<Box border="1px" width={sizes.width} height={sizes.height}>
			<Stage width={sizes.width} height={sizes.height}>
				<Layer>
					<Rect width={50} height={50} fill="blue" />
					<Circle x={200} y={200} stroke="black" radius={50} />
				</Layer>
			</Stage>
		</Box>
	);
};

export default CombatGrid;
