function check_Weather(weather) {

    switch (weather) {
        case "rainy":
            console.log("take umbrella");
            break;

        case "hot":
            console.log("wear t-shirt");
            break;
        
        case "winter":
            console.log("wear jacket");
            break;

        default:
            console.log("you can wear anything");
    }
}

check_Weather("winter");