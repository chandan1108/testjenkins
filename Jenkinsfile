// node {
//     checkout scm
//     docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {

//         def customImage = docker.build("chandan/dockerwebapp")

//         /* Push the container to the custom Registry */
//         customImage.push()
//     }
// }

node {
    checkout scm
    def customImage = docker.build("my-image:1", "C:\\Jenkins\\workspace\\docker-hub-app\\DockerFile") 
}