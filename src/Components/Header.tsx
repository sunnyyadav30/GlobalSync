import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import { ModeContext, ModeType } from "../App";
import { DARK_THEME, LIGHT_THEME } from "../utils/colors";

const StyledHeader = styled("header")<{ mode: ModeType }>(({ mode }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "10px 20px",
	position: "relative",
	boxShadow: "0 0 10px " + (mode === "light" ? LIGHT_THEME.lightGrey : DARK_THEME.boxShadow)
}));

const Header = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const { mode, changeMode } = useContext(ModeContext);

	useEffect(() => {
		changeMode(loading ? "light" : "dark");
	}, [loading]);

	return (
		<StyledHeader mode={mode}>
			<h3>Global Sync</h3>
			<FormControlLabel
				sx={{ display: "block" }}
				control={
					<Switch
						checked={loading}
						onChange={() => setLoading(!loading)}
						name="loading"
						color="primary"
					/>
				}
				label={mode}
			/>
		</StyledHeader>
	);
};

export default Header;
