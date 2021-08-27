/** 
 * AnturioSystems
 * 
 * FICHEIRO RESPONSÁVEL POR TODA A ITERAÇÃO DO UTILIZADOR COM O WEBSITE
 * 
 * 
 * @author João Cardoso <joao.martins@anturio.com>
 * @author Diogo Gomes <diogo.gomes@anturio.com>
 */



// ******************************************************************************
//                              Variáveis globais
// ******************************************************************************

var $carousel = $('#carouseReviews'),
    $carouselItems = $('.carousel-item', $carousel),
    currentPage = "home",
    collapseOneBool = true,
    collapseTwoBool = false,
    collapseThreeBool = false,
    collapseFourBool = false,
    collapseFiveBool = false,
    collapseSixBool = false,
    collapseSevenBool = false,
    collapseEigthBool = false,
    timer,
    url;

// ******************************************************************************
// ******************************************************************************
// FUNÇÃO QUE OCULTA TODAS AS SECÇÕES E MOSTRA APENAS A HOMEPAGE
// ******************************************************************************
// ******************************************************************************

function HomeLoad() {
    $('#section-contact-us').hide();
    $('#section-construction-homepage').hide();
    $('#section-distribution-homepage').hide();
    $('#section-industry-homepage').hide();
    $('#section-ti-homepage').hide();
    $('#construction-sections').hide();
    $('#distribution-sections').hide();
    $('#industry-sections').hide();
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
        $('#title-1').html("Solução para Tecnologias de Informação");
        $('#title-3').html("A solução ideal para gerir TI");
    } else if (rndInt == 3) {
        $('#industry-sectors-slider').show();
        $('#title-2').html("Solução Indústria");
        $('#title-1').html("Solução para Indústria");
        $('#title-3').html("Gestão e otimização dos processos de fabrico");

    } else if (rndInt == 2) {
        $('#distribution-sectors-slider').show();
        $('#title-2').html("Solução Distribuição");
        $('#title-1').html("Solução para Distribuição");
        $('#title-3').html("Mais eficiência na ocupação de armazéns e linhas de distribuição");
    }
    else {
        $('#construction-sectors-slider').show();
        $('#title-2').html("Solução Construção");
        $('#title-1').html("Solução para Construção Civil");
        $('#title-3').html("Maior controlo e rigor na gestão de obras e projetos");
    }
    //Adicionar Secções a ocultar na página inicial
    window.scrollTo(0, 0);
    $('#video-banner').prop("src", "img/backgroud.png");
    animate(document.getElementById("content-first-page"));
    animate(document.getElementById("video-banner"));
    currentPage = "home";
}

// ******************************************************************************
// ******************************************************************************
// FUNÇÃO QUE OCULTA TODAS AS SECÇÕES E MOSTRA APENAS A PÁGINA DE CONTACTOS
// ******************************************************************************
// ******************************************************************************

function ContactUsLoad() {
    if (($(window).width() < 993) && ($(".menu-icon").is('[style]'))) {
        $(".menu-icon").click();
    }
    $('#first-hr').hide();
    $('#content-first-page').hide();
    $('#different_sectors').hide();
    $('#div_with_sectors').hide();
    $('#we-solution-page').hide();
    $('#section-construction-homepage').hide();
    $('#section-ti-homepage').hide();
    $('#section-distribution-homepage').hide();
    $('#section-industry-homepage').hide();
    $('#div_trusted_clients').hide();
    $('#construction-sections').hide();
    $('#distribution-sections').hide();
    $('#industry-sections').hide();
    $('#section-contact-us').show();
    window.scrollTo(0, 0);
    $('#video-banner').prop("src", "img/lisboa.png");
    animate(document.getElementById("section-contact-us"));
    animate(document.getElementById("video-banner"));

    $("#lisboa").addClass("hover");

    document.getElementById("lisboa").innerHTML = `Lisboa<span class=\"dot_point_geral\">.</span>`
    currentPage = "home";
    $("#lisboa").click();

    if (document.getElementsByClassName('buttonOne')[0].getAttribute('aria-expanded') === "false") {
        $(".buttonOne").click();
    }
    $(".first_svg_management").html(red_svg);
}

