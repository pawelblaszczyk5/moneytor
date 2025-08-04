import stylex from "@moneytor/stylex";

import "#src/root.css";

const styles = stylex.create({ test: { color: "green" } });

const App = () => <h1 {...stylex.props(styles.test)}>Hello world 🌍</h1>;

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
