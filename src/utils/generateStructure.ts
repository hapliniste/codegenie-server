import * as fs from 'fs';
import * as path from 'path';

//const PROJECT_DIRECTORY = path.join(__dirname, 'src');
const PROJECT_DIRECTORY = process.cwd();
//console.log(process.cwd());

function generateTreeStructure(directory: string, level: number = 0) {
  const files = fs.readdirSync(directory);

  let result = '';
  files.forEach((file, index, array) => {
    // Ignore hidden files and directories
    if (file.startsWith('.') || file === 'node_modules') {
      return;
    }

    const fullPath = path.join(directory, file);
    const stats = fs.statSync(fullPath);

    // Generate indent based on the current level
    const isLast = index === array.length - 1;
    const indent = '  '.repeat(level);
    const branch = isLast ? '└── ' : '├── ';

    // Add file or directory name to the result
    result += `${branch}${file}\n`;

    // Recursively generate tree structure for sub-directories
    if (stats.isDirectory()) {
      const nextLevel = level + 1;
      const nested = generateTreeStructure(fullPath, nextLevel);
      result += nested.replace(/(^\s*)(├|└)/gm, (match, p1, p2) => {
        const isLastLine = nested.endsWith(match);
        const nextIndent = isLastLine ? p1 : p1 + ('│' + indent);
        return nextIndent + p2;
      });
    }
  });

  return result;
}

/*let useTabs = false; // set to true to use tabs for indentation
useTabs = process.argv[2] === '--use-tabs';*/
const treeStructure = generateTreeStructure(PROJECT_DIRECTORY, 1);
fs.writeFileSync('projectStructure.txt', treeStructure);
console.log('Project structure has been written to projectStructure.txt');
