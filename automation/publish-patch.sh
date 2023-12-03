#!/bin/bash

cd ../

cp ./README.md ./cli/README.md

cd ./cli

npm version "patch"

npm publish --access public