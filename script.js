
const {body} = document



function changeBackground(number) {

    switch(number) {
        case '1':
        body.classList.add("background-1")
        if('1') { body.classList.remove('background-2')
                    body.classList.remove('background-3')}
        break

        case '2':
        body.classList.add("background-2")
        if('2') { body.classList.remove('background-1')
                    body.classList.remove('background-3')}
        break

        case '3':
        body.classList.add("background-3")
        if('3') { body.classList.remove('background-1')
                    body.classList.remove('background-2')}
        break

        default:
        break;
    }
}