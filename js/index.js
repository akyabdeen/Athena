
let images = ['Physics', 'Technology', 'History', 'Philosophy', 'Art'];
let i = 0;
let source;

source = '../images/' + images[i] + '.png';
document.slide.src = source;
document.getElementById("text").innerText = 'Learn ' + images[i];

function changeImage(n){
    switch(n){
        case 1:
            if (i < images.length - 1){
                i++;
            }
            else {
                i = 0;
            }
            break;
            case -1:
                if (i > 0) {
                    i--;
                }
                else {
                    i = images.length - 1;
                }
                break;
        }

    if (i != 0){
        source = '../images/' + images[i] + '.jpg';
    } else {
        source = '../images/' + images[i] + '.png';
    }

    document.slide.src = source;
    document.getElementById("text").innerText = 'Learn ' + images[i];
            
}
