#!/bin/bash

output=$1
if [[ "$output" == "" ]]; then
  output="$(dirname $0)/dist"
else
  output=$(realpath $output)
fi
[ -d $output ] || mkdir -p $output


build() {
  local dist="$1"

  echo "browserify $(pwd)/src/app.js"
  browserify -d -e src/app.js -t babelify -o "$dist/app.js" -v

  echo "copy echo $(pwd)/src/public"
  cp -urv src/public/* "$dist/"
}

build "$output"
