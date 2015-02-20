# ikuno

## A simple, Grunt image and SVG optimiser

While there are many Mac and online tools to optimise images and SVGs, there weren't any simple Windows apps that would allow me to easily optimise images from legacy or small projects (that don't use Grunt).

So, I've created ikuno to do just that!

---

### Installation

1. Install [node.js](http://nodejs.org) *(and add it to your Path Environment Variable on Windows)*
2. Open a shell window and install the Grunt CLI with `npm install -g grunt-cli`
3. [Download](https://github.com/stowball/ikuno/archive/master.zip) or [clone](https://github.com/stowball/ikuno.git) ikuno
6. Open a shell window in the ikuno root directory
7. Run `npm install` to install ikuno's Grunt dependencies

---

### Usage

1. Put images (png, jpg, gif, svg) to be optimised inside `images/original`
2. In a shell window, run `grunt`
3. Behold as your images are compressed in to `images/optimised` for you to copy/move in to your main project

*Note that each time ikuno is run, the `images/optimised` directory will be emptied*

---

Copyright (c) 2014 [Matt Stow](http://mattstow.com)  
Licensed under the MIT license *(see [LICENSE](https://github.com/stowball/ikuno/blob/master/LICENSE) for details)*