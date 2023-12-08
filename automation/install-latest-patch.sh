#!/bin/bash

npm uninstall -g @serverless-ninja/sana
sleep 10
npm i -g @serverless-ninja/sana
sleep 10
sana --version