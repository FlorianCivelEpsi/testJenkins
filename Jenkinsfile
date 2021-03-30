pipeline {
  agent any
  stages {
    stage('Install dependencies'){
      steps {
        sh 'npm install'
      }
    }
    stage('run test'){
          steps {
            sh 'npm test'
          }
        }
  }

}
