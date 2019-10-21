const test = document.getElementById('container');
const img = document.getElementById('img');

function css(){
   // test.style.color = 'red';
    test.style.fontSize = '100px';
    test.style.textDecoration = 'underline';
}

function onClick(){
    img.src= "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F414612%2Fpexels-photo-414612.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&docid=pFs_4Fcq5AgpmM&tbnid=aT1lQMo5nzpYfM%3A&vet=10ahUKEwi9r4_zpK3lAhWxSBUIHZV7AvgQMwhdKAowCg..i&w=500&h=355&bih=969&biw=1920&q=image&ved=0ahUKEwi9r4_zpK3lAhWxSBUIHZV7AvgQMwhdKAowCg&iact=mrc&uact=8";
}

css();