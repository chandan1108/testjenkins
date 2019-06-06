pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                echo "Building the docker images"
                docker build -t pipline_image .
            }
        }
        stage('Push'){
            steps{
                echo "Pushing docker images into docker hub"
            }
        }
    }
}