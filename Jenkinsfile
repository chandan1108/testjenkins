
node {


    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Build Docker'){

            bat 'docker build -t chandan_image .'
       }
    }
    catch (err) {
        throw err
        
    }

}