pipeline {
    agent any
    
    stages {
        
        stage('Build') {
            steps {
                echo "Building the docker images"
                bat "docker build -t chandan2608/hello1:${BUILD_NUMBER} ."
            }
        }
        stage('Push') {
            steps {
                echo "Pushing docker images into docker hub"
                bat "docker login ${DOCKER_HUB}"
                bat "docker push chandan2608/hello1:${BUILD_NUMBER}"
            }
        }
    }
}

// pipeline {
//     agent any
//     stages {
//         stage('Build') {
//             steps {
//                 bat 'set'
//             }
//         }
//     }
// }