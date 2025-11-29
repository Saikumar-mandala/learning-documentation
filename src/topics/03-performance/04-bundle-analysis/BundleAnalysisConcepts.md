# Bundle Analysis

## 📊 What is it?

Analyzing your production bundle to identify large dependencies and optimize size.

## ✅ Tools

### Vite Bundle Visualizer
\`\`\`bash
npm install --save-dev rollup-plugin-visualizer
\`\`\`

### Build Analysis
\`\`\`bash
npm run build -- --profile
\`\`\`

## 💡 Optimization Tips

1. **Tree Shaking**: Import only what you need
2. **Code Splitting**: Lazy load routes
3. **Remove unused dependencies**
4. **Use lighter alternatives**: date-fns vs moment
5. **Compress assets**: Images, fonts

## 🎯 Target

- **JS Bundle**: < 200KB gzipped
- **Initial Load**: < 1MB total
