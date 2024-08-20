import { SvgXml } from "react-native-svg";

export const RemitaSvg = () => {
  const svgMarkup = `
<svg width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="49" height="16" fill="url(#pattern0_1_431)"/>
<defs>
<pattern id="pattern0_1_431" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1_431" transform="matrix(0.00181406 0 0 0.00555556 -0.00521542 0)"/>
</pattern>
<image id="image0_1_431" width="557" height="180" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>




  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;
  return <SvgImage />;
};
