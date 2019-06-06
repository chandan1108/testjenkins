pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Building the docker images"
                IMAGE_NAME="chandan2608/hello:${BUILD_NUMBER}"
                bat docker build -t $IMAGE_NAME .
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