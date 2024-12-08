/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Text, Box } from "@react-three/drei";
import PropTypes from "prop-types";

/**
 * A 3D button component that renders a box with a text label and a
 * standard material that changes color when the button is hovered.
 *
 * @param {string} text The text to display on the button.
 * @param {function} onClick A function to call when the button is clicked.
 * @param {number[]} position The position of the button in 3D space.
 * @param {number[]} size The size of the button in 3D space.
 * @param {Object} colors An object with the colors to use for the button.
 *   The object should have two properties: "default" and "hovered", both
 *   of which should be strings representing the hex color to use for the
 *   button in its default and hovered states.
 * @param {number} fontSize The size of the text on the button.
 * @param {string} font The font to use for the button text.
 * @param {string} fontColor The color of the text on the button.
 */
const Button3D = ({
  text,
  onClick,
  position,
  size,
  colors,
  fontSize,
  font,
  fontColor,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <Box
        args={size}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = "default";
        }}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          attach="material"
          color={hovered ? colors.hovered : colors.default}
        />
      </Box>
      <Text
        position={[0, 0, 0.3]}
        font={font}
        fontSize={fontSize}
        color={fontColor}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

Button3D.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.array.isRequired,
  size: PropTypes.array.isRequired,
  colors: PropTypes.object.isRequired,
  fontSize: PropTypes.number.isRequired,
  font: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
};

export default Button3D;
