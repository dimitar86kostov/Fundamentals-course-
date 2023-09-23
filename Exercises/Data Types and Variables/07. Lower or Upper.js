function lowerOrUpper(params) {
      /*
      let upper = params.toUpperCase();
  
      if (params === upper) {
          console.log('upper-case');
      }else{
          console.log('lower-case');
      }
      */
    let code = params.charCodeAt();

    if (code >= 65 && code <= 90) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }

}
lowerOrUpper('L')
lowerOrUpper('f')