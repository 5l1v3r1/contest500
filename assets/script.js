var equations = [
    'Password length is 11', function(pass) {
        return pass.length == 11;
    },
    'Password is numeric', function(pass) {
        for (var i = 0; i < pass.length; i++) {
            if (['0','1','2','3','4','5','6','7','8','9'].indexOf(pass[i]) < 0) return false;
        }
        return true;
    },
    'j / b = f', function(pass) {
        return Math.floor(pass[9] / pass[1]) == pass[5];
    },
    'c / i = b', function(pass) {
        return Math.floor(pass[2] / pass[8]) == pass[1];
    },
    'd / e = a', function(pass) {
        return Math.floor(pass[3] / pass[4]) == pass[0];
    },
    'h / e = b', function(pass) {
        return Math.floor(pass[7] / pass[4]) == pass[1];
    },
    'b % c = e', function(pass) {
        return pass[1] % pass[2] == pass[4];
    },
    'f % d = j / d', function(pass) {
        return pass[5] % pass[3] == Math.floor(pass[9] / pass[3]);
    },
    'k % i = j', function(pass) {
        return pass[10] % pass[8] == pass[9];
    },
    'k % d = a * b', function(pass) {
        return pass[10] % pass[3] == pass[0] * pass[1];
    },
    'e - g = i', function(pass) {
        return pass[4] - pass[6] == pass[8]
    },
    'd - g = c', function(pass) {
        return pass[3] - pass[6] == pass[2];
    },
    'k + a = d', function(pass) {
        return pass[10] + pass[0] == pass[3]
    },
    'a * b = e * i', function(pass) {
        return pass[0] * pass[1] == pass[4] * pass[8];
    }
];

function conditionFailed(_pass) {
    var pass = _pass;
    for (var i = 0; i < equations.length; i += 2) {
        if (!equations[i + 1](pass)) {
            return equations[i];
        }
        if (i == 2) {
            var arr = [];
            for (var j = 0; j < 11; j++) {
                arr[j] = parseInt(pass[j]);
            }
            pass = arr;
        }
    }
    return null;
}

$(function() {
    $('#submit-field').on('input', function() {
        updateStatus();
    });
    updateStatus();
});

function updateStatus() {
    var cond = conditionFailed($('#submit-field').val());
    if (cond) {
        $('#status-field').text(cond);
        $('#status-field').css({'background-color': '#FF2626'});
    } else {
        $('#status-field').html('That key was correct! ' + 
                                '<button id="submit-button" onclick="submit()">Submit!</button>');
        $('#status-field').css({'background-color': '#4DFF4D'});
    }
}

var isExpanded = false;
function expandDespand() {
    if (isExpanded) {
        $('#container').animate({'height': 140});
        isExpanded = false;
    } else {
        $('#container').animate({'height': 400});
        isExpanded = true;
    }
}

function submit() {
    window.location = '/submit?key=' + $('#submit-field').val();
}
