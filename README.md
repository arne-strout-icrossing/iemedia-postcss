# iemedia-postcss
A simple Node.js module that makes use of the postcss CSS postprocessor module to strip media tags from style sheets in order to make them more compatible with old versions of IE (especially IE8).

## Usage

```js
var avoid = [
        'max-width',
        'orientation',
        'handheld',
        'print',
        'aspect-ratio',
        'max-height',
        'resolution',
        'max-device-width',
        'max-device-height',
        'max-resolution'
      ];

    var processor = require('iemedia-postcss')(avoid);

    var css = grunt.file.read("source.css");
    css = processor.process(css);
    grunt.file.write("output.css",css);
```

## Release History

 * 2015   v0.1.0   Initial build


## License
Copyright (c) 2015 iCrossing
Licensed under the [MIT license](LICENSE-MIT).
***

Project created by [Arne Strout](https://github.com/ic-agstrout).

_This file was generated on Fri Jan 16 2015 11:21:42._