# AWS ECS Docker Jenkins

Simple node app. On commit to github, Jenkins will build image based on `Dockerfile` and upload to private `ECR` repository, and deploy an `ECS` instance running the container.