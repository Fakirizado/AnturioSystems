//Oculta tudo o que não pertencer à homepage
function HomeLoad() {
    $('#section-contact-us').hide();
    $('#section-construction-homepage').hide();
    $('#construction-sections').hide();
    $('#content-first-page').show();
    $('#different_sectors').show();
    $('#div_with_sectors').show();
    $('#we-solution-page').show();
    $('#div_trusted_clients').show();
    const rndInt = Math.floor(Math.random() * 4) + 1;
    $('#distribution-sectors-slider').hide();
    $('#industry-sectors-slider').hide();
    $('#it-sectors-slider').hide();
    $('#construction-sectors-slider').hide();
    $('#title-2').html("Solução Construção");
    if (rndInt == 4) {
        $('#it-sectors-slider').show();
        $('#title-2').html("Solução TI");
    } else if (rndInt == 3) {
        $('#industry-sectors-slider').show();
        $('#title-2').html("Solução Indústria");

    } else if (rndInt == 2) {
        $('#distribution-sectors-slider').show();
        $('#title-2').html("Solução Distribuição");
    }
    else {
        $('#construction-sectors-slider').show();
        $('#title-2').html("Solução Construção");
    }
    //Adicionar Secções a ocultar na página inicial
    window.scrollTo(0, 0);
    $('#video-banner').prop("src", "img/backgroud.png");
    animate(document.getElementById("content-first-page"));
    animate(document.getElementById("video-banner"));
}

//Mostra o contact-us section e oculta tudo o resto
function ContactUsLoad() {
    $('#first-hr').hide();
    $('#content-first-page').hide();
    $('#different_sectors').hide();
    $('#div_with_sectors').hide();
    $('#we-solution-page').hide();
    $('#section-construction-homepage').hide();
    $('#div_trusted_clients').hide();
    $('#construction-sections').hide();
    $('#section-contact-us').show();
    window.scrollTo(0, 0);
    $('#video-banner').prop("src", "img/lisboa.png");
    animate(document.getElementById("section-contact-us"));
    animate(document.getElementById("video-banner"));

    $("#lisboa").addClass("hover");

    document.getElementById("lisboa").innerHTML = `Lisboa<span class=\"dot_point_geral\">.</span>`
}
//Mostra a página construção section e oculta tudo o resto
function ConstructionLoad() {
    $('#first-hr').hide();
    $('#content-first-page').hide();
    $('#div_with_sectors').hide();
    $('#we-solution-page').hide();
    $('#section-construction-homepage').hide();
    $('#section-contact-us').hide();
    $('#different_sectors').hide();
    $('#section-construction-homepage').show();
    $('#div_trusted_clients').show();
    $('#construction-sections').show();
    window.scrollTo(0, 0);
    $('#video-banner').prop("src", "img/construction_background.jpg");
    animate(document.getElementById("section-construction-homepage"));
    animate(document.getElementById("video-banner"));
}

function ChangePageButton() {
    if ($("#construction-sectors-slider").is(":visible")) {
        ConstructionLoad();

    } else if ($("#distribution-sectors-slider").is(":visible")) {


    } else if ($("#industry-sectors-slider").is(":visible")) {

    }
    else {

    }

}

function resetArrowConstruction() {
    if ($(window).width() < 601) {
        $(".vertical-line").hide();
        $("#construction-item-1").show();
        $("#construction-item-2").hide();
        $("#construction-item-3").hide();
        $("#construction-item-4").hide();
        animate(document.getElementById('construction-item-1'));
    }
    else if ($(window).width() < 993) {
        $("#construction-line-3").hide();
        $("#construction-item-3").hide();
        $("#construction-item-4").hide();
        $("#construction-line-1").show();
        $("#construction-item-1").show();
        $("#construction-item-2").show();
        animate(document.getElementById('construction-line-1'));
        animate(document.getElementById('construction-item-1'));
        animate(document.getElementById('construction-item-2'));
    }
}

function arrowConstructionRigth() {
    if ($(window).width() < 601) {
        $(".vertical-line").hide();
        if ($("#construction-item-1").is(":visible")) {
            $("#construction-item-1").hide();
            $("#construction-item-2").show();
            animate(document.getElementById('construction-item-2'));
        }
        else if ($("#construction-item-2").is(":visible")) {
            $("#construction-item-2").hide();
            $("#construction-item-3").show();
            animate(document.getElementById('construction-item-3'));

        }
        else if ($("#construction-item-3").is(":visible")) {
            $("#construction-item-3").hide();
            $("#construction-item-4").show();
            animate(document.getElementById('construction-item-4'));
        }
        else {
            $("#construction-item-4").hide();
            $("#construction-item-1").show();
            animate(document.getElementById('construction-item-1'));
        }

    }
    else if ($(window).width() < 993) {
        if ($("#construction-item-1").is(":visible")) {
            $("#construction-line-1").hide();
            $("#construction-item-1").hide();
            $("#construction-item-2").hide();
            $("#construction-line-3").show();
            $("#construction-item-3").show();
            $("#construction-item-4").show();
            animate(document.getElementById('construction-line-3'));
            animate(document.getElementById('construction-item-3'));
            animate(document.getElementById('construction-item-4'));
        }
        else {
            $("#construction-line-3").hide();
            $("#construction-item-3").hide();
            $("#construction-item-4").hide();
            $("#construction-line-1").show();
            $("#construction-item-1").show();
            $("#construction-item-2").show();
            animate(document.getElementById('construction-line-1'));
            animate(document.getElementById('construction-item-1'));
            animate(document.getElementById('construction-item-2'));
        }
    }

}

function arrowConstructionLeft() {
    if ($(window).width() < 601) {
        if ($("#construction-item-1").is(":visible")) {
            $("#construction-item-1").hide();
            $("#construction-item-4").show();
            animate(document.getElementById('construction-item-4'));
        }
        else if ($("#construction-item-2").is(":visible")) {
            $("#construction-item-2").hide();
            $("#construction-item-1").show();
            animate(document.getElementById('construction-item-1'));

        }
        else if ($("#construction-item-3").is(":visible")) {
            $("#construction-item-3").hide();
            $("#construction-item-2").show();
            animate(document.getElementById('construction-item-2'));
        }
        else {
            $("#construction-item-4").hide();
            $("#construction-item-3").show();
            animate(document.getElementById('construction-item-3'));
        }

    }
    else if ($(window).width() < 993) {
        if ($("#construction-item-1").is(":visible")) {
            $("#construction-line-1").hide();
            $("#construction-item-1").hide();
            $("#construction-item-2").hide();
            $("#construction-line-3").show();
            $("#construction-item-3").show();
            $("#construction-item-4").show();
            animate(document.getElementById('construction-line-3'));
            animate(document.getElementById('construction-item-3'));
            animate(document.getElementById('construction-item-4'));
        }
        else {
            $("#construction-line-3").hide();
            $("#construction-item-3").hide();
            $("#construction-item-4").hide();
            $("#construction-line-1").show();
            $("#construction-item-1").show();
            $("#construction-item-2").show();
            animate(document.getElementById('construction-line-1'));
            animate(document.getElementById('construction-item-1'));
            animate(document.getElementById('construction-item-2'));
        }
    }
}

function setNextPrev() {
    $carousel.on('slid.bs.carousel', function (e) {
        //Reset classes
        $carouselItems.removeClass('prev');
        $carouselItems.removeClass('next');
        //Find current slide
        var $active = $(e.relatedTarget);
        //Add corresponding classes to next and prev elements
        if ($active.next().addClass('next').length == 0) {
            $($carouselItems[0]).addClass('next');
        }
        if ($active.prev().addClass('prev').length == 0) {
            $($carouselItems[$carouselItems.length - 1]).addClass('prev');
        };
    });
}

var $carousel = $('#carouseReviews'),
    $carouselItems = $('.carousel-item', $carousel);


