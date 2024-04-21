function readMe(data){
    return`
    # ${data.title}
        ${data.license}
        "By ${data.github}"
        "Depolyed program: ${data.link}"

    ## Description
    ${data.description}

    ## Motivation/Problems Solved
        ${data.motivation}
        ${data.problem}

    ## Table of Contents
    -[Description](#description)
    -[Motivation/Problems Solved](#motivation/problems-solved)
    -[Table of Contents](#table-of-contents)
    -[Installation](#installation)
    -[Features](#features)
    -[Improvements](#improvements)
    -[Learnings](#learnings)

    ## Installation
        ${data.installation}
        "Technologies utilized:"
        ${data.technology}

    ## Features
        ${data.features}
    
    ## Improvements
        ${data.improvements}
        ${data.learnings}

    `   
}

module.exports = readMe;