import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@moneytor/design-system/components/button";
import stylex from "@moneytor/stylex";

const styles = stylex.create({ heading: { color: "red" } });

const Home = () => (
	<>
		<title>Home | Moneytor</title>
		<h1 {...stylex.props(styles.heading)}>Hello world</h1>
		<Button />
	</>
);

export const Route = createFileRoute("/")({ component: Home });
