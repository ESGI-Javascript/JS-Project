import createCanvas from '/js/canvas.js';

const prop_access = (object, propertyPath = '') => {
    if (propertyPath === '' || propertyPath === null) {
        return object;
    }
    if(typeof propertyPath !== "string"){
        return "";
    }
    if (!object) {
        console.log(object + ' not exist');
        return;
    }
    
    let newObj = object;
    let path = '';
    for (let prop of propertyPath.split('.')) {
        path += '.' + prop;
        if (newObj.hasOwnProperty(prop)) {
            newObj = newObj[prop];
        } else {
            console.log(path.slice(1) + ' not exist');
            return;
        }
    }

    return newObj
};

const screen = new createCanvas(document.getElementById('tetris'));
let canvas = prop_access(screen, 'area');
let context = screen.context;

