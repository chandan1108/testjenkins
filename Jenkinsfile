pipeline {
    agent any
    def IMAGE_NAME="chandan2608/hello:${BUILD_NUMBER}"
    stages {
        stage('Build') {
            steps {
                echo "Building the docker images"

                bat "docker build -t ${IMAGE_NAME} ."
            }
        }
        stage('Push') {
            steps {
                echo "Pushing docker images into docker hub"
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