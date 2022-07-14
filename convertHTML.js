function convertHTML(str) {

    const entities = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;"
    }    
    let result = "";
    const keys = Object.keys(entities); 

    for (let x = 0; x < str.length; x++) {
      if (keys.includes(str[x])) {
        result += entities[str[x]];
      }
      else {
        result += str[x];
      }
    }
    return result;
  }
  
  console.log(convertHTML("<>"));