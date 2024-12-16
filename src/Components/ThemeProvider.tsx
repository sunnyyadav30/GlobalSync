import React, { createContext, useMemo, useState } from "react";

export type ModeType = "light" | "dark";

interface ModeContextType {
	mode: ModeType;
	changeMode: (value: ModeType) => void;
}

export const ModeContext = createContext<ModeContextType>({
	mode: "dark",
	changeMode: () => null
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [mode, setMode] = useState<ModeType>("dark");

	const theme = useMemo(() => {
		return {
			mode,
			changeMode: (value: ModeType) => {
				setMode(value);
			}
		};
	}, [mode]);

	return <ModeContext.Provider value={theme}>{children}</ModeContext.Provider>;
};

export default ThemeProvider;
