// Importing modules using ES module syntax
import fs from 'fs/promises';
import { join } from 'path';
const targetDirectory = process.argv[2] + process.argv[3] + 's'

async function appendExportToParentIndex(componentName, directory) {
  const indexPath = join(directory, 'index.ts');

  // Check if index.ts exists
  try {
    await fs.access(indexPath);
  } catch (err) {
    // If index.ts does not exist, just return without doing anything
    return;
  }

  const exportStatement = `export * from './${componentName}';\n`;
  await fs.appendFile(indexPath, exportStatement);
}

async function createComponent(componentName) {
  const componentPath = join(targetDirectory, componentName);
  const tsxFilePath = join(componentPath, `${componentName}.tsx`);
  const indexFilePath = join(componentPath, `index.ts`);

  // Check if component already exists
  try {
    await fs.access(componentPath);
    console.error(`Component "${componentName}" already exists.`);
    return;
  } catch {}

  // Create component folder
  await fs.mkdir(componentPath);

  const tsxContent = `
import { FC } from 'react';

type ${componentName + 'Props'} = {};

export const ${componentName}: FC<${componentName + 'Props'}> = () => {
    return (
        <div>
            ${componentName} component
        </div>
    );
};
`;

  await fs.writeFile(tsxFilePath, tsxContent.trim());

  const indexContent = `export * from './${componentName}.tsx'`;

  await fs.writeFile(indexFilePath, indexContent.trim());
  await appendExportToParentIndex(componentName, targetDirectory)

  console.log(`Component "${componentName}" was created successfully.`);
}

const componentName = process.argv[4];
const componentType = process.argv[3];

if(!componentType) {
  console.error('Please provide a component type.');
  process.exit(1);
}

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

createComponent(componentName).catch((error) => {
  console.error('Error:', error);
});
