function spiceMustFlow(source) {
    let day = 0;
    let crew = 26;
    let spices = 0;
    let leaving = 0;
    while (source >= 100) {
        day++
        
        spices = source - crew
        leaving += spices

        source -= 10

    }
    
    if (leaving >= crew){
        leaving -= crew
    }
    console.log(day);
    console.log(leaving);
    
}
spiceMustFlow(111)
spiceMustFlow(450)