def dockerImageName = "app-image"

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
        sh "docker run --name=${dockerImageName} -p 3001:3001 -v /home/ygokul1702/app/db -d ${dockerImageName}"
      }
    }
  }
}
