/* global cp, mkdir, test */

require('shelljs/global')

if (!test('-d', '.build')) {
  mkdir('.build')
}

cp('node_modules/dark-horse-ui/dist/*', '.build/')