// ******************************************************************************
// ******************************************************************************
// FUNÇÃO QUE OCULTA TODAS AS SECÇÕES E MOSTRA APENAS A PÁGINA DE CONSTRUÇÃO
// ******************************************************************************
// ******************************************************************************

function ConstructionLoad() {
    $('#first-hr').hide();
    $('#content-first-page').hide();
    $('#div_with_sectors').hide();
    $('#we-solution-page').hide();
    $('#section-construction-homepage').hide();
    $('#section-distribution-homepage').hide();
    $('#section-industry-homepage').hide();
    $('#section-ti-homepage').hide();
    $('#section-contact-us').hide();
    $('#different_sectors').hide();
    $('#distribution-sections').hide();
    $('#industry-sections').hide();
    $('#section-construction-homepage').show();
    $('#div_trusted_clients').show();
    $('#construction-sections').show();
    window.scrollTo(0, 0);
    $('#video-banner').prop("src", "img/construction_background.jpg");
    animate(document.getElementById("section-construction-homepage"));
    animate(document.getElementById("video-banner"));
    resetArrowConstruction("construction");
    currentPage = "construction";
    if (document.getElementsByClassName('buttonOne')[1].getAttribute('aria-expanded') === "false") {
        $(".buttonOne").click();
    }
    $carousel = $('#carouseReviews');
    $carouselItems = $('.carousel-item', $carousel);
    setNextPrev();
    $(".first_svg_management").html(red_svg);

}

// ******************************************************************************
// ******************************************************************************
// FUNÇÃO QUE OCULTA TODAS AS SECÇÕES E MOSTRA APENAS A PÁGINA DE DISTRIBUIÇÃO
// ******************************************************************************
// ******************************************************************************

function DistributionLoad() {
    $('#first-hr').hide();
    $('#content-first-page').hide();
    $('#div_with_sectors').hide();
    $('#we-solution-page').hide();
    $('#section-construction-homepage').hide();
    $('#section-ti-homepage').hide();
    $('#section-distribution-homepage').hide();
    $('#section-industry-homepage').hide();
    $('#section-contact-us').hide();
    $('#different_sectors').hide();
    $('#construction-sections').hide();
    $('#industry-sections').hide();
    $('#section-distribution-homepage').show();
    $('#div_trusted_clients').show();
    $('#distribution-sections').show();
    $('#distribution-sections').show();
    window.scrollTo(0, 0);
    $('#video-banner').prop("src", "img/distribution-homepage.jpg");
    animate(document.getElementById("section-distribution-homepage"));
    animate(document.getElementById("video-banner"));
    resetArrowConstruction("distribution");
    currentPage = "distribution";

    if (document.getElementsByClassName('buttonOne')[2].getAttribute('aria-expanded') === "false") {
        $(".buttonOne").click();
    }
    $carousel = $('#carouseReviewsDistribution');
    $carouselItems = $('.carousel-item', $carousel);
    setNextPrev();
    $(".first_svg_management").html(red_svg);
}

// ******************************************************************************
// ******************************************************************************
// FUNÇÃO QUE OCULTA TODAS AS SECÇÕES E MOSTRA APENAS A PÁGINA DE INDÚSTRIA
// ******************************************************************************
// ******************************************************************************

function IndustryLoad() {
    $('#first-hr').hide();
    $('#content-first-page').hide();
    $('#div_with_sectors').hide();
    $('#we-solution-page').hide();
    $('#section-construction-homepage').hide();
    $('#section-ti-homepage').hide();
    $('#section-distribution-homepage').hide();
    $('#section-industry-homepage').hide();
    $('#section-contact-us').hide();
    $('#different_sectors').hide();
    $('#distribution-sections').hide();
    $('#construction-sections').hide();
    $('#section-industry-homepage').show();
    $('#div_trusted_clients').show();
    $('#industry-sections').show();
    window.scrollTo(0, 0);
    $('#video-banner').prop("src", "img/industry-homepage.jpg");
    animate(document.getElementById("section-industry-homepage"));
    animate(document.getElementById("video-banner"));
    resetArrowConstruction("industry");
    currentPage = "industry";
    if (document.getElementsByClassName('buttonOne')[3].getAttribute('aria-expanded') === "false") {
        $(".buttonOne").click();
    }
    $carousel = $('#carouseReviewsIndustry');
    $carouselItems = $('.carousel-item', $carousel);
    setNextPrev();
    $(".first_svg_management").html(red_svg);
}

