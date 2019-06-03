
node {
    def dockerImage

    currentBuild.result = "SUCCESS"
    
    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Build Docker image'){
            bat 'docker build -t dockerImage .'
       }
         stage('Build image') {
        dockerImage = docker.build("chandan2608/dockerImage")
        }

        stage('Push image') {
                docker.withRegistry('https://registry-1.docker.io/v2/', 'chandan2608Chandu@123') {
                dockerImage.push()
                }
  }
        
    }
    catch (err) {
        throw err
        
    }

}