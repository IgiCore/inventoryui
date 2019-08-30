const fs = require('fs');

module.exports = config => {
	//config.output.path = fs.realpathSync(process.cwd());
	config.output.filename = '[name].js';

	config.plugins[5].options.filename = '[name].css';

	config.plugins[6] = false;
	config.plugins[8] = false;

	config.plugins = config.plugins.filter(Boolean);

	config.module.rules[2].oneOf[0].options.name = '[name].[ext]';
	config.module.rules[2].oneOf[7].options.name = '[name].[ext]';

	config.optimization.runtimeChunk = false;

	config.optimization.splitChunks = {
		cacheGroups: {
			default: false
		}
	};

	return config;
};
