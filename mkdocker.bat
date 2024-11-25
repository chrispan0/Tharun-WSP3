git fetch
git pull
docker stop tharun-a3
docker rm tharun-a3
cd C:\Users\Administrator\Documents\GitHub\Tharun-WSP3
docker build -t tharun-a3 .
docker run -d -p 1437:3000 --name tharun-a3 tharun-a3:latest
pause