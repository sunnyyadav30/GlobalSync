import { styled } from "@mui/material/styles";
import blackCat from "../assets/black-cat.png";
import whiteCat from "../assets/white-cat.png";
import { useContext } from "react";
import { DARK_THEME, LIGHT_THEME } from "../utils/colors";
import { ModeContext, ModeType } from "./ThemeProvider";

const StyledMainContent = styled("main")<{ mode: ModeType }>(({ mode }) => ({
	padding: "30px 20px",
	minHeight: "60vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: mode === "dark" ? DARK_THEME.bgColor : LIGHT_THEME.bgColor,
	".left-sec": {
		flex: "0.4",
		".img-sec": {
			padding: "10%",
			borderRadius: "50%",
			overflow: "hidden",
			width: "300px",
			height: "300px",
			backgroundColor: mode === "light" ? LIGHT_THEME.textColor : DARK_THEME.textColor,
			img: {
				width: "100%",
				height: "auto",
				borderRadius: "50%"
			}
		}
	},
	".right-sec": { flex: "0.6" },
	"@media (max-width: 767px)": {
		flexDirection: "column",
		".left-sec": {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			padding: "20px",
			".img-sec": {
				width: "300px",
				height: "300px"
			}
		},
		".right-sec": {}
	},
	"@media (max-width: 480px)": {
		".left-sec": {
			".img-sec": {
				width: "100%",
				height: "100%"
			}
		}
	}
}));

const MainContent = () => {
	const { mode } = useContext(ModeContext);

	return (
		<StyledMainContent mode={mode}>
			<div className="left-sec">
				<div className="img-sec">
					<img src={mode === "light" ? whiteCat : blackCat} />
				</div>
			</div>
			<div className="right-sec">
				<h1>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, dolores?
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem a ea
					accusamus consequuntur maxime deserunt reiciendis doloribus magnam nobis modi
					iure eos in quis quos praesentium ab hic tenetur, aliquid similique non impedit
					sapiente suscipit. Iure consectetur fugiat eos corrupti vitae dignissimos quidem
					ratione adipisci? Facilis officia quasi commodi exercitationem. Similique nam
					nihil consectetur hic, illo eos fuga in est, debitis non distinctio dicta aut
					ipsa. Rem id doloribus cum ab labore ducimus non. Quo fugiat incidunt eos minus
					distinctio totam nisi veritatis! Architecto, nostrum iure quas quae vero labore
					libero, adipisci quod sed sequi natus! Accusamus, similique nemo.
				</p>
			</div>
		</StyledMainContent>
	);
};

export default MainContent;
