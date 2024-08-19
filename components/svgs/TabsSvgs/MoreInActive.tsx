import { SvgXml } from "react-native-svg";

export const MoreInActive = () => {
  const svgMarkup = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<rect x="0.5" y="0.499298" width="5.81623" height="5.81623" rx="1.5" stroke="#B7B7B7"/>
<rect x="0.5" y="-0.5" width="5.81623" height="5.81623" rx="1.5" transform="matrix(1 0 0 -1 9.18488 5.81525)" fill="#B7B7B7" stroke="#B7B7B7"/>
<rect x="0.5" y="9.68332" width="5.81623" height="5.81623" rx="1.5" stroke="#B7B7B7"/>
<rect x="0.5" y="-0.5" width="5.81623" height="5.81623" rx="1.5" transform="matrix(1 0 0 -1 9.18488 14.9993)" stroke="#B7B7B7"/>
</g>
</svg>


  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;
  return <SvgImage />;
};
