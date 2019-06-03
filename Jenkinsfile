
node {


    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Build Docker'){

            bat './dockerBuild.sh'
       }
    }
    catch (err) {
        throw err
        
    }

}