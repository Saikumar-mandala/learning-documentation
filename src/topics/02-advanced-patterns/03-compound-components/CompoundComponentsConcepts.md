# Compound Components

## 🧩 What are they?

Compound components work together to form a complete UI, sharing implicit state through context.

## ✅ Benefits

- **Flexible API**: Users compose components as needed
- **Encapsulation**: Internal state management
- **Clean Syntax**: More readable JSX

## 💡 Example Pattern

\`\`\`tsx
<Tabs>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>Content 1</TabPanel>
    <TabPanel>Content 2</TabPanel>
  </TabPanels>
</Tabs>
\`\`\`
