import { styled } from "@mui/material/styles";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";
import { useContext } from "react";
import { DARK_THEME, LIGHT_THEME } from "./utils/colors";

const StyledApp = styled(Box)<{ mode: "light" | "dark" }>(({ mode }) => ({
	width: "100%",
	height: "100vh",
	color: mode === "dark" ? DARK_THEME.textColor : LIGHT_THEME.textColor,
	backgroundColor: mode === "dark" ? DARK_THEME.bgColor : LIGHT_THEME.bgColor
}));

function App() {
	const { mode } = useContext(ModeContext);

	return (
		<StyledApp mode={mode}>
			<Header />
			<MainContent />
			<Footer />
		</StyledApp>
	);
}

export default App;
