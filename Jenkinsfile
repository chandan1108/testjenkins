pipeline {
    agent any
    
    stages {
        def IMAGE_NAME="chandan2608/hello:${BUILD_NUMBER}"
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