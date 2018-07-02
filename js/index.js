process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();

    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quiting app\n');
                process.exit();
                break;
            case 'version':
                console.log(process.env);
                break;
            default:
                process.stderr.write('wrong value\n');
                break;

        }
    }
})