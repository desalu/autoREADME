const fs = require('fs');






// function to generate markdown for README
function generateMarkdown(data) {


  return [
    `# ${data.title}
`+
(data.desription !== "" ?
`## Description:
           
${data.description}

`
: null ) +
 
(data.tableOfContent !== false ?
  `## Table of Contents

`+
(data.description !== ""?
`[Description](#description)
`+
(data.installation !== "" ?
`[Installation](#installation)
`+
(data.description !== ""?
`[Usage](#Usage)
`
  :''):''):''):'') +

(data.installation !== "" ?
`## Instatallation:
             
${data.installation}
  
`:'') +
(data.usage !== "" ?
`## Usage:
             
${data.usage}

`:'') +
(data.c !== "" ?
`## contributing:
             
${data.contributing}

`:'') +
(data.test !== "" ?
`## Usage:
             
${data.usage}

`:'') +
(data.usage !== "" ?
`## Usage:
             
${data.usage}

`:'') +
(data.license !== "" ?
`## license:
` 
:'')

  
  ]

    
}

module.exports = generateMarkdown;