$("html").css("background-color", "black");
$(document).ready(function () {
    $("html").removeAttr("style");
    HomeLoad();
    $("body").show();
    $("#close-hamburguer").on("click", function () {
        $(".menu-icon").click();
    });
    $carousel = $('#carouseReviews');
    $carouselItems = $('.carousel-item', $carousel);
    setNextPrev();

    jquerySwipeHandler.handleSwipe("#arrow-construction-rigth", [
        jquerySwipeHandler.CLICK
    ], function (direction) {
        arrowConstructionRigth();
    });

    jquerySwipeHandler.handleSwipe("#arrow-construction-left", [
        jquerySwipeHandler.CLICK
    ], function (direction) {
        arrowConstructionLeft();
    });

    $(".construction_icon_button_slider").on("click", function () {
        ConstructionLoad();
    });

    $(".distribution_icon_button_slider").on("click", function () {
        //ConstructionLoad();
    });

    $(".industry_icon_button_slider").on("click", function () {
        //ConstructionLoad();
    });

    $(".it_icon_button_slider").on("click", function () {
        //ConstructionLoad();
    });



    $("#svg_construction").on("click", function () {
        ConstructionLoad();
    });

    $(".logo").on("click", function () {
        HomeLoad();
    });

    $("#more-info-button").on("click", function () {
        ChangePageButton();
    });

    setTimeout(function () {
        changeSlider();

    }, 10000);


    // ÁREA DE CLIQUES NO SLIDER

    $(".slider-item-construction").on({
        mouseenter: function () {
            clearTimeout(timer);
            $('#distribution-sectors-slider').hide();
            $('#industry-sectors-slider').hide();
            $('#it-sectors-slider').hide();
            $('#construction-sectors-slider').show();
            $('#title-2').html("Solução Construção");
            animate(document.getElementById("title-2"));
            animate(document.getElementById('construction-sectors-slider'));
            timer = setTimeout(function () {
                changeSlider();
            }, 10000);
        }
    });

    $(".slider-item-distribution").on({
        mouseenter: function () {
            clearTimeout(timer);
            $('#construction-sectors-slider').hide();
            $('#industry-sectors-slider').hide();
            $('#it-sectors-slider').hide();
            $('#distribution-sectors-slider').show();
            $('#title-2').html("Solução Distribuição");
            animate(document.getElementById("title-2"));
            animate(document.getElementById('distribution-sectors-slider'));
            timer = setTimeout(function () {
                changeSlider();

            }, 10000);
        }
    });

    $(".slider-item-industry").on({
        mouseenter: function () {
            clearTimeout(timer);
            clearTimeout(timer);
            $('#distribution-sectors-slider').hide();
            $('#construction-sectors-slider').hide();
            $('#it-sectors-slider').hide();
            $('#industry-sectors-slider').show();
            $('#title-2').html("Solução Indústria");
            animate(document.getElementById("title-2"));
            animate(document.getElementById('industry-sectors-slider'));
            timer = setTimeout(function () {
                changeSlider();

            }, 10000);
        }
    });

    $(".slider-item-it").on({
        mouseenter: function () {
            clearTimeout(timer);
            $('#construction-sectors-slider').hide();
            $('#industry-sectors-slider').hide();
            $('#distribution-sectors-slider').hide();
            $('#it-sectors-slider').show();
            $('#title-2').html("Solução TI");
            animate(document.getElementById("title-2"));
            animate(document.getElementById('it-sectors-slider'));
            timer = setTimeout(function () {
                changeSlider();

            }, 10000);
        }
    });

    //TOUCH SLIDE HANDLER

    jquerySwipeHandler.handleSwipe(".sub-homepage-info", [
        jquerySwipeHandler.SWIPE_LEFT, jquerySwipeHandler.SWIPE_RIGHT
    ], function (direction) {
        if ($(window).width() < 993) {
            if (direction == "SWIPE_RIGHT") {
                arrowConstructionLeft();
            } else if (direction == "SWIPE_LEFT") {
                arrowConstructionRigth();
            }
        }
    });

    //ALTERAÇÃO DE CORES QUANDO É MOSTRADO O MENU HAMBURGUER E ANIMAÇÕES

    $(".menu-icon").on("click", function () {
        if ($("#list-menu").hasClass("showing")) {
            setTimeout(function () {
                $(".social-media-hamburguer").removeAttr("style");
                $(".menu-icon").removeAttr("style");
                $(".menu-icon i").removeAttr("style");
                $(".dropbtn").removeAttr("style");
                $("#close-hamburguer").removeAttr("style");

                $(".logo").html(` <svg width="124" height="38" viewBox="0 0 124 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M50.1997 19.3265C50.044 19.1708 49.8882 19.1318 49.6545 19.1318C48.0967 19.1318 46.7337 18.5476 45.6043 17.4182C45.059 16.873 44.6307 16.2499 44.3191 15.5878C44.0465 14.9258 43.8907 14.1858 43.8907 13.368V7.91573H48.4472C48.6809 7.91573 48.8367 7.83784 48.9925 7.72101C49.1482 7.56523 49.2261 7.40945 49.2261 7.17578C49.2261 6.98106 49.1482 6.78633 48.9925 6.6695C48.8367 6.51372 48.6809 6.47477 48.4472 6.47477H43.8907V1.56774C43.8907 1.4509 43.8907 1.33407 43.8518 1.25618C43.8128 1.17829 43.7739 1.1004 43.696 1.02251C43.6181 0.944623 43.5402 0.905679 43.4623 0.866734C43.3844 0.827789 43.2676 0.827789 43.1508 0.827789C42.9171 0.827789 42.7613 0.905679 42.6055 1.02251C42.4497 1.17829 42.3719 1.33407 42.3719 1.56774V13.4848C42.4108 15.471 43.1508 17.1067 44.5528 18.5087C45.9548 19.9107 47.6683 20.5728 49.6156 20.5728C49.8492 20.5728 50.005 20.4949 50.1608 20.378C50.3166 20.2223 50.3555 20.0665 50.3555 19.8328C50.3555 19.716 50.3555 19.5991 50.3166 19.5213C50.3166 19.4823 50.2776 19.4044 50.1997 19.3265ZM70.2952 6.70844C70.1784 6.55266 69.9837 6.43583 69.75 6.43583C69.5553 6.43583 69.3606 6.51372 69.2437 6.6695C69.0879 6.82528 69.01 6.98106 69.01 7.17578V14.8868C69.01 16.0552 68.5817 17.0677 67.7638 17.8466C66.907 18.6645 65.8945 19.0929 64.6872 19.0929C63.4799 19.0929 62.4284 18.6645 61.6106 17.8466C60.7538 17.0288 60.3254 16.0552 60.3254 14.8868V7.17578C60.3254 6.98106 60.2475 6.78633 60.0917 6.6695V6.70844C59.9359 6.55266 59.7801 6.43583 59.5465 6.43583C59.3518 6.43583 59.157 6.51372 59.0402 6.6695C58.8844 6.82528 58.8455 6.98106 58.8455 7.17578V14.9647C58.8844 16.5615 59.4686 17.8856 60.598 18.9371C61.1822 19.4823 61.8053 19.8718 62.4673 20.1833C63.1294 20.4559 63.8694 20.6117 64.6872 20.6117C66.3229 20.6117 67.6859 20.0665 68.7764 18.9371C69.9447 17.8077 70.49 16.4836 70.49 14.8868V7.17578C70.49 6.98106 70.4121 6.78633 70.2952 6.70844ZM7.049 6.51372C5.10176 6.51372 3.42714 7.21472 2.06407 8.57779C1.40201 9.27879 0.895729 10.0577 0.545226 10.8755C0.155779 11.6934 0 12.5891 0 13.5627C0 15.51 0.701005 17.1456 2.06407 18.5476C3.46608 19.9107 5.1407 20.6117 7.049 20.6117C8.37312 20.6117 9.5804 20.2612 10.6709 19.5602C11.0603 19.3265 11.4108 19.0539 11.7224 18.7813C12.0339 18.5087 12.3455 18.1971 12.6181 17.8466V19.8718C12.6181 20.0665 12.696 20.2223 12.8128 20.417C12.9686 20.5338 13.1244 20.6117 13.3191 20.6117C13.4359 20.6117 13.5138 20.6117 13.5917 20.5728C13.6696 20.5338 13.7475 20.4949 13.8254 20.417C13.9812 20.2612 14.0201 20.0665 14.0201 19.8718V13.5627C14.0201 11.6544 13.3191 9.9798 11.956 8.57779C10.6319 7.21472 8.99623 6.51372 7.049 6.51372ZM10.9824 17.4961C9.89196 18.5866 8.56784 19.1318 7.049 19.1318C5.49121 19.1318 4.16709 18.5866 3.07663 17.4961C2.02513 16.4057 1.4799 15.0816 1.4799 13.5627C1.4799 12.0439 2.02513 10.7197 3.11558 9.6293C4.20603 8.53885 5.53015 7.99362 7.08794 7.99362C8.60678 7.99362 9.9309 8.53885 11.0214 9.6293C12.1118 10.7197 12.657 12.0439 12.657 13.5627C12.657 15.0816 12.0729 16.4057 10.9824 17.4961ZM28.2349 6.47477C26.6771 6.47477 25.353 7.02 24.2236 8.11045C23.1332 9.2009 22.5879 10.525 22.549 12.0828V19.8718C22.549 20.0665 22.6269 20.2612 22.7827 20.378C22.8995 20.5338 23.0942 20.6117 23.2889 20.6117C23.4837 20.6117 23.6394 20.5338 23.7952 20.378C23.951 20.2612 24.0289 20.1054 24.0289 19.8718V12.1607C24.0289 10.9924 24.4573 10.0187 25.2751 9.16196C26.093 8.34412 27.1055 7.91573 28.2739 7.91573C29.4422 7.91573 30.4158 8.34412 31.2726 9.16196C32.0905 9.9798 32.5188 10.9924 32.5188 12.1607V19.8718C32.5188 20.1054 32.5967 20.2612 32.7525 20.378C32.8693 20.5338 33.0641 20.6117 33.2588 20.6117C33.4535 20.6117 33.6093 20.5338 33.7261 20.378C33.8819 20.2612 33.9598 20.0665 33.9598 19.8718V12.1607C33.9598 10.6029 33.4146 9.23985 32.2852 8.1494C31.1558 7.02 29.8317 6.47477 28.2349 6.47477ZM84.7048 6.47477C83.108 6.47477 81.745 7.02 80.6545 8.11045C79.5641 9.2009 78.9799 10.525 78.941 12.1218V19.9496C78.941 20.1833 79.0188 20.3391 79.1357 20.4559C79.2915 20.6117 79.4472 20.6896 79.642 20.6896C79.8367 20.6896 80.0314 20.6117 80.1482 20.4559C80.304 20.3391 80.343 20.1444 80.343 19.9496V12.2386C80.343 11.0703 80.7714 10.0577 81.5892 9.2009C82.446 8.34412 83.4585 7.91573 84.6269 7.91573C85.7952 7.91573 86.7688 8.34412 87.6256 9.2009C88.4824 10.0577 88.9108 11.0703 88.9108 12.2386C88.9108 12.4333 88.9887 12.5891 89.1055 12.7449C89.2613 12.9007 89.456 12.9396 89.6118 12.9396C89.8455 12.9396 90.0013 12.8617 90.1181 12.7449C90.2739 12.5891 90.3518 12.4333 90.3518 12.2386C90.3518 10.6419 89.8065 9.27879 88.6771 8.18834C87.6256 7.05895 86.2626 6.47477 84.7048 6.47477ZM122.987 6.16322C122.442 6.16322 122.014 6.59161 122.014 7.13684C122.014 7.68206 122.442 8.11045 122.987 8.11045C123.533 8.11045 123.961 7.68206 123.961 7.13684C124 6.59161 123.533 6.16322 122.987 6.16322ZM115.783 6.47477C113.835 6.47477 112.161 7.17578 110.798 8.53884C109.435 9.86296 108.734 11.5376 108.734 13.4848C108.734 15.471 109.435 17.1067 110.798 18.4308C111.499 19.1318 112.239 19.6381 113.057 19.9886C113.874 20.3391 114.77 20.4949 115.783 20.4949C117.769 20.4949 119.405 19.7939 120.729 18.4308C122.092 17.1067 122.793 15.4321 122.793 13.4848C122.793 11.4986 122.092 9.86296 120.729 8.53884C119.366 7.17578 117.73 6.47477 115.783 6.47477ZM119.716 17.4572C118.626 18.5476 117.34 19.0929 115.783 19.0929C114.264 19.0929 112.94 18.5476 111.849 17.4572C110.759 16.3667 110.214 15.0816 110.214 13.5238C110.214 12.0049 110.759 10.6808 111.849 9.59035C112.94 8.4999 114.225 7.95467 115.783 7.95467C117.302 7.95467 118.626 8.4999 119.716 9.59035C120.807 10.6808 121.352 12.0049 121.352 13.5238C121.352 15.0426 120.807 16.3278 119.716 17.4572ZM99.5427 6.39688C99.348 6.39688 99.1533 6.47477 99.0364 6.59161C98.8807 6.70844 98.8417 6.90317 98.8417 7.09789V19.8718C98.8417 20.0665 98.9196 20.2223 99.0364 20.378C99.1922 20.5338 99.348 20.5728 99.5427 20.5728C99.7764 20.5728 99.9322 20.5338 100.01 20.417C100.166 20.2223 100.244 20.0275 100.244 19.8328V7.09789C100.244 6.94211 100.166 6.74739 100.01 6.51372C99.9322 6.43583 99.7764 6.39688 99.5427 6.39688ZM99.5817 0.944623C99.3869 0.944623 99.1922 1.02251 99.0754 1.17829C98.9196 1.33407 98.8417 1.48985 98.8417 1.68457V4.09915C98.8417 4.29387 98.9196 4.48859 99.0754 4.60543C99.1922 4.76121 99.3869 4.80015 99.5817 4.80015C99.8153 4.80015 99.9711 4.72226 100.088 4.60543C100.244 4.44965 100.283 4.29387 100.283 4.09915V1.68457C100.283 1.48985 100.205 1.33407 100.049 1.17829C99.9711 1.02251 99.7764 0.944623 99.5817 0.944623Z"
                    fill="white" />
                <path
                    d="M24.1675 37.6037C25.3265 37.6037 26.1677 36.828 26.1677 35.8372C26.1677 34.9212 25.7751 34.3885 24.2984 33.7061C23.0272 33.1079 22.7094 32.8089 22.7094 32.1826C22.7094 31.5751 23.2328 31.0984 24.0273 31.0984C24.6909 31.0984 25.1209 31.3882 25.4293 31.9303L25.5321 31.949L25.906 31.6966C25.5321 31.0143 24.9152 30.6404 24.046 30.6404C22.8964 30.6404 22.1673 31.304 22.1673 32.2013C22.1673 33.0332 22.616 33.5566 23.9338 34.1361C25.2798 34.7249 25.6256 35.1455 25.6256 35.8372C25.6256 36.5475 25.0181 37.1364 24.1582 37.1364C23.4011 37.1364 22.8683 36.7999 22.429 35.9587L22.3262 35.94L21.9336 36.2017C22.4664 37.2205 23.1768 37.6037 24.1675 37.6037Z"
                    fill="white" />
                <path
                    d="M36.7221 37.4355H37.2455V34.6875L39.5635 30.818H38.984L37.8811 32.7434C37.6007 33.2295 37.2922 33.7248 37.0025 34.2109H36.9744C36.6753 33.7248 36.3669 33.2295 36.0865 32.7341L34.9836 30.818H34.4041L36.7221 34.6875V37.4355Z"
                    fill="white" />
                <path
                    d="M49.9787 37.6037C51.1377 37.6037 51.9789 36.828 51.9789 35.8372C51.9789 34.9212 51.5864 34.3885 50.1096 33.7061C48.8384 33.1079 48.5206 32.8089 48.5206 32.1826C48.5206 31.5751 49.0441 31.0984 49.8385 31.0984C50.5022 31.0984 50.9321 31.3882 51.2405 31.9303L51.3434 31.949L51.7172 31.6966C51.3434 31.0143 50.7265 30.6404 49.8572 30.6404C48.7076 30.6404 47.9785 31.304 47.9785 32.2013C47.9785 33.0332 48.4272 33.5566 49.7451 34.1361C51.091 34.7249 51.4368 35.1455 51.4368 35.8372C51.4368 36.5475 50.8293 37.1364 49.9694 37.1364C49.2123 37.1364 48.6795 36.7999 48.2402 35.9587L48.1374 35.94L47.7449 36.2017C48.2776 37.2205 48.988 37.6037 49.9787 37.6037Z"
                    fill="white" />
                <path d="M62.627 31.304V37.4355H63.1504V31.304H65.5058V30.818H60.2809V31.304H62.627Z"
                    fill="white" />
                <path
                    d="M74.2607 30.818V37.4355H77.9434L77.9994 36.9495H74.7842V34.2856H77.7751V33.7996H74.7842V31.304H77.9994L77.9434 30.818H74.2607Z"
                    fill="white" />
                <path
                    d="M90.5605 35.725L88.0462 30.818H87.3078V37.4355H87.8219V31.491H87.8406L90.5044 36.6504H90.6166L93.2897 31.491H93.3084V37.4355H93.8225V30.818H93.0841L90.5792 35.725H90.5605Z"
                    fill="white" />
                <path
                    d="M105.207 37.6037C106.366 37.6037 107.207 36.828 107.207 35.8372C107.207 34.9212 106.814 34.3885 105.337 33.7061C104.066 33.1079 103.749 32.8089 103.749 32.1826C103.749 31.5751 104.272 31.0984 105.066 31.0984C105.73 31.0984 106.16 31.3882 106.468 31.9303L106.571 31.949L106.945 31.6966C106.571 31.0143 105.954 30.6404 105.085 30.6404C103.935 30.6404 103.206 31.304 103.206 32.2013C103.206 33.0332 103.655 33.5566 104.973 34.1361C106.319 34.7249 106.665 35.1455 106.665 35.8372C106.665 36.5475 106.057 37.1364 105.197 37.1364C104.44 37.1364 103.907 36.7999 103.468 35.9587L103.365 35.94L102.973 36.2017C103.506 37.2205 104.216 37.6037 105.207 37.6037Z"
                    fill="white" />
            </svg>
                `);
                $("nav ul").toggleClass("showing-display");
            }, 700);

        }
        else {
            $(".logo").html(`<svg width="124" height="38" viewBox="0 0 180 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.9939 26.6596C72.7694 26.4351 72.5449 26.379 72.2082 26.379C69.9632 26.379 67.9988 25.5371 66.3711 23.9095C65.5854 23.1237 64.968 22.2257 64.519 21.2716C64.1261 20.3175 63.9016 19.2511 63.9016 18.0724V10.2149H70.4683C70.805 10.2149 71.0295 10.1026 71.254 9.93423C71.4785 9.70972 71.5908 9.48522 71.5908 9.14847C71.5908 8.86784 71.4785 8.58721 71.254 8.41884C71.0295 8.19433 70.805 8.13821 70.4683 8.13821H63.9016V1.06639C63.9016 0.898009 63.9016 0.729632 63.8455 0.617381C63.7893 0.50513 63.7332 0.392879 63.621 0.280628C63.5087 0.168377 63.3965 0.112251 63.2842 0.0561256C63.172 0 63.0036 0 62.8352 0C62.4985 0 62.2739 0.112251 62.0494 0.280628C61.8249 0.50513 61.7127 0.729632 61.7127 1.06639V18.2408C61.7688 21.1032 62.8352 23.4605 64.8557 25.481C66.8762 27.5015 69.3458 28.4557 72.152 28.4557C72.4888 28.4557 72.7133 28.3434 72.9378 28.175C73.1623 27.9505 73.2184 27.726 73.2184 27.3893C73.2184 27.2209 73.2184 27.0525 73.1623 26.9403C73.1623 26.8841 73.1062 26.7719 72.9939 26.6596ZM101.955 8.47496C101.786 8.25046 101.506 8.08208 101.169 8.08208C100.888 8.08208 100.608 8.19433 100.439 8.41884C100.215 8.64334 100.103 8.86784 100.103 9.14847V20.2613C100.103 21.9451 99.4852 23.4044 98.3066 24.5269C97.0718 25.7055 95.6125 26.3229 93.8726 26.3229C92.1328 26.3229 90.6174 25.7055 89.4387 24.5269C88.204 23.3482 87.5866 21.9451 87.5866 20.2613V9.14847C87.5866 8.86784 87.4743 8.58721 87.2498 8.41884V8.47496C87.0253 8.25046 86.8008 8.08208 86.4641 8.08208C86.1834 8.08208 85.9028 8.19433 85.7344 8.41884C85.5099 8.64334 85.4538 8.86784 85.4538 9.14847V20.3736C85.5099 22.6747 86.3518 24.583 87.9795 26.0984C88.8213 26.8841 89.7193 27.4454 90.6735 27.8944C91.6276 28.2873 92.694 28.5118 93.8726 28.5118C96.2299 28.5118 98.1943 27.726 99.7658 26.0984C101.45 24.4707 102.235 22.5625 102.235 20.2613V9.14847C102.235 8.86784 102.123 8.58721 101.955 8.47496ZM10.8068 8.19433C8.00052 8.19433 5.58712 9.20459 3.62273 11.169C2.66859 12.1792 1.93896 13.3018 1.43383 14.4804C0.872574 15.659 0.648071 16.9499 0.648071 18.3531C0.648071 21.1593 1.65833 23.5166 3.62273 25.5371C5.64325 27.5015 8.05665 28.5118 10.8068 28.5118C12.7151 28.5118 14.455 28.0067 16.0265 26.9964C16.5877 26.6596 17.0929 26.2668 17.5419 25.8739C17.9909 25.481 18.4399 25.032 18.8328 24.5269V27.4454C18.8328 27.726 18.945 27.9505 19.1134 28.2312C19.3379 28.3995 19.5624 28.5118 19.843 28.5118C20.0114 28.5118 20.1236 28.5118 20.2359 28.4557C20.3481 28.3995 20.4604 28.3434 20.5726 28.2312C20.7972 28.0067 20.8533 27.726 20.8533 27.4454V18.3531C20.8533 15.6029 19.843 13.1895 17.8786 11.169C15.9704 9.20459 13.6131 8.19433 10.8068 8.19433ZM16.4755 24.0217C14.904 25.5933 12.9957 26.379 10.8068 26.379C8.56178 26.379 6.65351 25.5933 5.08199 24.0217C3.5666 22.4502 2.78084 20.542 2.78084 18.3531C2.78084 16.1642 3.5666 14.2559 5.13812 12.6844C6.70963 11.1129 8.6179 10.3271 10.8629 10.3271C13.0518 10.3271 14.9601 11.1129 16.5316 12.6844C18.1031 14.2559 18.8889 16.1642 18.8889 18.3531C18.8889 20.542 18.047 22.4502 16.4755 24.0217ZM41.3391 8.13821C39.0941 8.13821 37.1858 8.92397 35.5582 10.4955C33.9867 12.067 33.2009 13.9753 33.1448 16.2203V27.4454C33.1448 27.726 33.257 28.0067 33.4815 28.175C33.6499 28.3995 33.9305 28.5118 34.2112 28.5118C34.4918 28.5118 34.7163 28.3995 34.9408 28.175C35.1653 28.0067 35.2775 27.7822 35.2775 27.4454V16.3325C35.2775 14.6488 35.8949 13.2456 37.0736 12.0109C38.2522 10.8322 39.7115 10.2149 41.3952 10.2149C43.079 10.2149 44.4821 10.8322 45.7169 12.0109C46.8955 13.1895 47.5129 14.6488 47.5129 16.3325V27.4454C47.5129 27.7822 47.6252 28.0067 47.8497 28.175C48.0181 28.3995 48.2987 28.5118 48.5793 28.5118C48.8599 28.5118 49.0844 28.3995 49.2528 28.175C49.4773 28.0067 49.5896 27.726 49.5896 27.4454V16.3325C49.5896 14.0875 48.8038 12.1231 47.1762 10.5516C45.5485 8.92397 43.6403 8.13821 41.3391 8.13821ZM122.721 8.13821C120.42 8.13821 118.456 8.92397 116.884 10.4955C115.313 12.067 114.471 13.9753 114.415 16.2764V27.5577C114.415 27.8944 114.527 28.1189 114.695 28.2873C114.92 28.5118 115.144 28.624 115.425 28.624C115.705 28.624 115.986 28.5118 116.154 28.2873C116.379 28.1189 116.435 27.8383 116.435 27.5577V16.4448C116.435 14.761 117.053 13.3018 118.231 12.067C119.466 10.8322 120.925 10.2149 122.609 10.2149C124.293 10.2149 125.696 10.8322 126.931 12.067C128.165 13.3018 128.783 14.761 128.783 16.4448C128.783 16.7254 128.895 16.9499 129.063 17.1744C129.288 17.3989 129.569 17.4551 129.793 17.4551C130.13 17.4551 130.354 17.3428 130.523 17.1744C130.747 16.9499 130.859 16.7254 130.859 16.4448C130.859 14.1436 130.074 12.1792 128.446 10.6077C126.931 8.98009 124.966 8.13821 122.721 8.13821ZM177.893 7.6892C177.107 7.6892 176.489 8.30658 176.489 9.09234C176.489 9.8781 177.107 10.4955 177.893 10.4955C178.678 10.4955 179.296 9.8781 179.296 9.09234C179.352 8.30658 178.678 7.6892 177.893 7.6892ZM167.509 8.13821C164.703 8.13821 162.29 9.14847 160.325 11.1129C158.361 13.0211 157.351 15.4345 157.351 18.2408C157.351 21.1032 158.361 23.4605 160.325 25.3688C161.336 26.379 162.402 27.1087 163.581 27.6138C164.759 28.1189 166.05 28.3434 167.509 28.3434C170.372 28.3434 172.729 27.3332 174.637 25.3688C176.602 23.4605 177.612 21.0471 177.612 18.2408C177.612 15.3784 176.602 13.0211 174.637 11.1129C172.673 9.14847 170.316 8.13821 167.509 8.13821ZM173.178 23.9656C171.607 25.5371 169.754 26.3229 167.509 26.3229C165.32 26.3229 163.412 25.5371 161.841 23.9656C160.269 22.3941 159.483 20.542 159.483 18.2969C159.483 16.108 160.269 14.1998 161.841 12.6283C163.412 11.0567 165.264 10.271 167.509 10.271C169.698 10.271 171.607 11.0567 173.178 12.6283C174.75 14.1998 175.535 16.108 175.535 18.2969C175.535 20.4858 174.75 22.338 173.178 23.9656ZM144.105 8.02596C143.824 8.02596 143.544 8.13821 143.375 8.30658C143.151 8.47496 143.095 8.75559 143.095 9.03622V27.4454C143.095 27.726 143.207 27.9505 143.375 28.175C143.6 28.3995 143.824 28.4557 144.105 28.4557C144.442 28.4557 144.666 28.3995 144.779 28.2312C145.003 27.9505 145.115 27.6699 145.115 27.3893V9.03622C145.115 8.81171 145.003 8.53109 144.779 8.19433C144.666 8.08208 144.442 8.02596 144.105 8.02596ZM144.161 0.168377C143.881 0.168377 143.6 0.280628 143.432 0.50513C143.207 0.729632 143.095 0.954135 143.095 1.23476V4.71455C143.095 4.99518 143.207 5.2758 143.432 5.44418C143.6 5.66868 143.881 5.72481 144.161 5.72481C144.498 5.72481 144.722 5.61256 144.891 5.44418C145.115 5.21968 145.171 4.99518 145.171 4.71455V1.23476C145.171 0.954135 145.059 0.729632 144.835 0.50513C144.722 0.280628 144.442 0.168377 144.161 0.168377Z" fill="#ED1C23"/>
            <path d="M35.4772 52.9996C37.1475 52.9996 38.3598 51.8816 38.3598 50.4538C38.3598 49.1337 37.7941 48.3659 35.6658 47.3826C33.8339 46.5205 33.3759 46.0894 33.3759 45.1869C33.3759 44.3114 34.1302 43.6244 35.2752 43.6244C36.2316 43.6244 36.8512 44.042 37.2957 44.8232L37.4439 44.8502L37.9827 44.4865C37.4439 43.5032 36.5548 42.9644 35.3021 42.9644C33.6453 42.9644 32.5946 43.9207 32.5946 45.2139C32.5946 46.4127 33.2412 47.167 35.1405 48.0022C37.0802 48.8508 37.5786 49.457 37.5786 50.4538C37.5786 51.4775 36.703 52.3261 35.4638 52.3261C34.3727 52.3261 33.6049 51.8412 32.9718 50.6289L32.8236 50.6019L32.2579 50.9791C33.0257 52.4473 34.0494 52.9996 35.4772 52.9996Z" fill="#424242"/>
            <path d="M53.5704 52.7571H54.3247V48.7969L57.6653 43.2203H56.8301L55.2407 45.9951C54.8366 46.6956 54.392 47.4095 53.9745 48.1099H53.9341C53.503 47.4095 53.0585 46.6956 52.6544 45.9817L51.0649 43.2203H50.2298L53.5704 48.7969V52.7571Z" fill="#424242"/>
            <path d="M72.6753 52.9996C74.3456 52.9996 75.5579 51.8816 75.5579 50.4538C75.5579 49.1337 74.9922 48.3659 72.8639 47.3826C71.032 46.5205 70.574 46.0894 70.574 45.1869C70.574 44.3114 71.3283 43.6244 72.4733 43.6244C73.4297 43.6244 74.0493 44.042 74.4938 44.8232L74.642 44.8502L75.1808 44.4865C74.642 43.5032 73.7529 42.9644 72.5002 42.9644C70.8434 42.9644 69.7927 43.9207 69.7927 45.2139C69.7927 46.4127 70.4393 47.167 72.3386 48.0022C74.2783 48.8508 74.7767 49.457 74.7767 50.4538C74.7767 51.4775 73.9011 52.3261 72.6619 52.3261C71.5708 52.3261 70.803 51.8412 70.1699 50.6289L70.0217 50.6019L69.456 50.9791C70.2238 52.4473 71.2475 52.9996 72.6753 52.9996Z" fill="#424242"/>
            <path d="M90.9035 43.9207V52.7571H91.6578V43.9207H95.0523V43.2203H87.5225V43.9207H90.9035Z" fill="#424242"/>
            <path d="M107.67 43.2203V52.7571H112.977L113.058 52.0567H108.424V48.2177H112.734V47.5173H108.424V43.9207H113.058L112.977 43.2203H107.67Z" fill="#424242"/>
            <path d="M131.16 50.2921L127.537 43.2203H126.473V52.7571H127.213V44.1901H127.24L131.079 51.6257H131.241L135.093 44.1901H135.12V52.7571H135.861V43.2203H134.797L131.187 50.2921H131.16Z" fill="#424242"/>
            <path d="M152.268 52.9996C153.938 52.9996 155.15 51.8816 155.15 50.4538C155.15 49.1337 154.584 48.3659 152.456 47.3826C150.624 46.5205 150.166 46.0894 150.166 45.1869C150.166 44.3114 150.921 43.6244 152.065 43.6244C153.022 43.6244 153.641 44.042 154.086 44.8232L154.234 44.8502L154.773 44.4865C154.234 43.5032 153.345 42.9644 152.092 42.9644C150.436 42.9644 149.385 43.9207 149.385 45.2139C149.385 46.4127 150.031 47.167 151.931 48.0022C153.87 48.8508 154.369 49.457 154.369 50.4538C154.369 51.4775 153.493 52.3261 152.254 52.3261C151.163 52.3261 150.395 51.8412 149.762 50.6289L149.614 50.6019L149.048 50.9791C149.816 52.4473 150.84 52.9996 152.268 52.9996Z" fill="#424242"/>
            </svg>
            `);
            $(".social-media-hamburguer").css("display", "flex");
            $(".menu-icon").css("background", "white");
            $(".menu-icon").css("height", "90px");
            $(".menu-icon i").css("display", "none");
            $(".dropbtn").css("color", "black");
            $("#close-hamburguer").css("display", "block");

            $("#sectors-btn").html(`Setores <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="#212121" stroke-width="1"/>
            </svg>`);
            $("nav ul").toggleClass("showing-display");
        }
        $("nav ul").toggleClass("showing");

    });

    // QUANDO UM MENU DO HEADER É SELECIADO ALTERA A COR DOS RESTANTES ELEMENTOS

    $("#language-btn, #dropdown-language").on({
        mouseenter: function () {
            if ($(window).width() > 992) {
                $("#language-btn").html(`PT <svg width="11" height="7" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3.25L3.5 0.75L1 3.25" stroke="white" stroke-width="1"/>
            </svg>`);
                $("#our-contacts").css("color", "rgba(255, 255, 255, 0.30)");
                $("#our-blog").css("color", "rgba(255, 255, 255, 0.30)");
                $("#our-team").css("color", "rgba(255, 255, 255, 0.30)");
                $("#sectors-btn").css("color", "rgba(255, 255, 255, 0.30)");
                $("#sectors-btn svg path").attr("stroke-opacity", "0.4");
            }
        }, mouseleave: function () {
            if ($(window).width() > 992) {
                $("#language-btn").html(`PT <svg width="11" height="7"
            viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.75L3.5 3.25L6 0.75" stroke="white" stroke-opacity="0.74"
                stroke-width="1" />`);
                $("#our-contacts").removeAttr("style");
                $("#our-blog").removeAttr("style");
                $("#our-team").removeAttr("style");
                $("#sectors-btn").removeAttr("style");
                $("#sectors-btn svg path").attr("stroke-opacity", "0.74");
            }
        }
    });

    $("#our-contacts").on({
        mouseenter: function () {
            if ($(window).width() > 992) {
                $("#sectors-btn svg path").attr("stroke-opacity", "0.4");
                $("#language-btn").css("color", "rgba(255, 255, 255, 0.30)");
                $("#our-blog").css("color", "rgba(255, 255, 255, 0.30)");
                $("#our-team").css("color", "rgba(255, 255, 255, 0.30)");
                $("#sectors-btn").css("color", "rgba(255, 255, 255, 0.30)");
                $("#language-btn svg path").attr("stroke-opacity", "0.4");
                $("#sectors-btn svg path").attr("stroke-opacity", "0.4");

            }
        }, mouseleave: function () {
            if ($(window).width() > 992) {
                $("#language-btn").removeAttr("style");
                $("#our-blog").removeAttr("style");
                $("#our-team").removeAttr("style");
                $("#sectors-btn").removeAttr("style");
                $("#sectors-btn svg path").attr("stroke-opacity", "0.74");
                $("#language-btn svg path").attr("stroke-opacity", "0.74");
            }
        }
    });

    $("#our-blog").on({
        mouseenter: function () {
            if ($(window).width() > 992) {
                $("#our-contacts").css("color", "rgba(255, 255, 255, 0.30)");
                $("#language-btn").css("color", "rgba(255, 255, 255, 0.30)");
                $("#our-team").css("color", "rgba(255, 255, 255,  0.30)");
                $("#sectors-btn").css("color", "rgba(255, 255, 255,  0.30)");
                $("#sectors-btn svg path").attr("stroke-opacity", "0.4");
                $("#language-btn svg path").attr("stroke-opacity", "0.4");
            }

        }, mouseleave: function () {
            if ($(window).width() > 992) {
                $("#our-contacts").removeAttr("style");
                $("#language-btn").removeAttr("style");
                $("#our-team").removeAttr("style");
                $("#sectors-btn").removeAttr("style");
                $("#sectors-btn svg path").attr("stroke-opacity", "0.74");
                $("#language-btn svg path").attr("stroke-opacity", "0.74");
            }
        }
    });

    $("#sectors-btn, #dropdown-sectors").on({
        mouseenter: function () {
            if ($(window).width() > 992) {
                $("#sectors-btn").html(`Setores <svg width="11" height="7" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3.25L3.5 0.75L1 3.25" stroke="white" stroke-width="1"/>
        </svg>`);
                $("#our-contacts").css("color", "rgba(255, 255, 255,  0.30)");
                $("#our-blog").css("color", "rgba(255, 255, 255,  0.30)");
                $("#our-team").css("color", "rgba(255, 255, 255,  0.30)");
                $("#language-btn").css("color", "rgba(255, 255, 255,  0.30)");
                $("#language-btn svg path").attr("stroke-opacity", "0.40");
            }
        }, mouseleave: function () {
            if ($(window).width() > 992) {
                $("#sectors-btn").html(`Setores <svg width="11" height="7"
            viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.75L3.5 3.25L6 0.75" stroke="white" stroke-opacity="0.74"
                stroke-width="1" /></svg>`);

                $("#our-contacts").removeAttr("style");
                $("#our-blog").removeAttr("style");
                $("#our-team").removeAttr("style");
                $("#language-btn").removeAttr("style");
                $("#language-btn svg path").attr("stroke-opacity", "0.74");
            }
        }
    });

    $("#our-team").on({
        mouseenter: function () {
            if ($(window).width() > 992) {
                $("#our-contacts").css("color", "rgba(255, 255, 255,  0.30)");
                $("#our-blog").css("color", "rgba(255, 255, 255, 0.30)");
                $("#sectors-btn").css("color", "rgba(255, 255, 255,  0.30)");
                $("#language-btn").css("color", "rgba(255, 255, 255, 0.30)");
                $("#sectors-btn svg path").attr("stroke-opacity", "0.4");
                $("#language-btn svg path").attr("stroke-opacity", "0.4");
            }
        }, mouseleave: function () {
            if ($(window).width() > 992) {
                $("#our-contacts").removeAttr("style");
                $("#our-blog").removeAttr("style");
                $("#sectors-btn").removeAttr("style");
                $("#language-btn").removeAttr("style");
                $("#sectors-btn svg path").attr("stroke-opacity", "0.74");
                $("#language-btn svg path").attr("stroke-opacity", "0.74");
            }
        }
    });

    $("#first-dropdown-option-1").on({
        mouseenter: function () {
            $("#first-dropdown-option-1").html(`Construção <span
            class="dot_point_geral">.</span>`)
        }, mouseleave: function () {
            $("#first-dropdown-option-1").html(`Construção`);
        }
    });

    $("#first-dropdown-option-2").on({
        mouseenter: function () {
            $("#first-dropdown-option-2").html(`Distribuição <span
            class="dot_point_geral">.</span>`);

        }, mouseleave: function () {
            $("#first-dropdown-option-2").html(`Distribuição`);
        }
    });

    $("#first-dropdown-option-3").on({
        mouseenter: function () {
            $("#first-dropdown-option-3").html(`Indústria <span
            class="dot_point_geral">.</span>`);

        }, mouseleave: function () {
            $("#first-dropdown-option-3").html(`Indústria`);
        }
    });

    $("#first-dropdown-option-4").on({
        mouseenter: function () {
            $("#first-dropdown-option-4").html(`TI <span
            class="dot_point_geral">.</span>`);

        }, mouseleave: function () {
            $("#first-dropdown-option-4").html(`TI`);
        }
    });

    $("#buttonOne").on({
        click: function () {
            changeManagementHeadingOne();
        }
    })

    $("#buttonTwo").on({
        click: function () {
            changeManagementHeadingTwo();
        }
    });

    $("#buttonThree").on({
        click: function () {
            changeManagementHeadingThree();
        }
    });

    $("#buttonFour").on({
        click: function () {
            changeManagementHeadingFour();
        }
    });

    $("#buttonFive").on({
        click: function () {
            changeManagementHeadingFive();
        }
    });

    $("#buttonSix").on({
        click: function () {
            changeManagementHeadingSix();
        }
    });

    $('#first_svg_management').on({
        click: function () {
            $('#buttonOne').click();
            changeManagementHeadingOne();
        }
    })
    $('#second_svg_management').on({
        click: function () {
            $('#buttonTwo').click();
            changeManagementHeadingTwo();
        }
    })
    $('#third_svg_management').on({
        click: function () {
            $('#buttonThree').click();
            changeManagementHeadingThree();
        }
    })
    $('#fourth_svg_management').on({
        click: function () {
            $('#buttonFour').click();
            changeManagementHeadingFour();
        }
    })
    $('#fifth_svg_management').on({
        click: function () {
            $('#buttonFive').click();
            changeManagementHeadingFive();
        }
    })
    $('#sixth_svg_management').on({
        click: function () {
            $('#buttonSix').click();
            changeManagementHeadingSix();
        }
    })
    resizePhone();
    changeSvg();
    moveTextAboveSVG();
    changeSizesSVG();
    //Adicionar submenu em dispositivos móveis
    var sectorsbtn = document.getElementById("sectors-btn");
    sectorsbtn.onclick = function (event) {
        if ($(window).width() < 993) {
            if ($(".li-sub").length > 0) {
                $("#sectors-btn").html(`Setores <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="#212121" stroke-width="1.8"/>
                </svg>`);
                $('.li-sub').remove();
            }
            else {
                $("#sectors-btn").html(`Setores <svg width="14" height="9" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3.25L3.5 0.75L1 3.25" stroke="#212121" stroke-width="1"/>
                </svg>
                `);
                $("#list-menu li:eq(0)").after(`<li class="li-sub"><a class="dropbtn-sub" onclick="ITHamburguerClick()">TI</a></li>`);
                $("#list-menu li:eq(0)").after('<li class="li-sub"><a class="dropbtn-sub" onclick="IndustryHamburguerClick()">Indústria</a></li>');
                $("#list-menu li:eq(0)").after('<li class="li-sub"><a class="dropbtn-sub" onclick="DistributionHamburguerClick()">Distribuição</a></li>');
                $("#list-menu li:eq(0)").after('<li class="li-sub"><a class="dropbtn-sub" onclick="ConstructionHamburguerClick()">Construção</a></li>');
            }
        }
    }

    svgs_hovers();
    changeHtmlIdealSolution();

    var svg_offices = `<svg class="contacts_svg" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.95833 1.95833V13.0417H13.0417V7.5H14.625V13.0417C14.625 13.9125 13.9125 14.625 13.0417 14.625H1.95833C1.07958 14.625 0.375 13.9125 0.375 13.0417V1.95833C0.375 1.0875 1.07958 0.375 1.95833 0.375H7.5V1.95833H1.95833ZM9.08333 1.95833V0.375H14.625V5.91667H13.0417V3.07458L5.25958 10.8567L4.14333 9.74042L11.9254 1.95833H9.08333Z" fill="white" fill-opacity="0.74"/>
    </svg>`


    $("#lisboa").on({
        mouseenter: function () {
            $("#lisboa").html(`Lisboa<span
            class="dot_point_geral">.</span>`)
        }, mouseleave: function () {
            if (document.getElementById('lisboa').classList.contains('hover')) {
            } else {
                $("#lisboa").html(`Lisboa`);
            }
        }
    });
    $("#lisboa").on("click", function () {
        $("#offices_cities_text li a").removeClass("hover");
        $("#lisboa").addClass("hover");
        takeDotsOut()
        $("#lisboa").html(`Lisboa<span
        class="dot_point_geral">.</span>`)

        document.getElementById('text_offices').innerHTML = "Av. Cor. Eduardo Galhardo, 3," + svg_offices + "<br> 1170-105 Lisboa, Portugal"
        document.getElementById('phones_offices1').innerHTML = "(+351) 211 454 004" + svg_offices;
        document.getElementById('phones_offices2').innerHTML = "(+351) 960 256 862" + svg_offices;
        document.getElementById('phones_offices3').innerHTML = "(+351) 965 258 220 (Dir. Comercial)" + svg_offices;
        $("#video-banner").attr("src", "img/lisboa.png");
    });

    $("#porto").on({
        mouseenter: function () {
            $("#porto").html(`Porto <span
            class="dot_point_geral">.</span>`)
        }, mouseleave: function () {
            if (document.getElementById('porto').classList.contains('hover')) {
            } else {
                $("#porto").html(`Porto`);
            }
        }
    }
    );
    $("#porto").on("click", function () {
        $("#offices_cities_text li a").removeClass("hover");
        $("#porto").addClass("hover");
        takeDotsOut();
        $("#porto").html(`Porto<span class="dot_point_geral">.</span>`);
        document.getElementById('text_offices').innerHTML = "Morada Porto" + svg_offices;
        document.getElementById('phones_offices1').innerHTML = "Phones Porto" + svg_offices;
        document.getElementById('phones_offices2').innerHTML = "Phones Porto" + svg_offices;
        document.getElementById('phones_offices3').innerHTML = "Phones Porto" + svg_offices;
        $("#video-banner").attr("src", "img/porto.png");
    });

    $("#setubal").on({
        mouseenter: function () {
            $("#setubal").html(`Setúbal<span
            class="dot_point_geral">.</span>`)
        }, mouseleave: function () {
            if (document.getElementById('setubal').classList.contains('hover')) {
            } else {
                $("#setubal").html(`Setúbal`);
            }
        }
    });

    $("#setubal").on("click", function () {
        $("#offices_cities_text li a").removeClass("hover");
        $("#setubal").addClass("hover");
        takeDotsOut();
        $("#setubal").html(`Setúbal<span class="dot_point_geral">.</span>`);
        document.getElementById('text_offices').innerHTML = "Morada Setúbal" + svg_offices;
        document.getElementById('phones_offices1').innerHTML = "Phones Setúbal" + svg_offices;
        document.getElementById('phones_offices2').innerHTML = "Phones Setúbal" + svg_offices;
        document.getElementById('phones_offices3').innerHTML = "Phones Setúbal" + svg_offices;
        $("#video-banner").attr("src", "img/setubal.png");
    });

    $("#faro").on({
        mouseenter: function () {
            $("#faro").html(`Faro<span
            class="dot_point_geral">.</span>`)
        }, mouseleave: function () {
            if (document.getElementById('faro').classList.contains('hover')) {
            } else {
                $("#faro").html(`Faro`);
            }
        }
    });

    $("#faro").on("click", function () {
        $("#offices_cities_text li a").removeClass("hover");
        $("#faro").addClass("hover");
        takeDotsOut();
        $("#faro").html(`Faro<span class="dot_point_geral">.</span>`);
        document.getElementById('text_offices').innerHTML = "Morada Faro" + svg_offices;
        document.getElementById('phones_offices1').innerHTML = "Phones Faro" + svg_offices;
        document.getElementById('phones_offices2').innerHTML = "Phones Faro" + svg_offices;
        document.getElementById('phones_offices3').innerHTML = "Phones Faro" + svg_offices;
        $("#video-banner").attr("src", "img/faro.png");
    });

    $("#funchal").on({
        mouseenter: function () {
            $("#funchal").html(`Funchal<span
            class="dot_point_geral">.</span>`)
        }, mouseleave: function () {
            if (document.getElementById('funchal').classList.contains('hover')) {
            } else {
            $("#funchal").html(`Funchal`);
            }
        }
    });

    $("#funchal").on("click", function () {
        $("#offices_cities_text li a").removeClass("hover");
        $("#funchal").addClass("hover");
        takeDotsOut();
        $("#funchal").html(`Funchal<span class="dot_point_geral">.</span>`);
        document.getElementById('text_offices').innerHTML = "Morada Funchal" + svg_offices;
        document.getElementById('phones_offices1').innerHTML = "Phones Funchal" + svg_offices;
        document.getElementById('phones_offices2').innerHTML = "Phones Funchal" + svg_offices;
        document.getElementById('phones_offices3').innerHTML = "Phones Funchal" + svg_offices;
        $("#video-banner").attr("src", "img/funchal.png");
    });

    $("#madrid").on({
        mouseenter: function () {
            $("#madrid").html(`Madrid<span
            class="dot_point_geral">.</span>`)
        }, mouseleave: function () {
            if (document.getElementById('madrid').classList.contains('hover')) {
            } else {
            $("#madrid").html(`Madrid`);
            }
        }
    });

    $("#madrid").on("click", function () {
        $("#offices_cities_text li a").removeClass("hover");
        $("#madrid").addClass("hover");
        takeDotsOut();
        $("#madrid").html(`Madrid<span class="dot_point_geral">.</span>`);
        document.getElementById('text_offices').innerHTML = "Morada Madrid" + svg_offices;
        document.getElementById('phones_offices1').innerHTML = "Phones Madrid" + svg_offices;
        document.getElementById('phones_offices2').innerHTML = "Phones Madrid" + svg_offices;
        document.getElementById('phones_offices3').innerHTML = "Phones Madrid" + svg_offices;
        $("#video-banner").attr("src", "img/madrid.png");
    });

    $("#moçambique").on({
        mouseenter: function () {
            $("#moçambique").html(`Moçambique<span
            class="dot_point_geral">.</span>`)
        }, mouseleave: function () {
            if (document.getElementById('moçambique').classList.contains('hover')) {
            } else {
            $("#moçambique").html(`Moçambique`);
            }
        }
    });

    $("#moçambique").on("click", function () {
        $("#offices_cities_text li a").removeClass("hover");
        $("#moçambique").addClass("hover");
        takeDotsOut();
        $("#moçambique").html(`Moçambique<span class="dot_point_geral">.</span>`);
        document.getElementById('text_offices').innerHTML = "Morada Moçambique" + svg_offices;
        document.getElementById('phones_offices1').innerHTML = "Phones Moçambique" + svg_offices;
        document.getElementById('phones_offices2').innerHTML = "Phones Moçambique" + svg_offices;
        document.getElementById('phones_offices3').innerHTML = "Phones Moçambique" + svg_offices;
        $("#video-banner").attr("src", "img/moçambique.png");
    });

    $("#angola").on({
        mouseenter: function () {
            $("#angola").html(`Angola<span
            class="dot_point_geral">.</span>`)
        }, mouseleave: function () {
            if (document.getElementById('angola').classList.contains('hover')) {
            } else {
            $("#angola").html(`Angola`);
            }
        }
    });

    $("#angola").on("click", function () {
        $("#offices_cities_text li a").removeClass("hover");
        $("#angola").addClass("hover");
        takeDotsOut();
        $("#angola").html(`Angola<span class="dot_point_geral">.</span>`);
        document.getElementById('text_offices').innerHTML = "Morada Angola" + svg_offices;
        document.getElementById('phones_offices1').innerHTML = "Phones Angola" + svg_offices;
        document.getElementById('phones_offices2').innerHTML = "Phones Angola" + svg_offices;
        document.getElementById('phones_offices3').innerHTML = "Phones Angola" + svg_offices;
        $("#video-banner").attr("src", "img/angola.png");
    });
});


