# Azure DevOps Pipeline Setup

This project includes a comprehensive Azure DevOps CI/CD pipeline that mirrors the GitHub Actions workflow.

## 📋 Pipeline Overview

The Azure DevOps pipeline (`azure-pipelines.yml`) includes the following stages:

### 1. **Test Stage** - Quality Checks

- **Triggers**: Push to `main`/`develop` branches, Pull Requests
- **Matrix Strategy**: Tests on Node.js 18.x and 20.x
- **Checks**:
  - ✅ Install dependencies (`npm ci`)
  - ✅ Linting (`npm run lint`)
  - ✅ Format checking (`npm run format:check`)
  - ✅ Type checking (`npm run type-check`)
  - ✅ Build library (`npm run build:lib`)
  - ✅ Run tests (`npm test`)

### 2. **Security Stage** - Security Analysis

- **Dependencies**: Runs after Test stage succeeds
- **Checks**:
  - ✅ Security audit (`npm audit --audit-level=moderate`)
  - ✅ Security fix check (`npm audit fix --dry-run`)

### 3. **Build Stage** - Build and Package

- **Dependencies**: Runs after Test stage succeeds
- **Actions**:
  - ✅ Build library (`npm run build:lib`)
  - ✅ Verify build artifacts

### 4. **Deploy Stage** - Deployment

- **Triggers**: Only on `main` branch
- **Environment**: `staging`
- **Actions**:
  - ✅ Deploy to staging environment
  - ✅ Run smoke tests

## 🚀 Setup Instructions

### 1. Create Azure DevOps Project

1. Go to your Azure DevOps organization
2. Create a new project or use existing one
3. Navigate to **Pipelines** → **Pipelines**

### 2. Create Pipeline

1. Click **New Pipeline**
2. Choose **Azure Repos Git** (or your source)
3. Select your repository
4. Choose **Existing Azure Pipelines YAML file**
5. Select the `azure-pipelines.yml` file
6. Click **Continue** and **Run**

### 3. Configure Environments

1. Go to **Pipelines** → **Environments**
2. Create a new environment called `staging`
3. Configure approval gates if needed

### 4. Configure Variables (Optional)

1. Go to **Pipelines** → **Library**
2. Create a variable group for your project
3. Add any sensitive variables (API keys, etc.)

## 🔧 Pipeline Features

### **Multi-Node Testing**

```yaml
strategy:
  matrix:
    node18:
      nodeVersion: '18.x'
    node20:
      nodeVersion: '20.x'
```

### **Conditional Deployment**

```yaml
condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
```

### **Security Integration**

- Automated security audits
- Vulnerability scanning
- Dependency analysis

## 📊 Pipeline Monitoring

### **Build Status**

- View pipeline runs in Azure DevOps
- Monitor build times and success rates
- Track deployment status

### **Artifacts**

- Build artifacts are available for download
- Source maps for debugging
- Pipeline logs for troubleshooting

### **Notifications**

- Email notifications on pipeline status
- Slack/Teams integration (configure in Azure DevOps)
- GitHub integration for status updates

## 🛠️ Customization

### **Add More Stages**

```yaml
- stage: Production
  displayName: 'Deploy to Production'
  dependsOn: Deploy
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
  jobs:
    - deployment: DeployToProduction
      displayName: 'Deploy to Production'
      environment: 'production'
      strategy:
        runOnce:
          deploy:
            steps:
              - script: |
                  echo "Deploying to production..."
```

### **Add Test Results Publishing**

```yaml
- task: PublishTestResults@2
  displayName: 'Publish test results'
  inputs:
    testResultsFormat: 'JUnit'
    testResultsFiles: '**/test-results.xml'
    mergeTestResults: true
    testRunTitle: 'Test Results'
  condition: always()
```

### **Add Code Coverage**

```yaml
- task: PublishCodeCoverageResults@1
  displayName: 'Publish code coverage'
  inputs:
    codeCoverageTool: 'Cobertura'
    summaryFileLocation: '**/coverage/cobertura-coverage.xml'
    reportDirectory: '**/coverage'
  condition: always()
```

## 🔍 Troubleshooting

### **Common Issues**

**Pipeline not triggering:**

- Check branch filters in trigger section
- Verify file paths in trigger conditions
- Ensure YAML syntax is correct

**Build failures:**

- Check Node.js version compatibility
- Verify all dependencies are installed
- Review linting and type-checking errors

**Deployment issues:**

- Verify environment exists in Azure DevOps
- Check deployment permissions
- Review environment approval gates

### **Debug Commands**

```bash
# Local testing of pipeline steps
npm ci
npm run lint
npm run format:check
npm run type-check
npm run build:lib
npm test
npm audit --audit-level=moderate
```

## 📚 Additional Resources

- [Azure DevOps Pipeline Documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/)
- [YAML Pipeline Reference](https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/)
- [Node.js Task Reference](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/tool/node-js/)
- [Deployment Jobs](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/deployment-jobs/)

## 🔄 Migration from GitHub Actions

If migrating from GitHub Actions to Azure DevOps:

1. **Replace `.github/workflows/ci.yml`** with `azure-pipelines.yml`
2. **Update branch protection rules** in Azure DevOps
3. **Configure environments** for deployment stages
4. **Set up notifications** for pipeline status
5. **Migrate secrets** to Azure DevOps variable groups

The Azure DevOps pipeline provides the same functionality as the GitHub Actions workflow with additional enterprise features like environments, approvals, and advanced security scanning.
