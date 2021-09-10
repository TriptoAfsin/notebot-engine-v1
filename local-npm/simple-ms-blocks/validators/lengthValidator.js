let lengthValidator = (string, lengthToKeep) => {
    if (string.length > lengthToKeep) {
        console.warn(`⚠ Warning: Max length crossed! First ${lengthToKeep} chars were kept || ${string}(${string.length})`);
        let newString = "";
        for(let i = 0; i < lengthToKeep; i++){
            newString += string[i];
        }
        return newString;
    }

    else{
        return string;
    }
}



module.exports = lengthValidator;