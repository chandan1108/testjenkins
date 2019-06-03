
node('node') {


    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Test'){

         env.NODE_ENV = "test"

         print "Environment will be : ${env.NODE_ENV}"

         bat 'node -v'
         bat 'npm prune'
         bat 'npm install'
         bat 'npm test'

       }

       stage('Build Docker'){

            bat './dockerBuild.sh'
       }
    }
    catch (err) {
        throw err
        
    }

}