function takeDotsOut() {
    $("#offices_cities_text li a").find("span").remove();
}
// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
});



// Função chamada sempre que existe um resize de página

$(window).resize(function () {
    resizePhone();
    if ($(window).width() < 993) {
        resetArrowConstruction();
        $('.li-sub').remove();
    }
    else {
        $(".sub-homepage-info-item").show();
        $(".vertical-line").show();
    }
    changeSvg();
    moveTextAboveSVG();
    changeSizesSVG();
    svgs_hovers();
    changeHtmlIdealSolution();
});


// Função para alterar o tamanho dos SVGs (Construção, Industria, Distribuição, IT)
function changeSizesSVG() {
    document.getElementById('svg_construction').setAttribute('width', 150)
    document.getElementById('svg_industry').setAttribute('width', 150)
    document.getElementById('svg_distribution').setAttribute('width', 150)
    document.getElementById('svg_it').setAttribute('width', 150)
}

// ******************************************************************************
// ******************************************************************************
// FUNÇÕES PARA GERIR OS CLIQUES DENTRO DO MENU HAMBURGUER
// ******************************************************************************
// ******************************************************************************

function ConstructionHamburguerClick() {
    $('.menu-icon').click();
    ConstructionLoad();
}

function DistributionHamburguerClick() {

}

