const parseArgs = () => {
    const arr = []

    process.argv.forEach((val, index) => {
        if(val.includes('--')){
            arr.push(`${val.slice(2)} is ${process.argv[index+1]}`)
        }
    });

    console.log(arr.reduce((a,b) => a + ', ' + b))
};

parseArgs();