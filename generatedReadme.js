function readMe(responses){
    return`
    # ${responses.title}
        ${responses.license}
        "By ${responses.github}"
        "Depolyed program: ${responses.link}"

    ## Description
    ${responses.description}

    ## Motivation/Problems Solved
        ${responses.motivation}
        ${responses.problem}

    ## Table of Contents
    -[Description](#description)
    -[Motivation/Problems Solved](#motivation/problems-solved)
    -[Table of Contents](#table-of-contents)
    -[Installation](#installation)
    -[Features](#features)
    -[Improvements](#improvements)
    -[Learnings](#learnings)

    ## Installation
        ${responses.installation}
        "Technologies utilized:"
        ${responses.technology}

    ## Features
        ${responses.features}
    
    ## Improvements
        ${responses.improvements}
        ${responses.learnings}

    `   
}

module.exports = readMe;