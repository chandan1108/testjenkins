pipeline{
    agent any
    stages{
        stage('Cloning'){
            steps{
                echo "cloning the code from git hub"
            }
        }
        stage('Build'){
            steps{
                echo "Building the docker images"
            }
        }
        stage('Push'){
            steps{
                echo "Pushing docker images into docker hub"
            }
        }
    }
}