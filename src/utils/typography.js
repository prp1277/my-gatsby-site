import Typography from "typography";
import irvingTheme from "typography-theme-irving";

irvingTheme.baseFontSize = `18px`;
irvingTheme.headerFontFamily = ["Trebuchet MS Bold"];
irvingTheme.bodyFontFamily = ["Trebuchet MS"];
irvingTheme.blockMarginBottom = `1.5rem`;

const typography = new Typography(irvingTheme);

export default typography;

/** Additional Themes:
 *  import bootstrapTheme from "typography-theme-bootstrap"
 *  import moragaTheme from "typography-theme-moraga"
 *  import moragaTheme from "typography-theme-irving"
 *  import wikipediaTheme from "typography-theme-wikipedia";
 *
 * <--- Template --->
 * import Typography from "typography";
 * import {X}Theme from "typography-theme-{X}";
 * {X}Theme.baseFontSize = `{i}px`;
 * const typography = new Typography({X}Theme);
 */
