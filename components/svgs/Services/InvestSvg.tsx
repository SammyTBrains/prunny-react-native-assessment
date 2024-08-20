import { SvgXml } from "react-native-svg";

export const InvestSvg = () => {
  const svgMarkup = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3V21H21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 9L14 14L10 10L7 13" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;
  return <SvgImage />;
};
