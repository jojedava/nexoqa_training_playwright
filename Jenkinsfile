pipeline{
    agent{
        docker{
            image 'mcr.microsoft.com/playwright:v1.38.0-jammy'
        }
    }
    stages{
        stage('Install playwright'){
            steps{
                sh '''
                    cd playwright
                    npm i -D @playwright/test
                '''
            }
        }
        stage('Test'){
            steps{
                sh '''
                    cd playwright
                    npx playwright test
                '''
            }
            post {
                failure {
                    archiveArtifacts(artifacts: '*.png', followSymlinks: false)
                    sh 'rm -rf *.png'
                }
            }
        }
    }
}