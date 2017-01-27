# grunt-exist-unload

> Grunt task to unload or clean out an eXist package

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-exist-unload --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-exist-unload');
```

## The "exist_unload" task

### Overview
In your project's Gruntfile, add a section named `exist_unload` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({

  pkg: grunt.file.readJSON('package.json'),

  exist_unload: {
    options: {
      host: 'localhost',
		port: 8080,
		loginUser: 'admin',
		loginPassword: '',
		packages: [],
		clean: true
    }
  }
});
```

### Options

#### options.host
Type: `String`
Default value: `'locahost'`

Name or I/P of host where the eXist database is running.

#### options.port
Type: `Integer`
Default value: `8080`

Port number of the eXist database instance.

#### options.loginUser
Type: `String`
Default value: `'admin'`

Administrator login name.

#### options.loginPassword
Type: `String`
Default value: `none`

Administrator password. There is no default value.

#### options.packages
Type: `array`
Default value: `none`

A (possible) list of package names which are to be unloaded. Each entry is a string.

#### options.clean
Type: `boolean`
Default value: `false`

If true then no error is raised if the plugin fails to deinstall a package. The reply from eXist is always failure when the package was not installed or when it's name is misspelt.

### Usage Examples


```js
grunt.initConfig({
  exist_unload: {
    options: {
		host: 'localhost',
		port: 8080,
		loginUser; 'admin',
		loginPassword: 'eXist',
		packages: ['http://www.programationinformatique.fr/JonathanTest'],
		clean: false
    }
  }
});
```


## Release History
_(Nothing yet)_
