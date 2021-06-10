export default ({ children, spawn }) => {
	function doAcquire(nickname, ActorDefinition, ...args) {
		if (children[nickname]) {
			return children[nickname];
		} else {
			return spawn[nickname](ActorDefinition, ...args);
		}
	}

	const acquire = new Proxy(
		{},
		{
			get: (_, nickname, __) => doAcquire.bind(null, nickname),
		},
	);

	return { acquire };
};
