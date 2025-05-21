pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/votre-user/repo.git'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'  # Supposer que vous avez des tests dans `test/`
      }
    }
    stage('Build Docker') {
      steps {
        sh 'docker build -t votre-user/todo-app:latest .'
      }
    }
    stage('Push Docker') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
          sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
          sh 'docker push votre-user/todo-app:latest'
        }
      }
    }
    stage('Deploy K8s') {
      steps {
        sh 'kubectl apply -f k8s/deployment.yaml'
      }
    }
  }
}