import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { ModeContext, ModeType } from "../App";
import { DARK_THEME, LIGHT_THEME } from "../utils/colors";

const StyledFooter = styled("footer")<{ mode: ModeType }>(({ mode }) => ({
	padding: "10px 20px 30px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	backgroundColor: mode === "light" ? LIGHT_THEME.lightGrey : DARK_THEME.darkGrey,
	".content": {
		maxWidth: "80%"
	}
}));

const Footer = () => {
	const { mode } = useContext(ModeContext);
	return (
		<StyledFooter mode={mode}>
			<div className="content">
				<h3>Lorem ipsum</h3>
				<ul>
					<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
					<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
					<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
					<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
				</ul>
			</div>
		</StyledFooter>
	);
};

export default Footer;
