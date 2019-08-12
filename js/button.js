var image1 = [
    {
        id: 1,
        name: 'Fake Name1',
        size: '24 X 36',
        price: 26000,
        price1: 26000,
    },
    {
        id: 2,
        name: 'Fake Name2',
        size: '34 X 45',
        price: 42000,
        price1: 42000,
    },
    {
        id: 3,
        name: 'Fake Name3',
        size: '40 X 60',
        price: 62000,
        price1: 62000,
    },
    {
        id: 4,
        name: 'Fake Name4',
        size: '60 X 90',
        price: 98000,
        price1: 98000,
    }
];

var DOMstrings = {
    modal: ".card_right",
    modal_btn: ".button_modal",
};

var theParent = document.querySelector('#parent-button');
var originContent = document.querySelector(DOMstrings.modal);

theParent.addEventListener('click', CardRight, false);
document.querySelector('.back-button').addEventListener('click', Redo, false);

function CardRight(e) {
    var html, newHtml;
    element = DOMstrings.modal;

    html = '<div class="card-body flex-sm-column align-content-start flex-wrap"><div class="row"><div class="col-sm-2"><button type="button" class="btn" id="button_back"><i class="fas fa-angle-left fa-lg"></i></button></div><div class="col-sm-10"><h4 class="card-title pt-1">%name%</h4><h4 class="card-subtitle text-muted font-weight-light">%size%</h4><p class="card-text pt-1" style="font-size: smaller">Brillant high gloss surface that shows every detail.</p></div></div> <hr><button type="button" class="btn ml-3"><i class="fab fa-facebook-square img-style fa-lg"></i></button><p class="ml-4 mt-5"><a href="#" style="font-size: small" data-toggle="modal" data-target="#img1-1-1-1"><span style="color: #cc0000;">See how it is at home?</span></a></p><div class=" row d-sm-flex"><div class="col-8"><div class="input-group"><span class="input-group-btn"><button type="button" class="btn btn-default btn-number border" disabled="disabled" data-type="minus" data-field="quant[1]"><span class="fas fa-minus"></span></button></span><div class="number-input"><input type="text" name="quant[1]" class="form-control input-number" value="0" min="0" max="10"></div><span class="input-group-btn"><button type="button" class="btn btn-default btn-number border" data-type="plus" data-field="quant[1]"><span class="fas fa-plus"></span></button></span></div></div><div class="col-4 pt-3"><p class="" style="font-size: x-small">$%price%</p></div></div><hr><div class="row d-sm-flex" style="margin-top: 110px"><div class="col pt-1"><p class="">TOTAL</p></div><div class="col"><p class="" style="font-size: larger">$%price1%</p></div></div><div class="align-bottom"><button type="button" class="btn btn-block btn-danger">Add to cart</button></div><script src="./js/plus-minus.js"></script>';
    //for (var i = 0; i < buttons.length; i++) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        newHtml = html.replace('%name%', image1[clickedItem].name);
        newHtml = newHtml.replace('%size%', image1[clickedItem].size);
        newHtml = newHtml.replace('%price%', image1[clickedItem].price);
        newHtml = newHtml.replace('%price1%', image1[clickedItem].price1);
    }
    e.stopPropagation();

    //}
    document.querySelector(element).innerHTML = newHtml;
};

//function Redo() {
//    var html;
//    element = DOMstrings.modal;
//    html = '<div class="col-sm-3 card_right"><div class="card-body flex-sm-column align-content-start flex-wrap" ><div class="row"><div class="col-sm-2"><button type="button" class="btn back_btn" onclick=""><i class="fas fa-angle-left fa-lg"></i></button></div><div class="col-sm-10"><h4 class="card-title pt-1">Fake Name</h4><h4 class="card-subtitle text-muted font-weight-light" style="font-size: small">Choose a size</h4></div></div><hr><button type="button" class="btn ml-3"><i class="fab fa-facebook-square img-style fa-lg"></i></button><div class="list-group list-group-flush" id="parent-button"><button type="button" class="list-group-item list-group-item-action button_modal" style="border-top: 0;" id="0">24 x 36<span class="mr-5"></span>$26000 <span class="mr-3"></span><i class="fas fa-angle-right"></i></button><button type="button" class="list-group-item list-group-item-action button_modal" id="1">34 x 45<span class="mr-5"></span>$42000 <span class="mr-3"></span><i class="fas fa-angle-right"></i></button><!-- 40 X 60 modal button --><button type="button" class="list-group-item list-group-item-action button_modal" data-target="#img1-1-1" id="2">40 x 60<span class="mr-5"></span>$62000 <span class="mr-3"></span><i class="fas fa-angle-right"></i></button><button type="button" class="list-group-item list-group-item-action button_modal" id="3">60 x 90<span class="mr-5"></span>$98000 <span class="mr-3"></span><i class="fas fa-angle-right"></i></button></div><br></div></div></div>'
//    document.querySelector(element).innerHTML = html;
//}
