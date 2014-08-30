module.exports = function(grunt) {

	// 專案設定
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			options: {
				// Override defaults here
			},
			dev: {
				options: {
					debug: true,
					port: 8080,
					script: 'bin/www'
				}
			},
		},

		jshint: {
			options: {
				force: true
				// jshintrc: true
			},
			all: ['Gruntfile.js', 'app.js', 'global.js', 'routes/**/*.js', 'public/**/*.js']
		},

		watch: {
			scripts: {
				files: ['Gruntfile.js', 'app.js', 'global.js', 'routes/**/*.js', 'public/**/*.js'],
				tasks: ['jshint', 'express'],
				options: {
					spawn: true,
				}
			},
		},


	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint', 'express', 'watch']);
};