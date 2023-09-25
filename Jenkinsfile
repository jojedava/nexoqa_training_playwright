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
                    npm i -D @playwright/test
                    npx playwright install
                '''
            }
        }
        stage('Test'){
            steps{
                sh '''
                    npx playwright test
                '''
            }
            post {
                fail {
                archiveArtifacts(artifacts: '*.png', followSymlinks: false)
                sh 'rm -rf *.png'
                }
            }
        }
    }
}