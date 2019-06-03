
node {


    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Build Docker image'){
            bat 'docker build -t chandan_image .'
       }
        stage('Push to DockerHub'){

         echo 'Push to Repo'
         bat 'docker push chandan26/testapp:chandan_image'

       }
    }
    catch (err) {
        throw err
        
    }

}