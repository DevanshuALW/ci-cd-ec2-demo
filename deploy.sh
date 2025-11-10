#!/bin/bash
cd /home/ubuntu/ci-cd-demo
echo "Pulling latest code..."
git pull origin main
echo "Restarting PM2 app..."
pm2 restart ci-cd-demo
echo "✅ Deployment complete!"

