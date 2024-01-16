// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (answer) => {
      if (answer === '') {
        return 'Please enter a valid name';
      }
      return true;
    },
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license did you use?',
    choices: [
      'The MIT license',
      'The GPL License',
      'Apache License',
      'GNU License',
      'No License Used',
    ],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project?',
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'Are there any instructions for this project?',
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Are there any credits to announce?:',
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Are there any contributers to mention?:',
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Are there any apps to be installed?:',
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage of this app?:',
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Are there any credits to announce?:',
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'git',
    message: 'Please enter your gitHub username:',
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your Email:',
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Please enter your LinkedIn username:',
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
  },
];

inquirer
  .prompt(questions)
  .then(
    ({
      title,
      installation,
      description,
      instructions,
      credits,
      license,
      git,
      linkedin,
      email,
      usage,
      contribution,
    }) => {
      const template = `# ${title}

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Credits](#credits)
  * [License](#license)
  * [Description](#description)
  * [Instructions](#instructions)
  * [Contact](#contact)

  ## License
  ${license ? license : ''}
  ## Installation
  ${installation ? installation : ''} 
  ## Description
  ${description ? description : ''}
  ## Instructions
  ${instructions ? instructions : ''}
  ## Usage
  ${usage ? usage : ''}
  ## Contribution
  ${contribution ? contribution : ''}
  ## Credits
  ${credits ? credits : ''}

  ## Contact
  * Github: ${git}
  * E-mail: ${email}
  * LinkedIn: ${linkedin}`;

      writeNewFile(title, template);
    }
  );
// TODO: Create a function to write README file

function writeNewFile(fileName, data) {
  fs.writeFile(
    `./${fileName.toLowerCase().split('').join('')}.md`,
    data,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log('Your README has been generated.');
    }
  );
}
