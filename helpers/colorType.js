const colorType = (type) => {
    let colorType;

    switch (type) {
        case "fire":
            colorType = 'red'
            break;
        case "grass":
            colorType = 'green'
            break;
        case "poison":
            colorType = 'purple'
            break;
        case "normal":
            colorType = '#e6c0a8'
            break;
        case "water":
            colorType = 'blue'
            break;
        case "flying":
            colorType = "#aaf2e7"
            break;
        case "bug":
            colorType = "#6ef587"
            break;
        case "electric":
            colorType = "#e9f030"
            break;
        case "ground":
            colorType = "#9c6a3e"
            break;
        case "fairy":
            colorType = "#bf88bf"
            break;
        case "fighting":
            colorType = "#ba3d44"
            break;
        case "psychic":
            colorType = "#8e3dba"
            break;
        case "rock":
            colorType = "#5e402c"
            break;
        case "steel":
            colorType = "#7a7a79"
            break;
        default:
            colorType = 'black'
            break;
    }

    return colorType;
}

export default colorType;