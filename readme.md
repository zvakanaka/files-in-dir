Get file names in a directory
## Examples
Normal usage:
```js
const filesInDir = require('files-in-dir');
const fileNames = filesInDir('/home/fred/Desktop');
console.log(fileNames);
// ['image_1.jpg', 'resume.pdf', 'why_worry.PNG'...]
```

Require specific extension(s):
```js
const allowdExtensions = ['jpg', 'png']; // case insensitive
const someFileNames = filesInDir('/home/fred/Desktop', allowdExtensions);
console.log(someFileNames);
// ['image_1.jpg', 'why_worry.PNG'...]
```

Use [dirs-in-dir](https://github.com/zvakanaka/dirs-in-dir) to get directory names in a directory
