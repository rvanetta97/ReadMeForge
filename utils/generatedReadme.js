function licenseBadge(licenses){
    if (licenses !== "none"){
        return `![Github license](https://img.shields.io/badge/license-${licenses}-blue.svg)`;
    }
};

function readMe(responses){
    return`
    # ${responses.title}
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