function IndustryHamburguerClick() {

}

function ITHamburguerClick() {

}

function resizePhone() {
    if ($(window).width() < 500) {
        $("#items_to_move").insertAfter("#support_div");
    } else if ($(window).width() < 992) {
        $("#items_to_move").insertAfter("#support_div");
    } else {
        $("#items_to_move").insertAfter("#anturio_logo");
        $("#sectors-btn svg path").attr("stroke", "White");
        $("#sectors-btn svg").attr("width", "11px");

        $("nav ul").removeClass("showing");
        $(".social-media-hamburguer").removeAttr("style");
        $(".menu-icon").removeAttr("style");
        $(".menu-icon i").removeAttr("style");
        $(".dropbtn").removeAttr("style");
        $("#close-hamburguer").removeAttr("style");

        $(".logo").html(` <svg width="124" height="38" viewBox="0 0 124 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M50.1997 19.3265C50.044 19.1708 49.8882 19.1318 49.6545 19.1318C48.0967 19.1318 46.7337 18.5476 45.6043 17.4182C45.059 16.873 44.6307 16.2499 44.3191 15.5878C44.0465 14.9258 43.8907 14.1858 43.8907 13.368V7.91573H48.4472C48.6809 7.91573 48.8367 7.83784 48.9925 7.72101C49.1482 7.56523 49.2261 7.40945 49.2261 7.17578C49.2261 6.98106 49.1482 6.78633 48.9925 6.6695C48.8367 6.51372 48.6809 6.47477 48.4472 6.47477H43.8907V1.56774C43.8907 1.4509 43.8907 1.33407 43.8518 1.25618C43.8128 1.17829 43.7739 1.1004 43.696 1.02251C43.6181 0.944623 43.5402 0.905679 43.4623 0.866734C43.3844 0.827789 43.2676 0.827789 43.1508 0.827789C42.9171 0.827789 42.7613 0.905679 42.6055 1.02251C42.4497 1.17829 42.3719 1.33407 42.3719 1.56774V13.4848C42.4108 15.471 43.1508 17.1067 44.5528 18.5087C45.9548 19.9107 47.6683 20.5728 49.6156 20.5728C49.8492 20.5728 50.005 20.4949 50.1608 20.378C50.3166 20.2223 50.3555 20.0665 50.3555 19.8328C50.3555 19.716 50.3555 19.5991 50.3166 19.5213C50.3166 19.4823 50.2776 19.4044 50.1997 19.3265ZM70.2952 6.70844C70.1784 6.55266 69.9837 6.43583 69.75 6.43583C69.5553 6.43583 69.3606 6.51372 69.2437 6.6695C69.0879 6.82528 69.01 6.98106 69.01 7.17578V14.8868C69.01 16.0552 68.5817 17.0677 67.7638 17.8466C66.907 18.6645 65.8945 19.0929 64.6872 19.0929C63.4799 19.0929 62.4284 18.6645 61.6106 17.8466C60.7538 17.0288 60.3254 16.0552 60.3254 14.8868V7.17578C60.3254 6.98106 60.2475 6.78633 60.0917 6.6695V6.70844C59.9359 6.55266 59.7801 6.43583 59.5465 6.43583C59.3518 6.43583 59.157 6.51372 59.0402 6.6695C58.8844 6.82528 58.8455 6.98106 58.8455 7.17578V14.9647C58.8844 16.5615 59.4686 17.8856 60.598 18.9371C61.1822 19.4823 61.8053 19.8718 62.4673 20.1833C63.1294 20.4559 63.8694 20.6117 64.6872 20.6117C66.3229 20.6117 67.6859 20.0665 68.7764 18.9371C69.9447 17.8077 70.49 16.4836 70.49 14.8868V7.17578C70.49 6.98106 70.4121 6.78633 70.2952 6.70844ZM7.049 6.51372C5.10176 6.51372 3.42714 7.21472 2.06407 8.57779C1.40201 9.27879 0.895729 10.0577 0.545226 10.8755C0.155779 11.6934 0 12.5891 0 13.5627C0 15.51 0.701005 17.1456 2.06407 18.5476C3.46608 19.9107 5.1407 20.6117 7.049 20.6117C8.37312 20.6117 9.5804 20.2612 10.6709 19.5602C11.0603 19.3265 11.4108 19.0539 11.7224 18.7813C12.0339 18.5087 12.3455 18.1971 12.6181 17.8466V19.8718C12.6181 20.0665 12.696 20.2223 12.8128 20.417C12.9686 20.5338 13.1244 20.6117 13.3191 20.6117C13.4359 20.6117 13.5138 20.6117 13.5917 20.5728C13.6696 20.5338 13.7475 20.4949 13.8254 20.417C13.9812 20.2612 14.0201 20.0665 14.0201 19.8718V13.5627C14.0201 11.6544 13.3191 9.9798 11.956 8.57779C10.6319 7.21472 8.99623 6.51372 7.049 6.51372ZM10.9824 17.4961C9.89196 18.5866 8.56784 19.1318 7.049 19.1318C5.49121 19.1318 4.16709 18.5866 3.07663 17.4961C2.02513 16.4057 1.4799 15.0816 1.4799 13.5627C1.4799 12.0439 2.02513 10.7197 3.11558 9.6293C4.20603 8.53885 5.53015 7.99362 7.08794 7.99362C8.60678 7.99362 9.9309 8.53885 11.0214 9.6293C12.1118 10.7197 12.657 12.0439 12.657 13.5627C12.657 15.0816 12.0729 16.4057 10.9824 17.4961ZM28.2349 6.47477C26.6771 6.47477 25.353 7.02 24.2236 8.11045C23.1332 9.2009 22.5879 10.525 22.549 12.0828V19.8718C22.549 20.0665 22.6269 20.2612 22.7827 20.378C22.8995 20.5338 23.0942 20.6117 23.2889 20.6117C23.4837 20.6117 23.6394 20.5338 23.7952 20.378C23.951 20.2612 24.0289 20.1054 24.0289 19.8718V12.1607C24.0289 10.9924 24.4573 10.0187 25.2751 9.16196C26.093 8.34412 27.1055 7.91573 28.2739 7.91573C29.4422 7.91573 30.4158 8.34412 31.2726 9.16196C32.0905 9.9798 32.5188 10.9924 32.5188 12.1607V19.8718C32.5188 20.1054 32.5967 20.2612 32.7525 20.378C32.8693 20.5338 33.0641 20.6117 33.2588 20.6117C33.4535 20.6117 33.6093 20.5338 33.7261 20.378C33.8819 20.2612 33.9598 20.0665 33.9598 19.8718V12.1607C33.9598 10.6029 33.4146 9.23985 32.2852 8.1494C31.1558 7.02 29.8317 6.47477 28.2349 6.47477ZM84.7048 6.47477C83.108 6.47477 81.745 7.02 80.6545 8.11045C79.5641 9.2009 78.9799 10.525 78.941 12.1218V19.9496C78.941 20.1833 79.0188 20.3391 79.1357 20.4559C79.2915 20.6117 79.4472 20.6896 79.642 20.6896C79.8367 20.6896 80.0314 20.6117 80.1482 20.4559C80.304 20.3391 80.343 20.1444 80.343 19.9496V12.2386C80.343 11.0703 80.7714 10.0577 81.5892 9.2009C82.446 8.34412 83.4585 7.91573 84.6269 7.91573C85.7952 7.91573 86.7688 8.34412 87.6256 9.2009C88.4824 10.0577 88.9108 11.0703 88.9108 12.2386C88.9108 12.4333 88.9887 12.5891 89.1055 12.7449C89.2613 12.9007 89.456 12.9396 89.6118 12.9396C89.8455 12.9396 90.0013 12.8617 90.1181 12.7449C90.2739 12.5891 90.3518 12.4333 90.3518 12.2386C90.3518 10.6419 89.8065 9.27879 88.6771 8.18834C87.6256 7.05895 86.2626 6.47477 84.7048 6.47477ZM122.987 6.16322C122.442 6.16322 122.014 6.59161 122.014 7.13684C122.014 7.68206 122.442 8.11045 122.987 8.11045C123.533 8.11045 123.961 7.68206 123.961 7.13684C124 6.59161 123.533 6.16322 122.987 6.16322ZM115.783 6.47477C113.835 6.47477 112.161 7.17578 110.798 8.53884C109.435 9.86296 108.734 11.5376 108.734 13.4848C108.734 15.471 109.435 17.1067 110.798 18.4308C111.499 19.1318 112.239 19.6381 113.057 19.9886C113.874 20.3391 114.77 20.4949 115.783 20.4949C117.769 20.4949 119.405 19.7939 120.729 18.4308C122.092 17.1067 122.793 15.4321 122.793 13.4848C122.793 11.4986 122.092 9.86296 120.729 8.53884C119.366 7.17578 117.73 6.47477 115.783 6.47477ZM119.716 17.4572C118.626 18.5476 117.34 19.0929 115.783 19.0929C114.264 19.0929 112.94 18.5476 111.849 17.4572C110.759 16.3667 110.214 15.0816 110.214 13.5238C110.214 12.0049 110.759 10.6808 111.849 9.59035C112.94 8.4999 114.225 7.95467 115.783 7.95467C117.302 7.95467 118.626 8.4999 119.716 9.59035C120.807 10.6808 121.352 12.0049 121.352 13.5238C121.352 15.0426 120.807 16.3278 119.716 17.4572ZM99.5427 6.39688C99.348 6.39688 99.1533 6.47477 99.0364 6.59161C98.8807 6.70844 98.8417 6.90317 98.8417 7.09789V19.8718C98.8417 20.0665 98.9196 20.2223 99.0364 20.378C99.1922 20.5338 99.348 20.5728 99.5427 20.5728C99.7764 20.5728 99.9322 20.5338 100.01 20.417C100.166 20.2223 100.244 20.0275 100.244 19.8328V7.09789C100.244 6.94211 100.166 6.74739 100.01 6.51372C99.9322 6.43583 99.7764 6.39688 99.5427 6.39688ZM99.5817 0.944623C99.3869 0.944623 99.1922 1.02251 99.0754 1.17829C98.9196 1.33407 98.8417 1.48985 98.8417 1.68457V4.09915C98.8417 4.29387 98.9196 4.48859 99.0754 4.60543C99.1922 4.76121 99.3869 4.80015 99.5817 4.80015C99.8153 4.80015 99.9711 4.72226 100.088 4.60543C100.244 4.44965 100.283 4.29387 100.283 4.09915V1.68457C100.283 1.48985 100.205 1.33407 100.049 1.17829C99.9711 1.02251 99.7764 0.944623 99.5817 0.944623Z"
                fill="white" />
            <path
                d="M24.1675 37.6037C25.3265 37.6037 26.1677 36.828 26.1677 35.8372C26.1677 34.9212 25.7751 34.3885 24.2984 33.7061C23.0272 33.1079 22.7094 32.8089 22.7094 32.1826C22.7094 31.5751 23.2328 31.0984 24.0273 31.0984C24.6909 31.0984 25.1209 31.3882 25.4293 31.9303L25.5321 31.949L25.906 31.6966C25.5321 31.0143 24.9152 30.6404 24.046 30.6404C22.8964 30.6404 22.1673 31.304 22.1673 32.2013C22.1673 33.0332 22.616 33.5566 23.9338 34.1361C25.2798 34.7249 25.6256 35.1455 25.6256 35.8372C25.6256 36.5475 25.0181 37.1364 24.1582 37.1364C23.4011 37.1364 22.8683 36.7999 22.429 35.9587L22.3262 35.94L21.9336 36.2017C22.4664 37.2205 23.1768 37.6037 24.1675 37.6037Z"
                fill="white" />
            <path
                d="M36.7221 37.4355H37.2455V34.6875L39.5635 30.818H38.984L37.8811 32.7434C37.6007 33.2295 37.2922 33.7248 37.0025 34.2109H36.9744C36.6753 33.7248 36.3669 33.2295 36.0865 32.7341L34.9836 30.818H34.4041L36.7221 34.6875V37.4355Z"
                fill="white" />
            <path
                d="M49.9787 37.6037C51.1377 37.6037 51.9789 36.828 51.9789 35.8372C51.9789 34.9212 51.5864 34.3885 50.1096 33.7061C48.8384 33.1079 48.5206 32.8089 48.5206 32.1826C48.5206 31.5751 49.0441 31.0984 49.8385 31.0984C50.5022 31.0984 50.9321 31.3882 51.2405 31.9303L51.3434 31.949L51.7172 31.6966C51.3434 31.0143 50.7265 30.6404 49.8572 30.6404C48.7076 30.6404 47.9785 31.304 47.9785 32.2013C47.9785 33.0332 48.4272 33.5566 49.7451 34.1361C51.091 34.7249 51.4368 35.1455 51.4368 35.8372C51.4368 36.5475 50.8293 37.1364 49.9694 37.1364C49.2123 37.1364 48.6795 36.7999 48.2402 35.9587L48.1374 35.94L47.7449 36.2017C48.2776 37.2205 48.988 37.6037 49.9787 37.6037Z"
                fill="white" />
            <path d="M62.627 31.304V37.4355H63.1504V31.304H65.5058V30.818H60.2809V31.304H62.627Z"
                fill="white" />
            <path
                d="M74.2607 30.818V37.4355H77.9434L77.9994 36.9495H74.7842V34.2856H77.7751V33.7996H74.7842V31.304H77.9994L77.9434 30.818H74.2607Z"
                fill="white" />
            <path
                d="M90.5605 35.725L88.0462 30.818H87.3078V37.4355H87.8219V31.491H87.8406L90.5044 36.6504H90.6166L93.2897 31.491H93.3084V37.4355H93.8225V30.818H93.0841L90.5792 35.725H90.5605Z"
                fill="white" />
            <path
                d="M105.207 37.6037C106.366 37.6037 107.207 36.828 107.207 35.8372C107.207 34.9212 106.814 34.3885 105.337 33.7061C104.066 33.1079 103.749 32.8089 103.749 32.1826C103.749 31.5751 104.272 31.0984 105.066 31.0984C105.73 31.0984 106.16 31.3882 106.468 31.9303L106.571 31.949L106.945 31.6966C106.571 31.0143 105.954 30.6404 105.085 30.6404C103.935 30.6404 103.206 31.304 103.206 32.2013C103.206 33.0332 103.655 33.5566 104.973 34.1361C106.319 34.7249 106.665 35.1455 106.665 35.8372C106.665 36.5475 106.057 37.1364 105.197 37.1364C104.44 37.1364 103.907 36.7999 103.468 35.9587L103.365 35.94L102.973 36.2017C103.506 37.2205 104.216 37.6037 105.207 37.6037Z"
                fill="white" />
        </svg>
            `);
    }
}



