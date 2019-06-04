
node {


    currentBuild.result = "SUCCESS"
    

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Build Docker image'){
            bat 'docker build -t chandan_image .'
       }
    //     stage('Push to DockerHub'){

    //      echo 'Push to Repo'
    //      bat 'docker tag chandan_image chandan2608/chandan_image'
    //      bat 'docker push chandan2608/chandan_image'

    //    }
    }
    catch (err) {
        throw err
        
    }

}