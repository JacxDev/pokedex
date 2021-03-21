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
            colorType = '#b97fc9'
            break;
        case "normal":
            colorType = '#a8a692'
            break;
        case "water":
            colorType = 'blue'
            break;
        case "flying":
            colorType = "#03b6fc"
            break;
        case "bug":
            colorType = "#729f3f"
            break;
        case "electric":
            colorType = "#eed535"
            break;
        case "ground":
            colorType = "#ab9842"
            break;
        case "fairy":
            colorType = "#fdb9e9"
            break;
        case "fighting":
            colorType = "#d56723"
            break;
        case "psychic":
            colorType = "#f366b9"
            break;
        case "rock":
            colorType = "#5e402c"
            break;
        case "steel":
            colorType = "#9eb7b8"
            break;
        case "ice":
            colorType = "#51c4e7"
            break;
        case "ghost":
            colorType = "#7b62a3"
            break;
        default:
            colorType = 'black'
            break;
    }

    return colorType;
}

export default colorType;