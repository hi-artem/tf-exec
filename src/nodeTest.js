const { worker } = require('cluster');

fs = require('fs');

let exec = require('child_process').exec;


function os_func2() {
    this.execCommand = function (cmd, callback) {
        exec("terraform plan -out=tfplan",
            function (error, stdout, stderr) {
                fs.writeFile('tf-test-output-fail.txt', stderr, function (err) {
                    if (err) return console.log(err);
                });
                if (error !== null) {

                    console.log('exec error: ' + error);
                    return null;
                }

                console.log('stdout: ' + stdout);

            });
    }
}




function os_func() {
    this.execCommand = function (cmd, callback) {
        let child = exec("terraform validate -json",
            function (error, stdout, stderr) {

                // console.log('stderr: ' + stderr);

                // let words = stderr.replace( /\n/g, "" ).split('Error: ');
                // console.log(stderr);
                fs.writeFile('tf-test-output-fail.txt', stderr, function (err) {
                    if (err) return console.log(err);
                    // console.log('Hello World > htf-test-output');
                });
                if (error !== null) {

                    console.log('exec error: ' + error);
                    return null;
                }
                console.log('stdout: ' + stdout);
                fs.writeFile('tf-test-output.txt', stdout, function (err) {
                    if (err) return console.log(err);
                    console.log('Hello World > htf-test-output');
                });
                console.log('========================= Running Plan =========================');
                var os2 = new os_func2();

                os2.execCommand('SomeCommand', function (returnvalue) {
                    // Here you can get the return value
                });

            });
    }
}

console.log('======================= Running Validate =======================');
var os = new os_func();

os.execCommand('SomeCommand', function (returnvalue) {
    // Here you can get the return value
});