// ******************************************************************************
// ******************************************************************************
// FUNÇÃO QUE OCULTA TODAS AS SECÇÕES E MOSTRA APENAS A PÁGINA DE T.I
// ******************************************************************************
// ******************************************************************************

function ITLoad() {
    $('#first-hr').hide();
    $('#content-first-page').hide();
    $('#div_with_sectors').hide();
    $('#we-solution-page').hide();
    $('#section-construction-homepage').hide();
    $('#section-ti-homepage').hide();
    $('#section-distribution-homepage').hide();
    $('#section-industry-homepage').hide();
    $('#section-contact-us').hide();
    $('#different_sectors').hide();
    $('#distribution-sections').hide();
    $('#construction-sections').hide();
    $('#industry-sections').hide();
    $('#section-ti-homepage').show();
    $('#div_trusted_clients').show();
    //$('#industry-sections').show();
    window.scrollTo(0, 0);
    $('#video-banner').prop("src", "img/it-homepage.jpg");
    animate(document.getElementById("section-ti-homepage"));
    animate(document.getElementById("video-banner"));
    resetArrowConstruction("it");
    currentPage = "it";
    if (document.getElementsByClassName('buttonOne')[3].getAttribute('aria-expanded') === "false") {
        $(".buttonOne").click();
    }
    //$carousel = $('#carouseReviewsIndustry');
    //$carouselItems = $('.carousel-item', $carousel);
    //setNextPrev();
    $(".first_svg_management").html(red_svg);
}


// ******************************************************************************
// ******************************************************************************
// FUNÇÃO QUE DEPENDENDO DA POSIÇÃO DO SLIDER DA HOMEPAGE, CARREGA A PÁGINA 
//           CORRESPONDENTE AO CLICAR NO BOTÃO DE SABER MAIS
// ******************************************************************************
// ******************************************************************************

function ChangePageButton() {
    if ($("#construction-sectors-slider").is(":visible")) {
        ConstructionLoad();

    } else if ($("#distribution-sectors-slider").is(":visible")) {
        DistributionLoad();
    } else if ($("#industry-sectors-slider").is(":visible")) {
        IndustryLoad();
    }
    else {
        ITLoad();
    }
}

// ******************************************************************************
// ******************************************************************************
// FUNÇÃO USADA NAS HOMEPAGES SECUNDÁRIAS, QUE VOLTA À POSIÇÃO ZERO O CARROUSEL
//                EM BAIXO DOS TÍTULOS (sub-homepage-info)
// ******************************************************************************
// ******************************************************************************

function resetArrowConstruction(section) {
    if ($(window).width() < 601) {
        $(".vertical-line").hide();
        $("#" + section + "-item-1").show();
        $("#" + section + "-item-2").hide();
        $("#" + section + "-item-3").hide();
        $("#" + section + "-item-4").hide();
        animate(document.getElementById(section + '-item-1'));
    }
    else if ($(window).width() < 993) {
        $("#" + section + "-line-3").hide();
        $("#" + section + "-item-3").hide();
        $("#" + section + "-item-4").hide();
        $("#" + section + "-line-2").hide();
        $("#" + section + "-line-1").show();
        $("#" + section + "-item-1").show();
        $("#" + section + "-item-2").show();
        animate(document.getElementById(section + '-line-1'));
        animate(document.getElementById(section + '-item-1'));
        animate(document.getElementById(section + '-item-2'));
    }
}

// ******************************************************************************
// ******************************************************************************
// FUNÇÃO USADA NAS HOMEPAGES SECUNDÁRIAS, QUE É USADA QUANDO A SETA DO 
//                      LADO DIREITA É CLICADA
// ******************************************************************************
// ******************************************************************************

