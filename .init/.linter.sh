#!/bin/bash
cd /home/kavia/workspace/code-generation/kavia-ai-portfolio-189439-189448/kavia_portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

