/** 
 * AnturioSystems
 * 
 * FICHEIRO RESPONSÁVEL PARA APÓS TUDO SER CARREGADO, ADICIONAR AS INFORMAÇÕES NECESSÁRIAS PARA O CORRETO FUNCIONAMENTO DA PÁGINA
 * E TAMBÉM GERIR EVENTUAIS RESIZES DA PÁGINA 
 * 
 * @author João Cardoso <joao.martins@anturio.com>
 * @author Diogo Gomes <diogo.gomes@anturio.com>
 */


// ******************************************************************************
// ******************************************************************************
//                            NAV SCROLL EFEITO
// ******************************************************************************
// ******************************************************************************

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
});

// ******************************************************************************
// ******************************************************************************
//      SEMPRE QUE EXISTE ALGUM RESIZE NA PÁGINA, SÃO CHAMADAS ESTAS FUNÇÕES
// ******************************************************************************
// ******************************************************************************

$(window).resize(function () {
    resizePhone();
    if ($(window).width() < 993) {
        if (currentPage != "home") {
            resetArrowConstruction(currentPage);
        }

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
    mobileVersionOffices();
});

// ******************************************************************************
// ******************************************************************************
//     QUANDO TUDO ESTIVER CARREGADO, ADICIONA A ITERAÇÃO NECESSÁRIA
// ******************************************************************************
// ******************************************************************************

$("html").css("background-color", "black");
$(document).ready(function () {
    $("html").removeAttr("style");
    HomeLoad();
    $("body").show();
    $("#close-hamburguer").on("click", function () {
        $(".menu-icon").click();
    });

    $('[data-toggle="tooltip"]').tooltip();


    //ADICIONA CLIQUES NOS BOTÕES DE REDES SOCIAIS


    $(".instagram_click").on("click", function () {
        window.open("https://www.instagram.com/anturiocorp/");
    });
    
    $(".facebook_click").on("click", function () {
        window.open("https://www.facebook.com/ANTURIOcom");
    });

    //ADICIONA A POSSIBILIDADE DE SWIPE PARA ITERAÇÃO COM O sub-homepage-info

    jquerySwipeHandler.handleSwipe("#arrow-construction-rigth", [
        jquerySwipeHandler.CLICK
    ], function (direction) {
        arrowConstructionRigth('construction');
    });

    jquerySwipeHandler.handleSwipe("#arrow-distribution-rigth", [
        jquerySwipeHandler.CLICK
    ], function (direction) {
        arrowConstructionRigth('distribution');
    });

    jquerySwipeHandler.handleSwipe("#arrow-industry-rigth", [
        jquerySwipeHandler.CLICK
    ], function (direction) {
        arrowConstructionRigth('industry');
    });

    jquerySwipeHandler.handleSwipe("#arrow-it-rigth", [
        jquerySwipeHandler.CLICK
    ], function (direction) {
        arrowConstructionRigth('it');
    });

    jquerySwipeHandler.handleSwipe("#arrow-construction-left", [
        jquerySwipeHandler.CLICK
    ], function (direction) {
        arrowConstructionLeft('construction');
    });

    jquerySwipeHandler.handleSwipe("#arrow-distribution-left", [
        jquerySwipeHandler.CLICK
    ], function (direction) {
        arrowConstructionLeft('distribution');
    });

    jquerySwipeHandler.handleSwipe("#arrow-industry-left", [
        jquerySwipeHandler.CLICK
    ], function (direction) {
        arrowConstructionLeft('industry');
    });

    jquerySwipeHandler.handleSwipe("#arrow-it-left", [
        jquerySwipeHandler.CLICK
    ], function (direction) {
        arrowConstructionLeft('it');
    });

    jquerySwipeHandler.handleSwipe(".sub-homepage-info", [
        jquerySwipeHandler.SWIPE_LEFT, jquerySwipeHandler.SWIPE_RIGHT
    ], function (direction) {
        if ($(window).width() < 993) {
            if (direction == "SWIPE_RIGHT") {
                arrowConstructionLeft(currentPage);
            } else if (direction == "SWIPE_LEFT") {
                arrowConstructionRigth(currentPage);
            }
        }
    });


    // ADICIONA OS CLIQUES NOS ICONS DE CONSTRUÇÃO, DISTRIBUIÇÃO, INDÚSTRIA E IT

    $("#svg_construction").on("click", function () {
        ConstructionLoad();
    });

    $("#svg_distribution").on("click", function () {
        DistributionLoad();
    });

    $("#svg_industry").on("click", function () {
        IndustryLoad();
    });

    $("#svg_it").on("click", function () {
        ITLoad();
    });

    $("#contact-us-phone-btn").on("click", function () {
        ContactUsLoad();
    });

    $("#contact-us-phone-btn-mobile").on("click", function () {
        ContactUsLoad();
    });



    $(".logo").on("click", function () {
        if (($(window).width() < 993) && ($(".menu-icon").is('[style]'))) {
            $(".menu-icon").click();
        }
        HomeLoad();
    });

    $("#more-info-button").on("click", function () {
        ChangePageButton();
    });

    // PRIMEIRA CHAMADA PARA O SLIDER MUDAR DE POSIÇÃO AO FIM DE 10 SEGUNDOS

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
            $('#title-1').html("Solução para Construção Civil");
            $('#title-3').html("Maior controlo e rigor na gestão de obras e projetos");
            animate(document.getElementById("title-2"));
            animate(document.getElementById("title-1"));
            animate(document.getElementById("title-3"));
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
            $('#title-1').html("Solução para Distribuição");
            $('#title-3').html("Mais eficiência na ocupação de armazéns e linhas de distribuição");
            animate(document.getElementById("title-2"));
            animate(document.getElementById("title-1"));
            animate(document.getElementById("title-3"));
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
            $('#title-1').html("Solução para Indústria");
            $('#title-3').html("Gestão e otimização dos processos de fabrico");
            animate(document.getElementById("title-2"));
            animate(document.getElementById("title-1"));
            animate(document.getElementById("title-3"));
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
            $('#title-1').html("Solução para Tecnologias de Informação");
            $('#title-3').html("A solução ideal para gerir TI");
            animate(document.getElementById("title-2"));
            animate(document.getElementById("title-1"));
            animate(document.getElementById("title-3"));
            animate(document.getElementById('it-sectors-slider'));
            timer = setTimeout(function () {
                changeSlider();

            }, 10000);
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
                $(".logo").html(svg_logo_desktop);
                $("nav ul").toggleClass("showing-display");
            }, 700);

        }
        else {
            $(".logo").html(svg_logo_mobile);
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


    // Adição do event-listener para trocar a percentagem do gráfico 
    $(".it-tooltip-banca, .it-tooltip-banca-grey").on({
        mouseenter: function () {
            $(".percentage-it").html("35%");

        }, mouseleave: function () {
            $(".percentage-it").html("95%");
        }
    });

    $(".it-tooltip-tele, .it-tooltip-tele-grey").on({
        mouseenter: function () {
            $(".percentage-it").html("30%");

        }, mouseleave: function () {
            $(".percentage-it").html("95%");
        }
    });

    $(".it-tooltip-admin, .it-tooltip-admin-grey").on({
        mouseenter: function () {
            $(".percentage-it").html("15%");

        }, mouseleave: function () {
            $(".percentage-it").html("95%");
        }
    });

    $(".it-tooltip-transport, .it-tooltip-transport-grey").on({
        mouseenter: function () {
            $(".percentage-it").html("15%");

        }, mouseleave: function () {
            $(".percentage-it").html("95%");
        }
    });



    

    // QUANDO UM MENU DO HEADER É SELECIONADO ALTERA A COR DOS RESTANTES ELEMENTOS

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

    // QUANDO UM ELEMENTO DA NAVBAR É SELECIONADO ADICIONA-LHE O PONTO VERMELHO

    $("#first-dropdown-option-1").on({
        mouseenter: function () {
            $("#first-dropdown-option-1").html(`Construção<span
             class="dot_point_geral">.</span>`)
        }, mouseleave: function () {
            $("#first-dropdown-option-1").html(`Construção`);
        }
    });

    $("#first-dropdown-option-2").on({
        mouseenter: function () {
            $("#first-dropdown-option-2").html(`Distribuição<span
             class="dot_point_geral">.</span>`);

        }, mouseleave: function () {
            $("#first-dropdown-option-2").html(`Distribuição`);
        }
    });

    $("#first-dropdown-option-3").on({
        mouseenter: function () {
            $("#first-dropdown-option-3").html(`Indústria<span
             class="dot_point_geral">.</span>`);

        }, mouseleave: function () {
            $("#first-dropdown-option-3").html(`Indústria`);
        }
    });

    $("#first-dropdown-option-4").on({
        mouseenter: function () {
            $("#first-dropdown-option-4").html(`TI<span
             class="dot_point_geral">.</span>`);

        }, mouseleave: function () {
            $("#first-dropdown-option-4").html(`TI`);
        }
    });

    // GESTÃO DOS ACCORDEONS 

    $(".buttonOne").on({
        click: function () {
            changeManagementHeadingOne();
        }
    })

    $(".buttonTwo").on({
        click: function () {
            changeManagementHeadingTwo();
        }
    });

    $(".buttonThree").on({
        click: function () {
            changeManagementHeadingThree();
        }
    });

    $(".buttonFour").on({
        click: function () {
            changeManagementHeadingFour();
        }
    });

    $(".buttonFive").on({
        click: function () {
            changeManagementHeadingFive();
        }
    });

    $(".buttonSix").on({
        click: function () {
            changeManagementHeadingSix();
        }
    });
    $(".buttonSeven").on({
        click: function () {
            changeManagementHeadingSeven();
        }
    });
    $(".buttonEigth").on({
        click: function () {
            changeManagementHeadingEigth();
        }
    });

    $('.first_svg_management').on({
        click: function () {
            $('.buttonOne').click();
        }
    })
    $('.second_svg_management').on({
        click: function () {
            $('.buttonTwo').click();
        }
    })
    $('.third_svg_management').on({
        click: function () {
            $('.buttonThree').click();
        }
    })
    $('.fourth_svg_management').on({
        click: function () {
            $('.buttonFour').click();
        }
    })
    $('.fifth_svg_management').on({
        click: function () {
            $('.buttonFive').click();
        }
    })
    $('.sixth_svg_management').on({
        click: function () {
            $('.buttonSix').click();
            changeManagementHeadingSix();
        }
    })
    $('.seventh_svg_management').on({
        click: function () {
            $('.buttonSeven').click();
            changeManagementHeadingSeven();
        }
    })
    $('.eigthth_svg_management').on({
        click: function () {
            $('.buttonEigth').click();
            changeManagementHeadingEigth();
        }
    });

    resizePhone();
    changeSvg();
    moveTextAboveSVG();
    changeSizesSVG();
    mobileVersionOffices();
    svgs_hovers();
    changeHtmlIdealSolution();

    //Adicionar submenu em dispositivos móveis

    document.getElementById("sectors-btn").onclick = function (event) {
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


    // ******************************************************************************
    // ******************************************************************************
    //             ÁREA QUE GERE CONTEÚDO ÁREA DE CONTACTOS
    // ******************************************************************************
    // ******************************************************************************


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

        let offices_cities_address = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_address"');
        let offices_lisboa_phone_1 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_1_lisboa"');
        let offices_lisboa_phone_2 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_2_lisboa"');
        let offices_lisboa_phone_3 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_3_lisboa"');

        document.getElementById('text_offices').innerHTML = "Av. Cor. Eduardo Galhardo, 3, " + offices_cities_address + "<br> 1170-105 Lisboa, Portugal"
        document.getElementById('phones_offices1').innerHTML = "(+351) 211 454 004 " + offices_lisboa_phone_1;
        document.getElementById('phones_offices2').innerHTML = "(+351) 960 256 862 " + offices_lisboa_phone_2;
        document.getElementById('phones_offices3').innerHTML = "(+351) 965 258 220 (Dir. Comercial) " + offices_lisboa_phone_3;
        $("#video-banner").attr("src", "img/lisboa.png");
        $(".svg_address").on("click", function () {
            url = "https://www.google.com/maps/dir//Anturio+-+Business+Software+Av.+Cor.+Eduardo+Galhardo+n%C2%BA3+1170-105+Lisboa/@38.7278729,-9.1250916,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd1933930ff668db:0xfbc85ac01dafd318!2m2!1d-9.1250916!2d38.7278729"
            window.open(url, "_blank");
        })
        $(".svg_phone_1_lisboa").on("click", function () {
            window.open("tel:+351 211 454 004");
        })

        $(".svg_phone_2_lisboa").on("click", function () {
            window.open("tel:+351 960 256 862");
        })

        $(".svg_phone_3_lisboa").on("click", function () {
            window.open("tel:+351 965 258 220");
        })
    });

    $(".email_anturio_svg").on("click", function () {
        window.open('mailto:info@anturio.com', "_blank");
    });

    $(".svg_address_lisboa").on("click", function () {
        url = "https://www.google.com/maps/dir//Anturio+-+Business+Software+Av.+Cor.+Eduardo+Galhardo+n%C2%BA3+1170-105+Lisboa/@38.7278729,-9.1250916,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd1933930ff668db:0xfbc85ac01dafd318!2m2!1d-9.1250916!2d38.7278729"
        window.open(url, "_blank");
    });

    $(".svg_phone_1_lisboa").on("click", function () {
        window.open("tel:+351 211 454 004");
    })

    $(".svg_phone_2_lisboa").on("click", function () {
        window.open("tel:+351 960 256 862");
    })

    $(".svg_phone_3_lisboa").on("click", function () {
        window.open("tel:+351 965 258 220");
    })


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

        let offices_cities_address = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_address"');
        let offices_porto_phone_1 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_1_porto"');
        let offices_porto_phone_2 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_2_porto"');


        document.getElementById('text_offices').innerHTML = "Rua do Outeiro, nº 1315, 1º andar J, 4470-637 Maia, Portugal " + offices_cities_address;
        document.getElementById('phones_offices1').innerHTML = "(+351) 211 454 004 " + offices_porto_phone_1;
        document.getElementById('phones_offices2').innerHTML = " (+351) 961 401 165 " + offices_porto_phone_2;
        document.getElementById('phones_offices3').innerHTML = ""
        $("#video-banner").attr("src", "img/porto.png");
        $(".svg_address").on("click", function () {
            url = "https://www.google.com/maps/place/Anturio+norte/@41.2575551,-8.6446539,21z/data=!4m12!1m6!3m5!1s0xd24678c9dbd2303:0x11b5c8b84a3aa4ed!2sAnturio+norte!8m2!3d41.257597!4d-8.6446754!3m4!1s0xd24678c9dbd2303:0x11b5c8b84a3aa4ed!8m2!3d41.257597!4d-8.6446754?hl=pt-PT"
            window.open(url, "_blank");
        })
        $(".svg_phone_1_porto").on("click", function () {
            window.open("tel:+351 211 454 004");
        })

        $(".svg_phone_2_porto").on("click", function () {
            window.open("tel:+351 961 401 165");
        })
    });

    $(".svg_address_porto").on("click", function () {
        url = "https://www.google.com/maps/place/Anturio+norte/@41.2575551,-8.6446539,21z/data=!4m12!1m6!3m5!1s0xd24678c9dbd2303:0x11b5c8b84a3aa4ed!2sAnturio+norte!8m2!3d41.257597!4d-8.6446754!3m4!1s0xd24678c9dbd2303:0x11b5c8b84a3aa4ed!8m2!3d41.257597!4d-8.6446754?hl=pt-PT"
        window.open(url, "_blank");
    })

    $(".svg_phone_1_porto").on("click", function () {
        window.open("tel:+351 211 454 004");
    })

    $(".svg_phone_2_porto").on("click", function () {
        window.open("tel:+351 961 401 165");
    })


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
        let offices_cities_address = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_address"');
        let offices_setubal_phone_1 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_1_setubal"');
        let offices_setubal_phone_2 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_2_setubal"');

        document.getElementById('text_offices').innerHTML = "R. Regimento Infantaria 11, nº30 2ºA, 2900-584 Setúbal, Portugal " + offices_cities_address;
        document.getElementById('phones_offices1').innerHTML = " (+351) 211 454 004 " + offices_setubal_phone_1;
        document.getElementById('phones_offices2').innerHTML = " (+351) 938 994 183 " + offices_setubal_phone_2;
        document.getElementById('phones_offices3').innerHTML = "";
        $("#video-banner").attr("src", "img/setubal.png");
        $(".svg_address").on("click", function () {
            url = "https://www.google.com/maps/place/ANTURIO+-+Business+Software+-+Set%C3%BAbal/@38.522444,-8.8931217,17z/data=!4m12!1m6!3m5!1s0xd194307d0255727:0xd85f47930ec52b20!2sANTURIO+-+Business+Software+-+Set%C3%BAbal!8m2!3d38.5224481!4d-8.8909269!3m4!1s0xd194307d0255727:0xd85f47930ec52b20!8m2!3d38.5224481!4d-8.8909269?hl=pt-PT"
            window.open(url, "_blank");
        })
        $(".svg_phone_1_setubal").on("click", function () {
            window.open("tel:+351 211 454 004");
        })

        $(".svg_phone_2_setubal").on("click", function () {
            window.open("tel:+351 938 994 183");
        })


    });

    $(".svg_address_setubal").on("click", function () {
        url = "https://www.google.com/maps/place/ANTURIO+-+Business+Software+-+Set%C3%BAbal/@38.522444,-8.8931217,17z/data=!4m12!1m6!3m5!1s0xd194307d0255727:0xd85f47930ec52b20!2sANTURIO+-+Business+Software+-+Set%C3%BAbal!8m2!3d38.5224481!4d-8.8909269!3m4!1s0xd194307d0255727:0xd85f47930ec52b20!8m2!3d38.5224481!4d-8.8909269?hl=pt-PT"
        window.open(url, "_blank");
    })

    $(".svg_phone_1_setubal").on("click", function () {
        window.open("tel:+351 211 454 004");
    })

    $(".svg_phone_2_setubal").on("click", function () {
        window.open("tel:+351 938 994 183");
    })

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
        let offices_cities_address = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_address"');
        let offices_faro_phone_1 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_1_faro"');
        let offices_faro_phone_2 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_2_faro"');

        document.getElementById('text_offices').innerHTML = "Largo de S. Luís 11-C, 3º Esq. 8000-143 Faro, Portugal " + offices_cities_address;
        document.getElementById('phones_offices1').innerHTML = "(+351) 211 454 004 " + offices_faro_phone_1;
        document.getElementById('phones_offices2').innerHTML = "(+351) 967 334 745 " + offices_faro_phone_2;
        document.getElementById('phones_offices3').innerHTML = "";
        $("#video-banner").attr("src", "img/faro.png");

        $(".svg_address").on("click", function () {
            url = "https://www.google.com/maps/place/Anturio+Corporation+%7C+Algarve/@37.0219462,-7.9295108,17z/data=!3m1!4b1!4m5!3m4!1s0xd0552cff744f23b:0xb7dc945e268c6ad5!8m2!3d37.0219407!4d-7.9273079?hl=pt-PT"
            window.open(url, "_blank");
        })

        $(".svg_phone_1_faro").on("click", function () {
            window.open("tel:+351 211 454 004");
        })

        $(".svg_phone_2_faro").on("click", function () {
            window.open("tel:+351 967 334 745");
        })
    });

    $(".svg_address_faro").on("click", function () {
        url = "https://www.google.com/maps/place/Anturio+Corporation+%7C+Algarve/@37.0219462,-7.9295108,17z/data=!3m1!4b1!4m5!3m4!1s0xd0552cff744f23b:0xb7dc945e268c6ad5!8m2!3d37.0219407!4d-7.9273079?hl=pt-PT"
        window.open(url, "_blank");
    })

    $(".svg_phone_1_faro").on("click", function () {
        window.open("tel:+351 211 454 004");
    })

    $(".svg_phone_2_faro").on("click", function () {
        window.open("tel:+351 967 334 745");
    })


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
        let offices_cities_address = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_address"');
        let offices_funchal_phone_1 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_1_funchal"');
        let offices_funchal_phone_2 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_2_funchal"');

        document.getElementById('text_offices').innerHTML = "Av. Luís Camões, Edf. Camões R/C, 9000-168 Funchal, Portugal " + offices_cities_address;
        document.getElementById('phones_offices1').innerHTML = "(+351) 211 454 004 " + offices_funchal_phone_1;
        document.getElementById('phones_offices2').innerHTML = "(+351) 961 348 300 " + offices_funchal_phone_2;
        document.getElementById('phones_offices3').innerHTML = "";
        $("#video-banner").attr("src", "img/funchal.png");
        $(".svg_address").on("click", function () {
            url = "https://www.google.com/maps/place/Ant%C3%BArio+-+Business+Software+-+Consultadoria+Inform%C3%A1tica,+Lda./@32.6386691,-16.9496828,15z/data=!4m9!1m2!2m1!1sAnturio+Funchal!3m5!1s0xc605f8c3d17f255:0x1cd60503369ac573!8m2!3d32.6386331!4d-16.9409272!15sCg9BbnR1cmlvIEZ1bmNoYWySARNjb21wdXRlcl9jb25zdWx0YW50?hl=pt-PT"
            window.open(url, "_blank");
        })
        $(".svg_phone_1_funchal").on("click", function () {
            window.open("tel:+351 211 454 004");
        })

        $(".svg_phone_2_funchal").on("click", function () {
            window.open("tel:+351 961 348 300");
        })
    });

    $(".svg_address_funchal").on("click", function () {
        url = "https://www.google.com/maps/place/Ant%C3%BArio+-+Business+Software+-+Consultadoria+Inform%C3%A1tica,+Lda./@32.6386691,-16.9496828,15z/data=!4m9!1m2!2m1!1sAnturio+Funchal!3m5!1s0xc605f8c3d17f255:0x1cd60503369ac573!8m2!3d32.6386331!4d-16.9409272!15sCg9BbnR1cmlvIEZ1bmNoYWySARNjb21wdXRlcl9jb25zdWx0YW50?hl=pt-PT"
        window.open(url, "_blank");
    })

    $(".svg_phone_1_funchal").on("click", function () {
        window.open("tel:+351 211 454 004");
    })

    $(".svg_phone_2_funchal").on("click", function () {
        window.open("tel:+351 961 348 300");
    })

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
        let offices_cities_address = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_address"');
        let offices_madrid_phone_1 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_1_madrid"');

        document.getElementById('text_offices').innerHTML = "Calle Francisco Alonso, 2, 1º 20 28660 Boadilla del Monte, Madrid, España " + offices_cities_address;
        document.getElementById('phones_offices1').innerHTML = "(+34) 682 351 263 " + offices_madrid_phone_1;
        document.getElementById('phones_offices2').innerHTML = ""
        document.getElementById('phones_offices3').innerHTML = "";
        $("#video-banner").attr("src", "img/madrid.png");
        $(".svg_address").on("click", function () {
            url = "https://www.google.com/maps/place/C.+Francisco+Alonso,+2,+20,+28660+Boadilla+del+Monte,+Madrid,+Espanha/@40.400799,-3.8846583,17z/data=!3m1!4b1!4m5!3m4!1s0xd418f8c699e0e2d:0x81ebe65697c382e!8m2!3d40.400799!4d-3.8824643?hl=pt-PT"
            window.open(url, "_blank");
        })
        $(".svg_phone_1_madrid").on("click", function () {
            window.open("tel:+34 682 351 263");
        })
    });

    $(".svg_address_madrid").on("click", function () {
        url = "https://www.google.com/maps/place/C.+Francisco+Alonso,+2,+20,+28660+Boadilla+del+Monte,+Madrid,+Espanha/@40.400799,-3.8846583,17z/data=!3m1!4b1!4m5!3m4!1s0xd418f8c699e0e2d:0x81ebe65697c382e!8m2!3d40.400799!4d-3.8824643?hl=pt-PT"
        window.open(url, "_blank");
    })

    $(".svg_phone_1_madrid").on("click", function () {
        window.open("tel:+34 682 351 263");
    })

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
        let offices_cities_address = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_address"');
        let offices_moncambique_phone_1 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_1_moncambique"');
        let offices_moncambique_phone_2 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_2_moncambique"');


        document.getElementById('text_offices').innerHTML = "Rua Kwame Nkrumah, nº417 R\C, Maputo – Moçambique " + offices_cities_address;
        document.getElementById('phones_offices1').innerHTML = "(+258) 21 483 353 " + offices_moncambique_phone_1;
        document.getElementById('phones_offices2').innerHTML = " (+258) 821 799 555 " + offices_moncambique_phone_2;
        document.getElementById('phones_offices3').innerHTML = "";
        $("#video-banner").attr("src", "img/moçambique.png");
        $(".svg_address").on("click", function () {
            url = "https://www.google.com/maps/place/Avenida+Kwame+Nkrumah,+Maputo,+Mo%C3%A7ambique/@-25.963004,32.5891816,17z/data=!3m1!4b1!4m5!3m4!1s0x1ee69badcc55b70f:0x647353ba8a07ed06!8m2!3d-25.963004!4d32.5913756?hl=pt-PT"
            window.open(url, "_blank");
        })
        $(".svg_phone_1_moncambique").on("click", function () {
            window.open("tel:+258 21 483 353");
        })
        $(".svg_phone_2_moncambique").on("click", function () {
            window.open("tel:+258 821 799 555");
        })
    });

    $(".svg_address_moncambique").on("click", function () {
        url = "https://www.google.com/maps/place/Avenida+Kwame+Nkrumah,+Maputo,+Mo%C3%A7ambique/@-25.963004,32.5891816,17z/data=!3m1!4b1!4m5!3m4!1s0x1ee69badcc55b70f:0x647353ba8a07ed06!8m2!3d-25.963004!4d32.5913756?hl=pt-PT"
        window.open(url, "_blank");
    })
    $(".svg_phone_1_moncambique").on("click", function () {
        window.open("tel:+258 21 483 353");
    })
    $(".svg_phone_2_moncambique").on("click", function () {
        window.open("tel:+258 821 799 555");
    })

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
        let offices_cities_address = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_address"');
        let offices_angola_phone_1 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_1_angola"');
        let offices_angola_phone_2 = svg_offices.replace('class="contacts_svg"', 'class="contacts_svg svg_phone svg_phone_2_angola"');

        document.getElementById('text_offices').innerHTML = "Rua à direita do Gamek, 5.º Quart. C/2(A), Morro Bento, Luanda " + offices_cities_address;
        document.getElementById('phones_offices1').innerHTML = "(+244) 928 402 097 " + offices_angola_phone_1;
        document.getElementById('phones_offices2').innerHTML = "(+244) 991 402 097 " + offices_angola_phone_2;
        document.getElementById('phones_offices3').innerHTML = "";
        $("#video-banner").attr("src", "img/angola.png");
        $(".svg_address").on("click", function () {
            url = "https://www.google.com/maps/place/Anturio/@-8.9004774,13.1907957,14.92z/data=!4m12!1m6!3m5!1s0x1a51f4dda398de13:0x194866f94c0d674!2sAnturio!8m2!3d-8.9004566!4d13.1953841!3m4!1s0x1a51f4dda398de13:0x194866f94c0d674!8m2!3d-8.9004566!4d13.1953841?hl=pt-PT"
            window.open(url, "_blank");
        })

        $(".svg_phone_1_angola").on("click", function () {
            window.open("tel:+244 928 402 097");
        })
        $(".svg_phone_2_angola").on("click", function () {
            window.open("tel:+244 991 402 097");
        })
    });

    $(".svg_address_angola").on("click", function () {
        url = "https://www.google.com/maps/place/Anturio/@-8.9004774,13.1907957,14.92z/data=!4m12!1m6!3m5!1s0x1a51f4dda398de13:0x194866f94c0d674!2sAnturio!8m2!3d-8.9004566!4d13.1953841!3m4!1s0x1a51f4dda398de13:0x194866f94c0d674!8m2!3d-8.9004566!4d13.1953841?hl=pt-PT"
        window.open(url, "_blank");
    })
    $(".svg_phone_1_angola").on("click", function () {
        window.open("tel:+244 928 402 097");
    })
    $(".svg_phone_2_angola").on("click", function () {
        window.open("tel:+244 991 402 097");
    })


});