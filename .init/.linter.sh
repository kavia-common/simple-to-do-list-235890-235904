#!/bin/bash
cd /tmp/kavia/workspace/code-generation/simple-to-do-list-235890-235904/todo_list_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