function toMobile() {
    $('#svg_construction').remove();
    $('#svg_industry').remove();
    document.getElementById('first_two_icons').innerHTML =
        `<svg width="105" id="svg_construction" class = "svg_sectors" height="89" viewBox="0 0 105 89" fill="none" xmlns="http://www.w3.org/2000/svg">` +
        svg_construction_mobile + ` </svg>`;

    document.getElementById('first_two_icons').innerHTML +=
        `<svg width="82" id="svg_industry" class = "svg_sectors" height="85" viewBox="0 0 82 85" fill="none" xmlns="http://www.w3.org/2000/svg">` +
        svg_industry_mobile + `</svg>`

    $('#svg_distribution').remove();
    $('#svg_it').remove();
    document.getElementById('second_two_icons').innerHTML =
        `<svg width="113" id="svg_distribution" class = "svg_sectors" height="89" viewBox="0 0 113 89" fill="none" xmlns="http://www.w3.org/2000/svg">` +
        svg_distribution_mobile + `</svg>`


    document.getElementById('second_two_icons').innerHTML +=
        `<svg width="68" id="svg_it" class = "svg_sectors" height="84" viewBox="0 0 68 84" fill="none" xmlns="http://www.w3.org/2000/svg">` +
        svg_it_mobile + `</svg>`
}

