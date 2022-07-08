def projectName = 'products-demo'
def dockerImageName = "sample-image"

properties([pipelineTriggers([githubPush()])])

pipeline {
  agent any
  stages {
    stage('Build Container') {
      steps {
        sh "docker build -t ${dockerImageName} ."
      }
    }

    stage('Deploy Container To GCP') {
      steps {
        sh "docker rm -f ${dockerImageName} || true"
        sh "docker run --name=${dockerImageName} -p 3000:3000 -v /home/ygokul1702/app/db -d ${dockerImageName}"
      }
    }
  }
}