function arrowConstructionRigth(section) {
    if ($(window).width() < 601) {
        $(".vertical-line").hide();
        if ($("#" + section + "-item-1").is(":visible")) {
            $("#" + section + "-item-1").hide();
            $("#" + section + "-item-2").show();
            animate(document.getElementById(section + '-item-2'));
        }
        else if ($("#" + section + "-item-2").is(":visible")) {
            $("#" + section + "-item-2").hide();
            $("#" + section + "-item-3").show();
            animate(document.getElementById(section + '-item-3'));

        }
        else if ($("#" + section + "-item-3").is(":visible")) {
            $("#" + section + "-item-3").hide();
            $("#" + section + "-item-4").show();
            animate(document.getElementById(section + '-item-4'));
        }
        else {
            $("#" + section + "-item-4").hide();
            $("#" + section + "-item-1").show();
            animate(document.getElementById(section + '-item-1'));
        }

    }
    else if ($(window).width() < 993) {
        if ($("#" + section + "-item-1").is(":visible")) {
            $("#" + section + "-line-1").hide();
            $("#" + section + "-item-1").hide();
            $("#" + section + "-item-2").hide();
            $("#" + section + "-line-2").hide();
            $("#" + section + "-line-3").show();
            $("#" + section + "-item-3").show();
            $("#" + section + "-item-4").show();
            animate(document.getElementById(section + '-line-3'));
            animate(document.getElementById(section + '-item-3'));
            animate(document.getElementById(section + '-item-4'));
        }
        else {
            $("#" + section + "-line-3").hide();
            $("#" + section + "-item-3").hide();
            $("#" + section + "-item-4").hide();
            $("#" + section + "-line-2").hide();
            $("#" + section + "-line-1").show();
            $("#" + section + "-item-1").show();
            $("#" + section + "-item-2").show();
            animate(document.getElementById(section + '-line-1'));
            animate(document.getElementById(section + '-item-1'));
            animate(document.getElementById(section + '-item-2'));
        }
    }

}

// ******************************************************************************
// ******************************************************************************
// FUNÇÃO USADA NAS HOMEPAGES SECUNDÁRIAS, QUE É USADA QUANDO A SETA DO 
//                      LADO ESQUERDO É CLICADA
// ******************************************************************************
// ******************************************************************************

function arrowConstructionLeft(section) {
    if ($(window).width() < 601) {
        if ($("#" + section + "-item-1").is(":visible")) {
            $("#" + section + "-item-1").hide();
            $("#" + section + "-item-4").show();
            animate(document.getElementById(section + '-item-4'));
        }
        else if ($("#" + section + "-item-2").is(":visible")) {
            $("#" + section + "-item-2").hide();
            $("#" + section + "-item-1").show();
            animate(document.getElementById(section + '-item-1'));

        }
        else if ($("#" + section + "-item-3").is(":visible")) {
            $("#" + section + "-item-3").hide();
            $("#" + section + "-item-2").show();
            animate(document.getElementById(section + '-item-2'));
        }
        else {
            $("#" + section + "-item-4").hide();
            $("#" + section + "-item-3").show();
            animate(document.getElementById(section + '-item-3'));
        }

    }
    else if ($(window).width() < 993) {
        if ($("#" + section + "-item-1").is(":visible")) {
            $("#" + section + "-line-1").hide();
            $("#" + section + "-item-1").hide();
            $("#" + section + "-item-2").hide();
            $("#" + section + "-line-3").show();
            $("#" + section + "-item-3").show();
            $("#" + section + "-item-4").show();
            animate(document.getElementById(section + '-line-3'));
            animate(document.getElementById(section + '-item-3'));
            animate(document.getElementById(section + '-item-4'));
        }
        else {
            $("#" + section + "-line-3").hide();
            $("#" + section + "-item-3").hide();
            $("#" + section + "-item-4").hide();
            $("#" + section + "-line-1").show();
            $("#" + section + "-item-1").show();
            $("#" + section + "-item-2").show();
            animate(document.getElementById(section + '-line-1'));
            animate(document.getElementById(section + '-item-1'));
            animate(document.getElementById(section + '-item-2'));
        }
    }
}

