const enterText = ('Тюльпан роза роза ромашка тюльпан роза')
const getMostOftenWord2 = (text) => {
    /* const words = text.toLowerCase().split(" ");если нужно можно сделать текст в нижний регистр*/
    const words = text.split(" ");

    const wordsCounter = words.reduce((acc, word) => {
        if (acc[word]) {
            acc[word]++;
        } else {
            acc[word] = 1;
        }

        return acc;
    }, {});

    const sortedKeys = Object.keys(wordsCounter).sort(
        (a, b) => wordsCounter[b] - wordsCounter[a]
    );

    return sortedKeys.slice(0, 3);
};
console.log(getMostOftenWord2(enterText))
//тяжело самому смотреть на это чудовище, простите меня:(
/*ещё и к сожалению нечего не подобавлял интерактивного ибо пытался это исправить но ни того, ни того...*/