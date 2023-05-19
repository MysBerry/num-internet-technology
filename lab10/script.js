var r = document.querySelector(':root');
var manbody = ['--1', '--2', '--3', '--4', '--5', '--6'];
var press = ['--A', '--B', '--C', '--D', '--E', '--F', '--G', '--H', '--I', '--J', '--K', '--L', '--M', '--N', '--O', '--P', '--Q', '--R', '--S', '--T', '--U', '--V', '--W', '--X', '--Y', '--Z'];
var displayQuestion = document.getElementById('display-question');
var fail = 0;
var question = 'temp';
var answer = 'temp';

function startGame() {
  r.style.setProperty('--displayStart', 'none');
  r.style.setProperty('--displaySetup', 'block');
}

function getQuestion() {
    question = document.querySelector('.question').value;
    console.log(question);
}

function getAnswer() {
    answer = document.querySelector('.answer').value;
    console.log(answer);
}

function beginGame() {
    var count = 0;

    displayQuestion.innerText = question;

    r.style.setProperty('--displaySetup', 'none');
    r.style.setProperty('--displayGame', 'block');

    var answerlen = answer.length;
    for(var i = 0; i < answerlen; i++) {
        if(answer[i] != ' ') {
            document.getElementById('window').innerHTML += '<div id="' + i + '"></div>'
        }
        else {
            document.getElementById('window').innerHTML += '<p></p>'
            count++;
        }
    }

    let letters = Array.from(document.getElementsByClassName('letter'));
    letters.map( letter => {
        letter.addEventListener('click', (e) => {
            switch(e.target.innerText) {
                default:
                    var check = 0;
                    for(var i = 0; i < answerlen; i++) {
                        if(e.target.innerText == answer[i] || e.target.innerText.toLowerCase() == answer[i]) {
                            document.getElementById(i).innerText = e.target.innerText;
                            check++;
                            count++;
                        }
                    }
                    if(check == 0) {
                        r.style.setProperty(manbody[fail], 'block');
                        fail++;
                    }
                    if(count == answerlen) {
                        document.getElementById('endtext').innerText = 'You Win!';
                        r.style.setProperty('--displayGame', 'none');
                        r.style.setProperty('--displayEnd', 'block');
                    }
                    else if(fail > 5) {
                        document.getElementById('endtext').innerText = 'You Lose!';
                        r.style.setProperty('--displayGame', 'none');
                        r.style.setProperty('--displayEnd', 'block');
                    }
                    r.style.setProperty(press[e.target.innerText.charCodeAt(0) - 65], 'none');
            }
        });
    });
}