function toWeb() {
    $('#svg_construction').remove();
    $('#svg_industry').remove();
    document.getElementById('first_two_icons').innerHTML = `<svg width="122" id="svg_construction" class = "svg_sectors" height="109" viewBox="0 0 122 109" fill="none" xmlns="http://www.w3.org/2000/svg">` +
        svg_construction + `</svg>`

    document.getElementById('first_two_icons').innerHTML +=
        `<svg width="93" id="svg_industry" class = "svg_sectors" height="107" viewBox="0 0 93 107" fill="none" xmlns="http://www.w3.org/2000/svg">` +
        svg_industry + `</svg>`


    $('#svg_distribution').remove();
    $('#svg_it').remove();
    document.getElementById('second_two_icons').innerHTML =
        `<svg width="128" id="svg_distribution" class = "svg_sectors" height="111" viewBox="0 0 128 111" fill="none" xmlns="http://www.w3.org/2000/svg">
    ` + svg_distribution + `</svg>`

    document.getElementById('second_two_icons').innerHTML += `<svg width="94" id="svg_it" class = "svg_sectors" height="109" viewBox="0 0 94 109" fill="none" xmlns="http://www.w3.org/2000/svg">
    ` + svg_it + `</svg>`
}


function svgs_hovers() {
    if ($(window).width() < 608) {
        $("#svg_construction").on({
            click: function () {
                ConstructionLoad();
                document.getElementById('svg_construction').innerHTML = svg_construction_hover_mobile;
            }
        });

        $("#svg_industry").on({
            click: function () {
                document.getElementById('svg_industry').innerHTML = svg_industry_hover_mobile;
            }
        });

        $("#svg_distribution").on({
            click: function () {
                document.getElementById('svg_distribution').innerHTML = svg_distribution_hover_mobile;
            }
        });

        $("#svg_it").on({
            click: function () {
                document.getElementById('svg_it').innerHTML = svg_it_hover_mobile;
            }
        });
    } else if ($(window).width() < 992) {
        $("#svg_construction").on({
            click: function () {
                ConstructionLoad();
                document.getElementById('svg_construction').innerHTML = svg_construction_hover_mobile;
            }
        });

        $("#svg_industry").on({
            click: function () {
                document.getElementById('svg_industry').innerHTML = svg_industry_hover_mobile;
            }
        });

        $("#svg_distribution").on({
            click: function () {
                document.getElementById('svg_distribution').innerHTML = svg_distribution_hover_mobile;
            }
        });

        $("#svg_it").on({
            click: function () {
                document.getElementById('svg_it').innerHTML = svg_it_hover_mobile;
            }
        });
    } else {
        $("#svg_construction").on({
            mouseenter: function () {
                document.getElementById('svg_construction').innerHTML = svg_construction_hover;
            }, mouseleave: function () {
                document.getElementById('svg_construction').innerHTML = svg_construction;
            },
            click: function () {
                ConstructionLoad();
            }
        });

        $("#svg_industry").on({
            mouseenter: function () {
                document.getElementById('svg_industry').innerHTML = svg_industry_hover;
            },
            mouseleave: function () {
                document.getElementById('svg_industry').innerHTML = svg_industry;
            }
        });

        $("#svg_distribution").on({
            mouseenter: function () {
                document.getElementById('svg_distribution').innerHTML = svg_distribution_hover;
            },
            mouseleave: function () {
                document.getElementById('svg_distribution').innerHTML = svg_distribution;
            }
        });

        $("#svg_it").on({
            mouseenter: function () {
                document.getElementById('svg_it').innerHTML = svg_it_hover;
            },
            mouseleave: function () {
                document.getElementById('svg_it').innerHTML = svg_it;
            }
        });
    }
}



