
var caruselImgPos = 1;
const aboutUs = {
    carusel1:{
        position: 1,
        image: "../img/carusel1.jpg",
        title: "Mission Statement",
        caption: "To pamper your pet and provide the best grooming services"
    },
    carusel2:{
        position: 2,
        image: "../img/carusel2.jpg",
        title: "Our History",
        caption: "Lorem History etc History ipsum dolor sit, amet consectetur adipisicing elit. Quod aliquam vitae dignissimos quisquam cum delectus"
    },
    carusel3:{
        position: 3,
        image: "../img/carusel3.jpg",
        title: "About the Developer",
        caption: "Lorem devolper info ipsum dolor sit, amet consectetur adipisicing elit. Quod aliquam vitae dignissimos quisquam cum delectus"
    }
}

$('.caruselButton').hover(
    function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    }
  );

function caruselScroll(scroll){
    console.log("scroll=", scroll);
    if(scroll == 1){
        caruselImgPos = caruselImgPos + 1;
    }else if(scroll == 0){
        caruselImgPos= caruselImgPos - 1;
    }
    if(caruselImgPos == 0){
        caruselImgPos = 3;
    }else if(caruselImgPos == 4){
        caruselImgPos = 1;
    };
    console.log(caruselImgPos);
    aboutCarusel();
}

function aboutCarusel() {
    
    if(caruselImgPos == 1){
        $('#caruselImage').attr("src", aboutUs.carusel1.image);
        $('#imgHeading').html(aboutUs.carusel1.title);
        $('#imgDesc').html(aboutUs.carusel1.caption);
    }else if(caruselImgPos == 2){
        $('#caruselImage').attr("src", aboutUs.carusel2.image);
        $('#imgHeading').html(aboutUs.carusel2.title);
        $('#imgDesc').html(aboutUs.carusel2.caption);
    }else if(caruselImgPos == 3){
        $('#caruselImage').attr("src", aboutUs.carusel3.image);
        $('#imgHeading').html(aboutUs.carusel3.title);
        $('#imgDesc').html(aboutUs.carusel3.caption);
    }else{
        console.log("error")
    };
}

function contactUs(){
    let contactMessage = [$('#contactName').val(), $('#contactEmail').val(), $('#contactMess').val()];
    console.log("The user message is " + contactMessage);
    $('#contactName').val(" ");
    $('#contactEmail').val(" ");
    $('#contactMess').val(" ");
}
