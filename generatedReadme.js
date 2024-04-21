function generateReadme (data){
    return`
    #${data.title}
        ${data.license}

    ##Description
    ${data.description}

    #Motivation/Problems Solved
        ${data.motivation}
        ${data.problem}

    ##Table of Contents
    -[Description]
    `   
}

module.exports = generateReadme;