function changeSvg() {

    if ($(window).width() < 608) {
        $('#svg_Number4').remove();
        document.getElementById('number_4').innerHTML = svg_number4_mobile;

        //ponto final vermelho
        $("#dot_point").empty();
        document.getElementById('dot_point').innerHTML = `<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="2" r="2" fill="#ED1C23"/>
        </svg>
        `


        //Div Construction zone
        toMobile();

        //Clients trusted zone
        $('#meo_icon').remove();
        $('#leroy_icon').remove();
        document.getElementById('first_two_icons_clients').innerHTML = svg_meo_icon_mobile

        document.getElementById('first_two_icons_clients').innerHTML += svg_leroy_icon_mobile


        $('#ogma_icon').remove();
        $('#nacex_icon').remove();
        document.getElementById('second_two_icons_clients').innerHTML = svg_ogma_icon_mobile

        document.getElementById('second_two_icons_clients').innerHTML += svg_nacex_icon_mobile

    } else if ($(window).width() < 992) {
        $('#svg_Number4').remove();
        document.getElementById('number_4').innerHTML = svg_number4_tablet

        //ponto final vermelho
        $("#dot_point").empty();
        document.getElementById('dot_point').innerHTML = `<svg id="svg_Number4_tablet" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3" cy="3" r="3" fill="#ED1C23"/>
        </svg>
        `


        //Div Construction zone
        toMobile();



        // ******************************************************************************
        // ******************************************************************************
        // ÁREA  DE GESTÃO DOS SVGS DA ZONA DE CLIENTES 
        // ******************************************************************************
        // ******************************************************************************

        $('#meo_icon').remove();
        $('#leroy_icon').remove();
        document.getElementById('first_two_icons_clients').innerHTML = svg_meo_icon_tablet

        document.getElementById('first_two_icons_clients').innerHTML += svg_leroy_icon_tablet


        $('#ogma_icon').remove();
        $('#nacex_icon').remove();
        document.getElementById('second_two_icons_clients').innerHTML = svg_ogma_icon_tablet
        document.getElementById('second_two_icons_clients').innerHTML += svg_nacex_icon_tablet
    } else {

        //Back to web

        $('#svg_Number4').remove();
        document.getElementById('number_4').innerHTML = svg_number4_web

        //ponto final vermelho
        $("#dot_point").empty();
        document.getElementById('dot_point').innerHTML = `<svg id="dot_point" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4.5" cy="4.5" r="4.5" fill="#ED1C23"/>
        </svg>
        `


        toWeb();


        $('#meo_icon').remove();
        $('#leroy_icon').remove();
        document.getElementById('first_two_icons_clients').innerHTML = svg_meo_icon_web
        document.getElementById('first_two_icons_clients').innerHTML += svg_leroy_icon_web

        $('#ogma_icon').remove();
        $('#nacex_icon').remove();
        document.getElementById('second_two_icons_clients').innerHTML = svg_ogma_icon_web
        document.getElementById('second_two_icons_clients').innerHTML += svg_nacex_icon_web
    }
}

