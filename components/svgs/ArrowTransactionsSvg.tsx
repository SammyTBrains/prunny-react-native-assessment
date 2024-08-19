import { SvgXml } from "react-native-svg";

export const ArrowTransactionsSvg = () => {
  const svgMarkup = `
<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.3" cx="17" cy="17" r="17" fill="#B7B7B7"/>
<g clip-path="url(#clip0_1_368)">
<path d="M22.75 10.25L15.875 17.125" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.75 10.25L18.375 22.75L15.875 17.125L10.25 14.625L22.75 10.25Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_368">
<rect width="15" height="15" fill="white" transform="translate(9 9)"/>
</clipPath>
</defs>
</svg>



  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;
  return <SvgImage />;
};
