import { styled } from "@mui/material/styles";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { DARK_THEME, LIGHT_THEME } from "./utils/colors";

export type ModeType = "light" | "dark";

interface ModeContextType {
	mode: ModeType;
	changeMode: (value: ModeType) => void;
}

export const ModeContext = createContext<ModeContextType>({
	mode: "light",
	changeMode: () => null
});

const StyledApp = styled(Box)<{ mode: "light" | "dark" }>(({ mode }) => ({
	width: "100%",
	height: "100vh",
	color: mode === "dark" ? DARK_THEME.textColor : LIGHT_THEME.textColor,
	backgroundColor: mode === "dark" ? DARK_THEME.bgColor : LIGHT_THEME.bgColor
}));

function App() {
	const [mode, setMode] = useState<ModeType>("dark");

	const theme = useMemo(() => {
		return {
			mode,
			changeMode: (value: ModeType) => {
				setMode(value);
			}
		};
	}, [mode]);

	return (
		<ModeContext.Provider value={theme}>
			<StyledApp mode={mode}>
				<Header />
				<MainContent />
				<Footer />
			</StyledApp>
		</ModeContext.Provider>
	);
}

export default App;
