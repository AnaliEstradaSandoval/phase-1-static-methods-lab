class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string){
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const words = string.split(' ');
    for(let i = 0; i < words.length; i++){
     const word = words[i];
     if(i === 0 || !exceptions.includes(word)){
      words[i] = this.capitalize(word);
     }
  }
  return words.join(' ')
}
}




// static titleize(string){
//   const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
//   string = string.toLowerCase().split(' ');
//   for(let i = 0; i < string.length; i++){
//     string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
//     if(string.includes(exceptions)){
//       return string.toLowercase();
//     }
//   }
//   return string.join(' ')
// }
// }
