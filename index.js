const fs = require('fs');
const path = require('path');

/**
 * Get file names within a directory
 * @param  {string}   [base='.']           directory to get file names within
 * @param  {string[]} [fileExtensions=[]]  file extensions to get (get all if empty)
 * @return {string[]}                      array of file names within base directory
 */
 function filesInDir(base = '.', fileExtensions = []) {
   const directory = `${base}`;
   if (!fs.existsSync(directory)) return { err: `directory "${directory}" does not exist` };
   const extensions = fileExtensions.map(ext => `.${ext.toLowerCase()}`);
   let files = fs.readdirSync(directory, { withFileTypes: true })
     .reduce((acc, file) => {
       // keep if is a file, fileExtensions is empty OR extension is found in fileExtensions
       if (file.isFile() && (fileExtensions.length === 0 || extensions.indexOf(path.extname(file.name).toLowerCase()) > -1)) {
         acc.push(file.name);
       }
       return acc;
     }, []);
   return files;
 }

module.exports = filesInDir;
