const StaticServer = require('static-server');

const server = new StaticServer ({
	rootPath: './src/', 
	port: 3099
});

server.start(function() {
	console.log('Server started on port ' + server.port);
});