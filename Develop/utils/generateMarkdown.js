const data = require("../index.js")


// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Content
  
  ## Installation
   ${data.installation}
  
  ## Usage
   ${data.usage}
  
  
  ## Contribution
  
   ${data.contribution}
  
  ## Test Instructions
   ${data.test}
  
  
   ${data.license} © )`
  console.log(data.license)
  };


module.exports = generateMarkdown;
