pipeline {
  agent {
    node {
      label 'test'
    }

  }
  stages {
    stage('master') {
      parallel {
        stage('Test') {
          steps {
            echo 'I am first message'
          }
        }

        stage('TestStage1') {
          steps {
            echo 'ok from jenkis'
          }
        }

        stage('TestStage2') {
          steps {
            echo 'jekins:Stage2'
          }
        }

        stage('Stage3') {
          steps {
            echo 'stage3'
          }
        }

      }
    }

    stage('Second') {
      steps {
        echo 'what is tagewerwer'
      }
    }

  }
}