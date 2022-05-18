const textInput = document.querySelector('#text-input');
const textInput1 = document.querySelector('#text-input1');
//входящие данные для шифровки и расшифровки

const mapWords = { //карта для зашифровки
    a: 'q', b: 'w', c: 'e',
    d: 'r', e: 't', f: 'y',
    g: 'u', h: 'i', i: 'o',
    j: 'p', k: 'a', l: 's',
    m: 'd', n: 'f', o: 'g',
    p: 'h', q: 'j', r: 'k',
    s: 'l', t: 'z', u: 'x',
    v: 'c', w: 'v', x: 'b',
    y: 'n', z: 'm'
}

const mapWords1 = { //обратная карта для расшифровки
    q: 'a', w: 'b', e: 'c',
    r: 'd', t: 'e', y: 'f',
    u: 'g', i: 'h', o: 'i',
    p: 'j', a: 'k', s: 'l',
    d: 'm', f: 'n', g: 'o',
    h: 'p', j: 'q', k: 'r',
    l: 's', z: 't', x: 'u',
    c: 'v', v: 'w', b: 'x',
    n: 'y', m: 'z',

}

//исполнение функций которые написаны ниже
encrypt();
decrypt();


function encrypt() {
    document.querySelector('#button0').onclick = () => {
        let str = textInput.value; // это input
        let str1 = "";

        if (!str) {
            alert('Please enter the text for encrypts:) ')
            return;
        }

        for (let i = 0; i < str.length; i++) {
            if (mapWords[str[i]]) {
                str1 += mapWords[str[i]]; // меняем на значения которые указанны в карте
            } else {
                str1 += str[i] //если нет такого же значения как на карте оставляем символ введенный пользователем
            }
        }
        document.querySelector('#out').textContent = str1
    }
}

function decrypt() {//всё абсолютно тоже только другаю карта символов
    document.querySelector('#button1').onclick = () => {
        let str = textInput1.value;
        let str2 = "";

        if (!str) {
            alert('Please enter the text for decrypts:) ')
            return;
        }

        for (let i = 0; i < str.length; i++) {
            if (mapWords1[str[i]]) {
                str2 += mapWords1[str[i]];
            } else {
                str2 += str[i]
            }
        }
        document.querySelector('#out1').textContent = str2
    }
}

/*Было бы хорошо чтобы вы не только прочитали код а и посмотрели как он выглядит (когда можно поклацать)*/
/*Много разных шыфровок Base64, Rot13, шифр Цезаря... Но я решил написать по максимально простому пути(не факт CryptoJS плачет) на моё мнение:)*/
