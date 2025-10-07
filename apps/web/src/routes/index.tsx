import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@trinse/design-system/components/button";
import { Icon } from "@trinse/design-system/components/icon";
import stylex from "@trinse/stylex";

const styles = stylex.create({
	heading: { alignItems: "center", color: "rebeccapurple", display: "flex", fontSize: 14, gap: 4, marginBlock: 8 },
	icon: { height: 16, width: 16 },
});

const Home = () => (
	<>
		<title>Home | Trinse</title>
		<h1 {...stylex.props(styles.heading)}>
			Hello world <Icon name="webhook" style={styles.icon} />
		</h1>
		<Button />
	</>
);

export const Route = createFileRoute("/")({ component: Home });
