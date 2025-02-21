pipeline {
       agent any 
   stages  {
        stage('checkout code'){
            steps {
                     git 'https://github.com/Kawin-cloud/project-root.git'
                  }
                              }
	stage('Build and Run Docker Compose'){
	    steps {
		script{
                      sh 'docker-compose up -d --build'
                      }
                  }
	                                    }        
           } 
        }  
