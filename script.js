const image = document.getElementById('image');
const prevSlide = document.getElementById('prev-slide');
const nextSlide = document.getElementById('next-slide');
const text = document.getElementsByClassName('paragraph par-smaller13');
const title = document.getElementsByClassName('subtitle-h4');
const dot = document.getElementsByClassName('dot');
let index = 0;
const base = [
    {
        city: `Rostov-on-Don
        LCD admiral`,
        area: '81 m2',
        time: '3.5 months',
        photo: 'admiral'
    },
    {
        city: `Sochi
        Thieves`,
        area: '105 m2',
        time: '4 months',
        photo: 'sochi'
    },
    {
        city: `Rostov-on-Don
        Patriotic`,
        area: '93 m2',
        time: '3 months',
        photo: 'patriotic'
    }
]

nextSlide.addEventListener('click', nextData);
function nextData() {
    deactivate();
    if (index < (base.length - 1)) index++;
    else index = 0;
    dataChange(index);
}
prevSlide.addEventListener('click', prevData);
function prevData(){
    deactivate();
    if (index >= 1)  index--;
    else index = (base.length-1);
    dataChange(index);
}
function dataChange(index){
    image.src = `Images/${base[index].photo}.jpg`;
    text[0].innerText = base[index].city;
    text[1].innerText = base[index].area;
    text[2].innerText = base[index].time;
    activate(index);
}
//Listeners for onclick to name of city events
for (let i = 0; i<title.length; i++) {
    title[i].addEventListener('click', () => {
        if (title[i].classList.contains('active')) return
        else
            deactivate();
            dataChange(i);
            index = i;
    })
}
//Listeners for onclick to dots events
for (let i = 0; i<title.length; i++) {
    dot[i].addEventListener('click', () => {
        if (dot[i].src === 'Images/white-dot.svg') return
        else
            deactivate();
            dataChange(i);
            index = i;
    })
}
// set to not active state control elements
function deactivate (){
    dot[index].src = 'Images/gray-dot.svg';
    title[index].classList.toggle('active');
}
// set to active state control elements
function activate(index){
    title[index].classList.toggle('active');
    dot[index].src = 'Images/white-dot.svg';
}