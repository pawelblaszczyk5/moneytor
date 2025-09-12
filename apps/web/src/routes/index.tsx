import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@moneytor/design-system/components/button";
import { Icon } from "@moneytor/design-system/components/icon";
import stylex from "@moneytor/stylex";

const styles = stylex.create({
	heading: { alignItems: "center", color: "rebeccapurple", display: "flex", gap: 4, marginBlock: 8 },
});

const Home = () => (
	<>
		<title>Home | Moneytor</title>
		<h1 {...stylex.props(styles.heading)}>
			Hello world <Icon name="webhook" />
		</h1>
		<Button />
	</>
);

export const Route = createFileRoute("/")({ component: Home });
