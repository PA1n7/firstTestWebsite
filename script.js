let vars = {};

function parseParams(search){let res = search.replace("?", ""); return res;}

let url = parseParams(window.location.search)

if(url.includes("&")){
  var urlList = url.split("&"); 
}

try {
  console.warn("Warning: This is a warning!\n", urlList)
  for (param in urlList){
    vars[urlList[param].split("=")[0]] = urlList[param].split("=")[1]
  }
}catch{
  vars[url.split("=")[0]] = url.split("=")[1]
}

console.log(vars);
