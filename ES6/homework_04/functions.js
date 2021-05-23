function isMortal(name) {
    if (typeof name == 'string' && name != '') {
        switch (name.toLowerCase()) {
            case 'elvis':
                return false;
            default:
                return true;
        }
    }
}

console.log(isMortal('Socrat'));

function cake(arrTypes, isChoco) {
    if (isChoco) {
        for (i = 0; i < arrTypes.length; i++) {
            if (arrTypes[i] == 'chocolade')
                return arrTypes[i];
        }
    }
    else {
        for (i = 0; i < arrTypes.length; i++) {
            if (arrTypes[i] != 'chocolade')
                return arrTypes[i];
        }
    }
}

console.log(cake(['vanilla', 'chocolade'], false));