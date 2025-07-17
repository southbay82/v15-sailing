#!/bin/bash

rm -rf .next
echo "deleted .next cache dir..."

echo "running...npx netlify dev"
npx netlify dev&

echo "running npc run dev"

NEXT_DISABLE_WEBPACK_CACHE=1
echo "Current value of NEXT_DISABLE_WEBPACK_CACHE  ( $NEXT_DISABLE_WEBPACK_CACHE )"
echo "start server...."

NEXT_DISABLE_WEBPACK_CACHE=1 npm run dev
