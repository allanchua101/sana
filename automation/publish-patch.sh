#!/bin/bash

cd ../

cp ./README.md ./sana/README/md

cd ./sana

npm version "patch"

npm publish --access public