webpack:
	@mkdir -p public/js
	@./node_modules/webpack/bin/webpack.js --watch
server:
	@./node_modules/nodemon/bin/nodemon.js -w server.js server.js
