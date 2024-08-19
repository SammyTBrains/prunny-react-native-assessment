import { SvgXml } from "react-native-svg";

export const UserInfoSummaryDesign = () => {
  const svgMarkup = `
<svg width="353" height="183" viewBox="0 0 353 183" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="6" width="325" height="155" rx="5" fill="#208220"/>
<mask id="mask0_2032_81" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="6" width="325" height="155">
<rect y="6" width="325" height="155" rx="5" fill="#208220"/>
</mask>
<g mask="url(#mask0_2032_81)">
<path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M338.749 0L296.404 72.2652L254.059 0H338.749ZM397.808 74.0629L356.086 1.79764L314.363 74.0629H397.808ZM289.95 97.0727L248.227 24.8075L206.505 97.0727H289.95ZM296.404 109.656L338.749 181.921H254.059L296.404 109.656ZM236.722 183L278.445 110.735H195L236.722 183ZM386.303 84.8487L344.581 157.114L302.859 84.8487H386.303Z" fill="#333333"/>
</g>
</svg>




  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;
  return <SvgImage />;
};
