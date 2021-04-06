const fs = require('fs')
const shell = require('shelljs')
const path = './list'
const mainDir = __dirname
const dirs = fs.readdirSync(path)

dirs.map(dir => {
  const dirPath = `${mainDir}${path.replace('.','')}/${dir}`
  const argv = process.argv
  let args = new Array();
  for(let i=2 ; i<argv.length;i++){
    if(argv[i])
      args.push(argv[i])
  }
  if(fs.lstatSync(dirPath).isDirectory()){
    console.log(dirPath)
    shell.cd(dirPath)
    if(args.length > 0){
      shell.exec(`git ${args.join(' ')}`)
    }
  }
})