// ******************************************************************************
// ******************************************************************************
// FUNÇÃO USADA NO CARROUSEL DE REVIEWS, DE FORMA A DEFINIR QUAL SERÁ O 
//    ITEM ANTERIOR E O PRÓXIMO, DE FORMA A SER MOSTRADA A SUA PREVIEW
// ******************************************************************************
// ******************************************************************************

function setNextPrev() {
    $carousel.on('slid.bs.carousel', function (e) {
        //Reset classes
        $carouselItems.removeClass('prev');
        $carouselItems.removeClass('next');
        //Find current slide
        let $active = $(e.relatedTarget);
        //Add corresponding classes to next and prev elements
        if ($active.next().addClass('next').length == 0) {
            $($carouselItems[0]).addClass('next');
        }
        if ($active.prev().addClass('prev').length == 0) {
            $($carouselItems[$carouselItems.length - 1]).addClass('prev');
        };
    });
}

// ******************************************************************************
// ******************************************************************************
//                    FUNÇÃO QUE REMOVE OS PONTOS FINAIS VERMELHOS
// ******************************************************************************
// ******************************************************************************

function takeDotsOut() {
    $("#offices_cities_text li a").find("span").remove();
}


// ******************************************************************************
// ******************************************************************************
// FUNÇÃO PARA ALTERAR TAMANHO DOS SVGS (Construção, Industria, Distribuição, IT)
// ******************************************************************************
// ******************************************************************************

function changeSizesSVG() {
    document.getElementById('svg_construction').setAttribute('width', 150)
    document.getElementById('svg_industry').setAttribute('width', 150)
    document.getElementById('svg_distribution').setAttribute('width', 150)
    document.getElementById('svg_it').setAttribute('width', 150)
}

// ******************************************************************************
// ******************************************************************************
//           FUNÇÕES PARA GERIR OS CLIQUES DENTRO DO MENU HAMBURGUER
// ******************************************************************************
// ******************************************************************************

function ConstructionHamburguerClick() {
    $('.menu-icon').click();
    ConstructionLoad();
}

function DistributionHamburguerClick() {
    $('.menu-icon').click();
    DistributionLoad();
}

function IndustryHamburguerClick() {
    $('.menu-icon').click();
    IndustryLoad();

}

function ITHamburguerClick() {
    $('.menu-icon').click();
    ITLoad();

}

// ******************************************************************************
// ******************************************************************************
//    FUNÇÃO PARA DAR RESIZE DE ALGUNS ELEMENTOS QUANDO SE TRATA DE TELEMÓVEL
// ******************************************************************************
// ******************************************************************************

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

        $(".logo").html(svg_logo_desktop);
    }
}



// ******************************************************************************
// ******************************************************************************
//           FUNÇÃO PARA ALTERAR SVGS PARA A VERSÃO MOBILE
// ******************************************************************************
// ******************************************************************************

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

// ******************************************************************************
// ******************************************************************************
//           FUNÇÃO PARA ALTERAR SVGS PARA A VERSÃO WEB
// ******************************************************************************
// ******************************************************************************

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

// ******************************************************************************
// ******************************************************************************
//                FUNÇÃO PARA GERIR O HOVER SOBRE OS 4 ICONS
// ******************************************************************************
// ******************************************************************************


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
                IndustryLoad();
                document.getElementById('svg_industry').innerHTML = svg_industry_hover_mobile;
            }
        });

        $("#svg_distribution").on({
            click: function () {
                DistributionLoad();
                document.getElementById('svg_distribution').innerHTML = svg_distribution_hover_mobile;
            }
        });

        $("#svg_it").on({
            click: function () {
                ITLoad();
                document.getElementById('svg_it').innerHTML = svg_it_hover_mobile;
            }
        });
    } else if ($(window).width() < 992) {
        $("#svg_construction").on({
            click: function () {
                document.getElementById('svg_construction').innerHTML = svg_construction_hover_mobile;
                ConstructionLoad();
            }
        });

        $("#svg_industry").on({
            click: function () {
                document.getElementById('svg_industry').innerHTML = svg_industry_hover_mobile;
                IndustryLoad();
            }
        });

        $("#svg_distribution").on({
            click: function () {
                document.getElementById('svg_distribution').innerHTML = svg_distribution_hover_mobile;
                DistributionLoad();
            }
        });

        $("#svg_it").on({
            click: function () {
                ITLoad();
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
            },
            click: function () {
                IndustryLoad();
            }
        });

        $("#svg_distribution").on({
            mouseenter: function () {
                document.getElementById('svg_distribution').innerHTML = svg_distribution_hover;
            },
            mouseleave: function () {
                document.getElementById('svg_distribution').innerHTML = svg_distribution;
            },
            click: function () {
                DistributionLoad();
            }
        });

        $("#svg_it").on({
            mouseenter: function () {
                document.getElementById('svg_it').innerHTML = svg_it_hover;
            },
            mouseleave: function () {
                document.getElementById('svg_it').innerHTML = svg_it;
            },
            click: function () {
                ITLoad();
            }
        });
    }
}


