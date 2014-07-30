module.exports = function (grunt) {	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		clean: ['images/optimised/*', '!images/optimised/.gitignore'],
		
		svgmin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/original',
					src: ['**/*.svg'],
					dest: 'images/optimised'
				}]
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/original',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/optimised'
				}]
			}
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	
	grunt.registerTask('default', ['clean', 'svgmin', 'imagemin']);
};