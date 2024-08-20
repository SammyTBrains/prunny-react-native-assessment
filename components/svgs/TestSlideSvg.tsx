import { SvgXml } from "react-native-svg";

export const TestSlideSvg = () => {
  const svgMarkup = `
<svg width="51" height="6" viewBox="0 0 51 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3" cy="3" r="3" fill="#208220"/>
<circle opacity="0.5" cx="25.2501" cy="3" r="3" fill="#B7B7B7"/>
<circle opacity="0.5" cx="47.5002" cy="3" r="3" fill="#B7B7B7"/>
</svg>


  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;
  return <SvgImage />;
};
