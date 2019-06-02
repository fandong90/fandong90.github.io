 const Marked = require('marked');
 const html = Marked("```* This two-line bullet won't break * This two-line bullet will break ```");
 
console.log(html);