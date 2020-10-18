var fs = require('fs');
const { stdout } = require('process');

let exec = require('child_process').exec;

module.exports = {
    
    terraform : function () {
        this.find_path = function (cmd, callback) {
            exec(cmd, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec Error:${error}`);
                    return;
                }
                var terraform_path = {path:stdout.replace('\n','')}
                
                var json = JSON.stringify(terraform_path);
                fs.writeFile('tfpath.json', json, 'utf8', callback);
                callback(stdout);
            });
        }
    }

}

