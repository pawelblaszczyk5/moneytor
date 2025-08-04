import { Button } from "@moneytor/design-system/components/button";
import { accessibility } from "@moneytor/design-system/styles/utilities";
import { color } from "@moneytor/design-system/theme/color.stylex";
import stylex from "@moneytor/stylex";

import "#src/root.css";

const styles = stylex.create({ test: { backgroundColor: color.primary, color: "green" } });

const App = () => (
	<div>
		<h1 {...stylex.props(styles.test)}>Hello world 🌍</h1>
		<span {...stylex.props(accessibility.srOnly)}>Not visible for most users</span>
		<Button />
	</div>
);

export const Root = () => (
	<html lang="en">
		<head>
			<meta charSet="utf8" />
			<link href="/vite.svg" rel="icon" type="image/svg+xml" />
			<meta content="width=device-width, initial-scale=1.0" name="viewport" />
			<title>Vite + RSC</title>
		</head>
		<body>
			<App />
		</body>
	</html>
);