// ******************************************************************************
// ******************************************************************************
// Função utilizada para colocar o texto abaixo do SVG
// ******************************************************************************
// ******************************************************************************

function moveTextAboveSVG() {
    if ($(window).width() < 608) {
        //Mobile
        $("#especialists_text").insertAfter("#number_4");
        document.getElementById('half_anturio_img').style.display = 'none';
    } else {
        //Back to Web
        $("#especialists_text").insertAfter("#auxDiv");
        document.getElementById('half_anturio_img').style.display = 'block';
        $("#complete_management_info").insertAfter("#complete_management_imgs")
    }
}


// ******************************************************************************
// ******************************************************************************
// Função utilizada para alterar o slider ao fim de 10 segundos
// ******************************************************************************
// ******************************************************************************

var timer;
function changeSlider() {
    clearTimeout(timer);
    if ($("#content-first-page").is(":visible")) {
        if ($("#construction-sectors-slider").is(":visible")) {
            $('#construction-sectors-slider').hide();
            $('#distribution-sectors-slider').show("slow");

            $('#title-2').html("Solução Distribuição");
            animate(document.getElementById("title-2"));
            animate(document.getElementById('distribution-sectors-slider'));

        } else if ($("#distribution-sectors-slider").is(":visible")) {
            $('#distribution-sectors-slider').hide();
            $('#industry-sectors-slider').show("slow");
            $('#title-2').html("Solução Indústria");
            animate(document.getElementById("title-2"));
            animate(document.getElementById('industry-sectors-slider'));

        } else if ($("#industry-sectors-slider").is(":visible")) {
            $('#industry-sectors-slider').hide();
            $('#it-sectors-slider').show("slow");
            $('#title-2').html("Solução IT");
            animate(document.getElementById("title-2"));
            animate(document.getElementById('it-sectors-slider'));
        }
        else {
            $('#it-sectors-slider').hide();
            $('#construction-sectors-slider').show("slow");
            $('#title-2').html("Solução Construção");
            animate(document.getElementById("title-2"));
            animate(document.getElementById('construction-sectors-slider'));
        }
    }

    timer = setTimeout(function () {
        changeSlider();

    }, 10000);

}

/**
 * Function used to animate the page when section is changed
 * @param {*} newContent
 */
function animate(newContent) {
    var fadeIn = newContent.animate({
        opacity: [0, 1]
    }, 800);
}

// ******************************************************************************
// ******************************************************************************
// FUNÇÕES UTILIZADAS PARA ALTERAR O ICON DO ACORDEON QUANDO EXPANDIDO
// ******************************************************************************
// ******************************************************************************

var red_svg = `<circle cx="16" cy="16.5" r="16" fill="#ED1C23"/>
    <path d="M8.34175 19.6231C8.15178 19.8174 8.15178 20.1279 8.34175 20.3222L9.47467 21.4809C9.67065 21.6814 9.99312 21.6816 10.1893 21.4813L15.4377 16.1249C15.6338 15.9248 15.956 15.9248 16.152 16.1249L21.4004 21.4813C21.5966 21.6816 21.9191 21.6814 22.1151 21.4809L23.248 20.3222C23.438 20.1279 23.438 19.8174 23.248 19.6231L16.1524 12.3657C15.9563 12.1651 15.6335 12.1651 15.4374 12.3657L8.34175 19.6231Z" fill="white"/>`
var black_svg = ` <circle cx="16" cy="16.5" r="16" fill="#424242"/>
    <path d="M23.2481 14.2231C23.4381 14.0288 23.4381 13.7183 23.2481 13.524L22.1152 12.3653C21.9192 12.1648 21.5967 12.1646 21.4005 12.3649L16.1521 17.7213C15.9561 17.9214 15.6339 17.9214 15.4378 17.7213L10.1894 12.3649C9.99322 12.1646 9.67075 12.1648 9.47477 12.3653L8.34185 13.524C8.15187 13.7183 8.15187 14.0288 8.34185 14.2231L15.4375 21.4805C15.6336 21.6811 15.9564 21.6811 16.1525 21.4805L23.2481 14.2231Z" fill="white"/>`

var collapseOneBool = true;
var collapseTwoBool = false;
var collapseThreeBool = false;
var collapseFourBool = false;
var collapseFiveBool = false;
var collapseSixBool = false;

function changeManagementHeadingOne() {
    if (!collapseOneBool) {
        document.getElementById('first_svg_management').innerHTML = red_svg
        collapseOneBool = true
    } else {
        document.getElementById('first_svg_management').innerHTML = black_svg
        collapseOneBool = false
    }
    collapseTwoBool = false;
    collapseThreeBool = false;
    collapseFourBool = false;
    collapseFiveBool = false;
    collapseSixBool = false;

    document.getElementById('second_svg_management').innerHTML = black_svg
    document.getElementById('third_svg_management').innerHTML = black_svg
    document.getElementById('fourth_svg_management').innerHTML = black_svg
    document.getElementById('fifth_svg_management').innerHTML = black_svg
    document.getElementById('sixth_svg_management').innerHTML = black_svg
}

function changeManagementHeadingTwo() {
    if (!collapseTwoBool) {
        document.getElementById('second_svg_management').innerHTML = red_svg
        collapseTwoBool = true
    } else {
        document.getElementById('second_svg_management').innerHTML = black_svg
        collapseTwoBool = false
    }
    collapseOneBool = false;
    collapseThreeBool = false;
    collapseFourBool = false;
    collapseFiveBool = false;
    collapseSixBool = false;

    document.getElementById('first_svg_management').innerHTML = black_svg
    document.getElementById('third_svg_management').innerHTML = black_svg
    document.getElementById('fourth_svg_management').innerHTML = black_svg
    document.getElementById('fifth_svg_management').innerHTML = black_svg
    document.getElementById('sixth_svg_management').innerHTML = black_svg
}

function changeManagementHeadingThree() {
    if (!collapseThreeBool) {
        document.getElementById('third_svg_management').innerHTML = red_svg
        collapseThreeBool = true
    } else {
        document.getElementById('third_svg_management').innerHTML = black_svg
        collapseThreeBool = false
    }
    collapseOneBool = false;
    collapseTwoBool = false;
    collapseFourBool = false;
    collapseFiveBool = false;
    collapseSixBool = false;

    document.getElementById('first_svg_management').innerHTML = black_svg
    document.getElementById('second_svg_management').innerHTML = black_svg
    document.getElementById('fourth_svg_management').innerHTML = black_svg
    document.getElementById('fifth_svg_management').innerHTML = black_svg
    document.getElementById('sixth_svg_management').innerHTML = black_svg
}

function changeManagementHeadingFour() {
    if (!collapseFourBool) {
        document.getElementById('fourth_svg_management').innerHTML = red_svg
        collapseFourBool = true
    } else {
        document.getElementById('fourth_svg_management').innerHTML = black_svg
        collapseFourBool = false
    }
    collapseOneBool = false;
    collapseTwoBool = false;
    collapseThreeBool = false;
    collapseFiveBool = false;
    collapseSixBool = false;

    document.getElementById('first_svg_management').innerHTML = black_svg
    document.getElementById('third_svg_management').innerHTML = black_svg
    document.getElementById('second_svg_management').innerHTML = black_svg
    document.getElementById('fifth_svg_management').innerHTML = black_svg
    document.getElementById('sixth_svg_management').innerHTML = black_svg
}

function changeManagementHeadingFive() {
    if (!collapseFiveBool) {
        document.getElementById('fifth_svg_management').innerHTML = red_svg
        collapseFiveBool = true
    } else {
        document.getElementById('fifth_svg_management').innerHTML = black_svg
        collapseFiveBool = false
    }
    collapseOneBool = false;
    collapseTwoBool = false;
    collapseThreeBool = false;
    collapseFourBool = false;
    collapseSixBool = false;

    document.getElementById('first_svg_management').innerHTML = black_svg
    document.getElementById('third_svg_management').innerHTML = black_svg
    document.getElementById('second_svg_management').innerHTML = black_svg
    document.getElementById('fourth_svg_management').innerHTML = black_svg
    document.getElementById('sixth_svg_management').innerHTML = black_svg
}

function changeManagementHeadingSix() {
    if (!collapseSixBool) {
        document.getElementById('sixth_svg_management').innerHTML = red_svg
        collapseSixBool = true
    } else {
        document.getElementById('sixth_svg_management').innerHTML = black_svg
        collapseSixBool = false
    }
    collapseOneBool = false;
    collapseTwoBool = false;
    collapseThreeBool = false;
    collapseFourBool = false;
    collapseFiveBool = false;

    document.getElementById('first_svg_management').innerHTML = black_svg
    document.getElementById('third_svg_management').innerHTML = black_svg
    document.getElementById('second_svg_management').innerHTML = black_svg
    document.getElementById('fourth_svg_management').innerHTML = black_svg
    document.getElementById('fifth_svg_management').innerHTML = black_svg
}

function changeHtmlIdealSolution() {
    if ($(window).width() < 608) {
        $("#ideal_solution_chart_img").attr("src", "/img/solution_chart_mobile.png");
    } else if ($(window).width() < 1300 && $(window).width() >= 608) {         //Back to Web  
        $("#ideal_solution_chart_img").attr("src", "/img/solution_chart_tablet.png");
    } else {
        $("#ideal_solution_chart_img").attr("src", "/img/solution_chart.png");
    }
}