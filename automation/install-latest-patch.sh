#!/bin/bash

npm uninstall -g @serverless-ninja/sana
sleep 3
npm i -g @serverless-ninja/sana
sana --version