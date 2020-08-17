var exec = require('child_process').exec
function execute(command, callback){
  exec(command, function(error, stdout, stderr){ callback(stdout); });
}

let cmd = 'gh issue list -s closed --limit 400 | sort -n -r'

execute(cmd, (output) => {
  console.log(output)
})
