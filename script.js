let vars = {};

function parseParams(search){let res = search.replace("?", ""); return res;}

let url = parseParams(window.location.search)

if(url.includes("&")){
  let urlList = url.split("&"); 
}

try {
  console.log(urlList)
  for (param in urlList){
    vars[param.split("=")[0]] = param.split("=")[1]
  }
}catch{
  vars[url.split("=")[0]] = url.split("=")[1]
}

console.log(vars);