// ******************************************************************************
// ******************************************************************************
// FUNÇÃO UTILIZADA PARA ALTERAR SVG'S DA VERSÃO MOBILE, TABLET E WEB CONSONTE O TAMANHO DO ECRA
// ******************************************************************************
// ******************************************************************************

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
        $(".half_anturio_img").hide();
    } else {
        //Back to Web
        $("#especialists_text").insertAfter("#auxDiv");
        $(".half_anturio_img").show();
        $("#complete_management_info").insertAfter("#complete_management_imgs")
    }
}


// ******************************************************************************
// ******************************************************************************
// Função utilizada para alterar o slider ao fim de 10 segundos
// ******************************************************************************
// ******************************************************************************

function changeSlider() {
    clearTimeout(timer);
    if ($("#content-first-page").is(":visible")) {
        if ($("#construction-sectors-slider").is(":visible")) {
            $('#construction-sectors-slider').hide();
            $('#distribution-sectors-slider').show("slow");

            $('#title-2').html("Solução Distribuição");
            $('#title-1').html("Solução para Distribuição");
            $('#title-3').html("Mais eficiência na ocupação de armazéns e linhas de distribuição");
            animate(document.getElementById('distribution-sectors-slider'));

        } else if ($("#distribution-sectors-slider").is(":visible")) {
            $('#distribution-sectors-slider').hide();
            $('#industry-sectors-slider').show("slow");
            $('#title-2').html("Solução Indústria");
            $('#title-1').html("Solução para Indústria");
            $('#title-3').html("Gestão e otimização dos processos de fabrico");
            animate(document.getElementById('industry-sectors-slider'));

        } else if ($("#industry-sectors-slider").is(":visible")) {
            $('#industry-sectors-slider').hide();
            $('#it-sectors-slider').show("slow");
            $('#title-2').html("Solução IT");
            $('#title-1').html("Solução para Tecnologias de Informação");
            $('#title-3').html("A solução ideal para gerir TI");
            animate(document.getElementById('it-sectors-slider'));
        }
        else {
            $('#it-sectors-slider').hide();
            $('#construction-sectors-slider').show("slow");
            $('#title-2').html("Solução Construção");
            $('#title-1').html("Solução para Construção Civil");
            $('#title-3').html("Maior controlo e rigor na gestão de obras e projetos");
            animate(document.getElementById('construction-sectors-slider'));
        }
        animate(document.getElementById("title-2"));
        animate(document.getElementById("title-1"));
        animate(document.getElementById("title-3"));
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

function changeManagementHeadingOne() {
    if (!collapseOneBool) {
        $(".first_svg_management").html(red_svg);
        collapseOneBool = true
    } else {
        $(".first_svg_management").html(black_svg);
        collapseOneBool = false
    }
    collapseTwoBool = false;
    collapseThreeBool = false;
    collapseFourBool = false;
    collapseFiveBool = false;
    collapseSixBool = false;
    collapseSevenBool = false;
    collapseEigthBool = false;

    $(".second_svg_management").html(black_svg);
    $(".third_svg_management").html(black_svg);
    $(".fourth_svg_management").html(black_svg);
    $(".fifth_svg_management").html(black_svg);
    $(".sixth_svg_management").html(black_svg);
    $(".seventh_svg_management").html(black_svg);
    $(".eigthth_svg_management").html(black_svg);
}

function changeManagementHeadingTwo() {
    if (!collapseTwoBool) {
        $(".second_svg_management").html(red_svg);
        collapseTwoBool = true
    } else {
        $(".second_svg_management").html(black_svg);
        collapseTwoBool = false
    }
    collapseOneBool = false;
    collapseThreeBool = false;
    collapseFourBool = false;
    collapseFiveBool = false;
    collapseSixBool = false;
    collapseSevenBool = false;
    collapseEigthBool = false;

    $(".first_svg_management").html(black_svg);
    $(".third_svg_management").html(black_svg);
    $(".fourth_svg_management").html(black_svg);
    $(".fifth_svg_management").html(black_svg);
    $(".sixth_svg_management").html(black_svg);
    $(".seventh_svg_management").html(black_svg);
    $(".eigthth_svg_management").html(black_svg);
}

function changeManagementHeadingThree() {
    if (!collapseThreeBool) {
        $(".third_svg_management").html(red_svg);
        collapseThreeBool = true
    } else {
        $(".third_svg_management").html(black_svg);
        collapseThreeBool = false
    }
    collapseOneBool = false;
    collapseTwoBool = false;
    collapseFourBool = false;
    collapseFiveBool = false;
    collapseSixBool = false;
    collapseSevenBool = false;
    collapseEigthBool = false;

    $(".second_svg_management").html(black_svg);
    $(".first_svg_management").html(black_svg);
    $(".fourth_svg_management").html(black_svg);
    $(".fifth_svg_management").html(black_svg);
    $(".sixth_svg_management").html(black_svg);
    $(".seventh_svg_management").html(black_svg);
    $(".eigthth_svg_management").html(black_svg);
}

function changeManagementHeadingFour() {
    if (!collapseFourBool) {
        $(".fourth_svg_management").html(red_svg);
        collapseFourBool = true
    } else {
        $(".fourth_svg_management").html(black_svg);
        collapseFourBool = false
    }
    collapseOneBool = false;
    collapseTwoBool = false;
    collapseThreeBool = false;
    collapseFiveBool = false;
    collapseSixBool = false;
    collapseSevenBool = false;
    collapseEigthBool = false;

    $(".second_svg_management").html(black_svg);
    $(".third_svg_management").html(black_svg);
    $(".first_svg_management").html(black_svg);
    $(".fifth_svg_management").html(black_svg);
    $(".sixth_svg_management").html(black_svg);
    $(".seventh_svg_management").html(black_svg);
    $(".eigthth_svg_management").html(black_svg);
}

function changeManagementHeadingFive() {
    if (!collapseFiveBool) {
        $(".fifth_svg_management").html(red_svg);
        collapseFiveBool = true
    } else {
        $(".fifth_svg_management").html(black_svg);
        collapseFiveBool = false
    }
    collapseOneBool = false;
    collapseTwoBool = false;
    collapseThreeBool = false;
    collapseFourBool = false;
    collapseSixBool = false;
    collapseSevenBool = false;
    collapseEigthBool = false;

    $(".second_svg_management").html(black_svg);
    $(".third_svg_management").html(black_svg);
    $(".fourth_svg_management").html(black_svg);
    $(".first_svg_management").html(black_svg);
    $(".sixth_svg_management").html(black_svg);
    $(".seventh_svg_management").html(black_svg);
    $(".eigthth_svg_management").html(black_svg);
}

function changeManagementHeadingSix() {
    if (!collapseSixBool) {
        $(".sixth_svg_management").html(red_svg);
        collapseSixBool = true
    } else {
        $(".sixth_svg_management").html(black_svg);
        collapseSixBool = false
    }
    collapseOneBool = false;
    collapseTwoBool = false;
    collapseThreeBool = false;
    collapseFourBool = false;
    collapseFiveBool = false;
    collapseSevenBool = false;
    collapseEigthBool = false;

    $(".second_svg_management").html(black_svg);
    $(".third_svg_management").html(black_svg);
    $(".fourth_svg_management").html(black_svg);
    $(".fifth_svg_management").html(black_svg);
    $(".first_svg_management").html(black_svg);
    $(".seventh_svg_management").html(black_svg);
    $(".eigthth_svg_management").html(black_svg);
}


function changeManagementHeadingSeven() {
    if (!collapseSevenBool) {
        $(".seventh_svg_management").html(red_svg);
        collapseSevenBool = true
    } else {
        $(".seventh_svg_management").html(black_svg);
        collapseSevenBool = false
    }
    collapseOneBool = false;
    collapseTwoBool = false;
    collapseThreeBool = false;
    collapseFourBool = false;
    collapseFiveBool = false;
    collapseEigthBool = false;

    $(".second_svg_management").html(black_svg);
    $(".third_svg_management").html(black_svg);
    $(".fourth_svg_management").html(black_svg);
    $(".fifth_svg_management").html(black_svg);
    $(".first_svg_management").html(black_svg);
    $(".sixth_svg_management").html(black_svg);
    $(".eigthth_svg_management").html(black_svg);
}

function changeManagementHeadingEigth() {
    if (!collapseEigthBool) {
        $(".eigthth_svg_management").html(red_svg);
        collapseEigthBool = true
    } else {
        $(".eigthth_svg_management").html(black_svg);
        collapseEigthBool = false
    }
    collapseOneBool = false;
    collapseTwoBool = false;
    collapseThreeBool = false;
    collapseFourBool = false;
    collapseFiveBool = false;
    collapseSevenBool = false
    console.log("a");

    $(".second_svg_management").html(black_svg);
    $(".third_svg_management").html(black_svg);
    $(".fourth_svg_management").html(black_svg);
    $(".fifth_svg_management").html(black_svg);
    $(".first_svg_management").html(black_svg);
    $(".sixth_svg_management").html(black_svg);
    $(".seventh_svg_management").html(black_svg);
}


// ******************************************************************************
// ******************************************************************************
// FUNÇÃO UTILIZADA PARA ALTERAR IMAGEM SOLUÇÃO IDEAL DE ACORDO COM A SECÇÃO ATUAL E TAMANHO DO ECRÃ
// ******************************************************************************
// ******************************************************************************

function changeHtmlIdealSolution() {

    // CONSTRUÇÃO

    if ($(window).width() < 608) {
        $("#ideal_solution_chart_img").attr("src", "/img/solution_chart_mobile.png");
    } else if ($(window).width() < 1300 && $(window).width() >= 608) {         //Back to Web  
        $("#ideal_solution_chart_img").attr("src", "/img/solution_chart_tablet.png");
    } else {
        $("#ideal_solution_chart_img").attr("src", "/img/solution_chart.png");
    }

    // DISTRIBUIÇÃO

    if ($(window).width() < 608) {
        $("#ideal_solution_chart_img_distribution").attr("src", "/img/solution_chart_mobile.png");
    } else if ($(window).width() < 1300 && $(window).width() >= 608) {         //Back to Web  
        $("#ideal_solution_chart_img_distribution").attr("src", "/img/solution_chart_tablet.png");
    } else {
        $("#ideal_solution_chart_img_distribution").attr("src", "/img/solution_chart.png");
    }

    // INDÚSTRIA


    if ($(window).width() < 608) {
        $("#ideal_solution_chart_img_industry").attr("src", "/img/solution_chart_mobile.png");
    } else if ($(window).width() < 1300 && $(window).width() >= 608) {         //Back to Web  
        $("#ideal_solution_chart_img_industry").attr("src", "/img/solution_chart_tablet.png");
    } else {
        $("#ideal_solution_chart_img_industry").attr("src", "/img/solution_chart.png");
    }




}


// ******************************************************************************
// ******************************************************************************
// FUNÇÃO UTILIZADA PARA ALTERAR PÁGINA DE CONTACTOS PARA VERSÃO MOBILE E VICE VERSA
// ******************************************************************************
// ******************************************************************************

function mobileVersionOffices() {
    if ($(window).width() < 621) {
        document.getElementById('accordionOffices').style.display = "block"
        document.getElementById('contact-us-office-info').style.display = "none"
        document.getElementById('offices_cities').style.display = "none"
    } else {
        document.getElementById('accordionOffices').style.display = "none"
        document.getElementById('contact-us-office-info').style.display = "flex"
        document.getElementById('offices_cities').style.display = "block"
    }
}