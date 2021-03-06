const {Preconditions} = require("../Preconditions")

class Cmdline {

    static getDocArg(args) {
        return Cmdline.getArg(args, Cmdline.isDoc);
    }

    static getURLArg(args) {
        return Cmdline.getArg(args, Cmdline.isURL);
    }

    static getArg(args, filter) {

        Preconditions.assertNotNull(filter, "filter");

        if (! args instanceof Array) {
            throw new Error("Args not an array");
        }

        let arg = args.filter((arg) => arg != null && filter(arg))
                         .reduce((accumulator, currentValue) => accumulator = currentValue != null? currentValue : null, null);

        return arg;

    }

    static isDoc(arg) {
        return arg.endsWith(".pdf") || arg.endsWith(".chtml") || arg.endsWith(".phz")
    }

    static isURL(arg) {
        return arg.startsWith("http:") || arg.startsWith("https:") || arg.startsWith("file:")
    }

};

module.exports.Cmdline = Cmdline;
