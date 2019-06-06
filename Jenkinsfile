pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Building the docker images"
                bat docker build -t "dtdt" .
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