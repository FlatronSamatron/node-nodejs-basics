const parseEnv = () => {
    const obj = process.env
    const arr = []
    for(let key in obj){
        if(key.toString().startsWith('RSS_')){
            arr.push(`${key}=${obj[key]}`)
        }
    }
    console.log(arr.reduce((a,b) => a + '; ' + b))
};

parseEnv();