let vars = {};

function parseParams(search){let res = search.replace("?", ""); return res;}

let url = parseParams(window.location.search)

if(url.includes("&")){
  let urlList = url.split("&"); 
}

try {
  console.log(urlList)
}catch{
  vars[url.split("=")[0]] = url.split("=")[1]
}

let name = vars["name"];

console.log(vars.name);
