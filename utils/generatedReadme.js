function licenseBadge(licenses){
    let badge = '';
    switch (licenses){
        case 'MIT':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'Zlib':
            badge = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
            break;
        case 'Apache':
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'WTFPL':
            badge = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
            break;
        case 'Unlicense':
            badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
            break;
    }
    return badge;
};

function readMe(responses){
    return`
    ## ${responses.title}
        ${licenseBadge(responses.licenses)} 
        "By ${responses.github}"
        "Deployed program: ${responses.link}"

    ## Table of Contents
    -[Description](#description)
    -[Motivation/Problems Solved](#motivation/problems-solved)
    -[Installation](#installation)
    -[Features](#features)
    -[Improvements](#improvements)
    -[How to Contribute](#how-to-contribute)

    ## Description
    ${responses.description}

    ## Motivation/Problems Solved
        ${responses.motivation}
        ${responses.problem}

    ## Installation
        ${responses.installation}
        "Technologies utilized:"
        ${responses.technology}

    ## Features
        ${responses.features}
    
    ## Improvements
        ${responses.improvements}
        ${responses.learnings}

    ##How to Contribute
        ${responses.contribute}
    `   
}

module.exports = readMe;