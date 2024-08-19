import { SvgXml } from "react-native-svg";

export const CreditCardActive = () => {
  const svgMarkup = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5Z" stroke="#208220" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 10H22" stroke="#208220" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;
  return <SvgImage />;
};
