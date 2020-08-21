
function generateMarkdown(data) {
  try { return `# ${data.title}

  ## Description
  ${data.description}
  
  # Table of Content
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contribution](#contribution)
  4. [Test Instructions](#test-instructions)

  ## Installation
   ${data.installation}
  
  ## Usage
   ${data.usage}
  
  
  ## Contribution
  
   ${data.contribution}
  
  ## Test Instructions
   ${data.test}
  
  ## Questions
  Github:[${data.github}](github.com/${data.github})
  Email: ${data.email}
  
   ${data.license} © )`

  
  }

  catch (err){
    console.log(error)
  }
}



module.exports = generateMarkdown;
