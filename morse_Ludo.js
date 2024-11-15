let board ="hello world";

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function getLatinCharacterList() {
    let board2 = []
    for (let i = 0; i < board.length; i++)
        board2.push(board[i])
        // console.log(board2)
        return board2
}

getLatinCharacterList()

// console.log(Object.keys(latinToMorse));

function translateLatinCharacter() {
    for (const key in latinToMorse) {
        console.log(latinToMorse[key])
    }
}
    // const objKey = Object.keys(latinToMorse);
    // Object.keys(latinToMorse).forEach((key) => {
    //     console.log(latinToMorse[key])
//     });
// }

translateLatinCharacter('A')