var img1 = '{"name": "Fake Name 1", "size": [ "24X36", "34X45", "40X60", "60X90"], "price": [ 26000, 42000, 62000, 98000], "src": "./images/contentImage1.jpg"}'
var img2 = '{"name": "Fake Name 2", "size": [ "24X36", "34X45", "40X60", "60X90"], "price": [ 26000, 42000, 62000, 98000], "src": "./images/contentImage2.jpg"}'
var img3 = '{"name": "Fake Name 3", "size": [ "24X36", "34X45", "40X60", "60X90"], "price": [ 26000, 42000, 62000, 98000], "src": "./images/contentImage3.jpg"}'
var img4 = '{"name": "Fake Name 4", "size": [ "24X36", "34X45", "40X60", "60X90"], "price": [ 26000, 42000, 62000, 98000], "src": "./images/contentImage4.jpg"}'
var IDs = [{ id: "img1" }, { id: "img2" }, { id: "img3" }, { id: "img4" }]
var Sizes = ["24X36", "34X45", "40X60", "60X90"]

var href1 = './itemPage-24X36.html?id='
var href2 = './itemPage-34X45.html?id='
var href3 = './itemPage-40X60.html?id='
var href4 = './itemPage-60X90.html?id='
var hrefIn = './item_in_house.html?id='

var image1 = JSON.parse(img1);
var image2 = JSON.parse(img2);
var image3 = JSON.parse(img3);
var image4 = JSON.parse(img4);

//Get Url
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
};

var id = getUrlVars()["id"];
var size = getUrlVars()["size"];
console.log(id);
console.log(size);


var imageAll = document.getElementById('imgAll');
var picName = document.getElementById('name');
var picSize = document.getElementById('imgSize');
// var xsmall_href = document.getElementById('xsmall');
// var small_href = document.getElementById('small');
// var medium_href = document.getElementById('medium');
// var large_href = document.getElementById('large');

var img_modal = document.querySelector('.img_modal');
//img_modal.addEventListener('click', ImageController, false);

function ShowImage() {

    if (id === 'img1') {
        imageAll.src = image1.src;
        picName.textContent = image1.name;

    } else if (id === 'img2') {
        imageAll.src = image2.src;
        picName.textContent = image2.name;

    } else if (id === 'img3') {
        imageAll.src = image3.src;
        picName.textContent = image3.name;
        
        
    } else if (id === 'img4') {
        imageAll.src = image4.src;
        picName.textContent = image4.name;
    
    } else {
        return;
    }
}
ShowImage();

//in house href
function hrefSize() {
    if (size === "24X36") {
        document.getElementById('inHouse').href = hrefIn  + id + "&size=" + size;
    } else if (size === "34X45") {
        document.getElementById('inHouse').href = hrefIn  + id + "&size=" + size;
    } else if (size === "40X60") {
        document.getElementById('inHouse').href = hrefIn  + id + "&size=" + size;
    } else if (size === "60X90") {
        document.getElementById('inHouse').href = hrefIn  + id + "&size=" + size;
    } else {
        return;
    }
};
hrefSize();

// Control CSS of Card
function CSSControl() {
    console.log(screen.width);
    if (screen.width === 768 || screen.width === 1024) {
        document.getElementById('img_col_left').classList.remove('img_col_left');
        document.getElementById('img_col_right').classList.remove('img_col_right');
        document.getElementById('img_col_left').classList.add('col-sm-12');
        document.getElementById('img_col_right').classList.add('col-sm-12');
    } else {
        return;
    }
};
CSSControl();


// //img size
// function showSize() {
//     if (size === "24X36") {
//         picSize.textContent = Sizes[0]
//     } else if (size === "34X45") {
//         picSize.textContent = Sizes[1]
//     } else if (size === "40X60") {
//         picSize.textContent = Sizes[2]
//     } else if (size === "60X90") {
//         picSize.textContent = Sizes[3]
//     } else {
//         return;
//     }
// };
// showSize()


//go back function
function goBack() {
    window.history.back();
}

// Get img id in listItem page xsmall
// var theParent = document.querySelector('#hrefs');
// console.log(theParent);
// theParent.addEventListener('click', hrefID_xsmall);

// function hrefID_xsmall(e) {
//     var href, hrefID;
//     element = document.getElementById('xsmall');
//     href = './itemPage-24X36.html?id=';
//     console.log(element);

//     if (e.target !== e.currentTarget) {
//         var clickedItem = e.target.id;
//         hrefID = href + IDs[clickedItem].id;
//         console.log(hrefID);
//     }
//     e.stopPropagation();

//     element = hrefID;
// }
// hrefID_xsmall();












// function setCookie(cname, cvalue, exdays) {
//     var d = new Date()
//     d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
//     var expires = 'expires=' + d.toUTCString()
//     document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
// }

// function getCookie(cname) {
//     var name = cname + '='
//     var ca = document.cookie.split(';')
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i]
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1)
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length)
//         }
//     }
//     return ''
// }

// function eraseCookie(cname) {
//     setCookie(cname, '', -1)
// }





