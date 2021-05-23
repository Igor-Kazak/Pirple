function timeAdder(value1, label1, value2, label2) {
    if (typeof value1 === 'number' && typeof value2 === 'number' &&
        typeof label1 === 'string' && typeof label2 === 'string' &&
        value1 > 0 && value2 > 0) {
        var total = 0;
        if (toSeconds(value1, label1) != 'incorrect singular/plural in label') {
            toSeconds(value2, label2);
        }
        else {
            return 'incorrect singular/plural in label';
        }
        function toSeconds(value, label) {
            switch (label.toLowerCase()) {
                case 'second':
                    if (value === 1) {
                        total += value;
                        break;
                    }
                    else {
                        return 'incorrect singular/plural in label'
                    }
                case 'seconds':
                    if (value > 1) {
                        total += value;
                        break;
                    }
                    else {
                        return 'incorrect singular/plural in label'
                    }
                case 'minute':
                    if (value === 1) {
                        total += value * 60;
                        break;
                    }
                    else {
                        return 'incorrect singular/plural in label'
                    }
                case 'minutes':
                    if (value > 1) {
                        total += value * 60;
                        break;
                    }
                    else {
                        return 'incorrect singular/plural in label'
                    }
                case 'hour':
                    if (value === 1) {
                        total += value * 60 * 60;
                        break;
                    }
                    else {
                        return 'incorrect singular/plural in label'
                    }
                case 'hours':
                    if (value > 1) {
                        total += value * 60 * 60;
                        break;
                    }
                    else {
                        return 'incorrect singular/plural in label'
                    }
                case 'day':
                    if (value === 1) {
                        total += value * 60 * 60 * 24;
                        break;
                    }
                    else {
                        return 'incorrect singular/plural in label'
                    }
                case 'days':
                    if (value > 1) {
                        total += value * 60 * 60 * 24;
                        break;
                    }
                    else {
                        return 'incorrect singular/plural in label'
                    }
                default:
                    return 'incorrect label input';
            }
        }

        if (total % 86400 === 0) {
            return [total / 86400, total === 86400 ? 'day' : 'days'];
        }
        else if (total % 3600 === 0) {
            return [total / 3600, total === 3600 ? 'hour' : 'hours'];
        }
        else if (total % 60 === 0) { //minutes
            return [total / 60, total === 60 ? 'minute' : 'minutes'];
        }
        else {
            return [total, total === 1 ? 'second' : 'seconds'];
        }

    }
    else {
        return 'incorrect value/label input';
    }
}

console.log(timeAdder(1, "minute", 3, "minutes"));
console.log(timeAdder(5, "days", 25, "hours"));
console.log(timeAdder(1, "minute", 240, "seconds"));
console.log(timeAdder(5, "hour", 5, "minutes"));
console.log(timeAdder(false,false,5,"minutes"));
console.log(timeAdder({},"days",5,"minutes"));