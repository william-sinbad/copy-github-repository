require('dotenv').config()
const shell = require('shelljs')
const fetch = require("node-fetch");
const path = './list'

const main = async () => {
  const result = await fetch(`https://api.github.com/orgs/${process.env.GITHUB_ORG}/repos?per_page=1000`, {
    method: "GET",
    headers: {
      Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
    },
  }).then((res) => res.json());
  console.log(process.env);
  shell.cd(path)
  result.map(item=>{
    if(item && item.ssh_url){
      shell.exec(`git clone ${item.ssh_url}`)
    }
  })
};

main();
