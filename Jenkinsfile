node {

    checkout scm
    environment {
    PATH = "C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\bin;${env.PATH}"

    stages {
    stage('build check') {
      steps {
       docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {

        def customImage = docker.build("chandan/dockerwebapp")

        /* Push the container to the custom Registry */
        customImage.push()
    }
      }
    }
    }

    
    }
}