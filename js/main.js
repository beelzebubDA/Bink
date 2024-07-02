$(document).ready(function(e){
    function addSpacesToNumbers(numbers){
        return numbers.toString().replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');
    }
    
    function removeSpacesFromNumbers(numbers){
        return parseInt(numbers.replace(/ (?=\d{3})/g, ''));
    }

    // slider
    $('.main-section__slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            }
        }
    });


    $('.rf-online__bottom-items,.unit-osago__bootom-item').owlCarousel({
        margin: 0,
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            496:{
                items: 3,
                nav: false
            },
            769:{
                items:5
            }
        }
    });

    $('.service-benefits__cl').owlCarousel({
        margin: 0,
        loop: true,
        nav: true,
        dots: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.tab__body-cards.mobile').owlCarousel({
        margin: 25,
        nav: true,
        dots: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 2
            }
        }
    });

    $('.financial.mobile').owlCarousel({
        nav: true,
        dots: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.service-benefits__items-msh').owlCarousel({
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.reasons_block.mobile').owlCarousel({
        nav: false,
        dots: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.unit-osago__bootom-item').owlCarousel({
        margin: 0,
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            496:{
                items:2
            },
            769:{
                items:3
            },
            930:{
                items:4
            },
            1230:{
                items:5
            }
        }
    });

    $('.reason_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            481:{
                items:2
            }
        }
    });

    $('.policy_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            }
        }
    });

    // conditions blocks

    let conditionsOpenBtns = $(".conditions__btn");
    let conditionsCloseBtns = $(".conditions__btn__close");
    conditionsOpenBtns.each(function (btn) {
        $(this).on("click", function (e) {
            e.preventDefault();
            let conditionParent = $(this).parent().parent().parent();
            $(this).toggleClass("actived");
            conditionParent.toggleClass("actived");
            conditionParent.next("div").toggleClass("actived");
        });
    });
    conditionsCloseBtns.each(function (btn) {
        $(this).on("click", function (e) {
            e.preventDefault();
            let conditionsParent = $(this).parent().parent().parent().parent().parent();
            conditionsParent.removeClass("actived");
            conditionsParent.prev("div").removeClass("actived");
            conditionsParent.prev("div").find(conditionsOpenBtns).removeClass("actived");
        });
    });

    // conditions block items change (done!!!)

    let conditionsBlockBtns = $(".conditions__top-link");
    conditionsBlockBtns.each(function (btn) {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(this).addClass("actived");
            $(this).parent().find(".conditions__top-link").not(this).removeClass("actived");
            let dataChangingName = $(this).attr("data-condition");
            let findBlocks = $(this).parent().parent().find(".conditions__list");
            findBlocks.each(function (block) {
                if ($(this).attr("data-condition") == dataChangingName) {
                    $(this).addClass("actived");
                    $(this).parent().addClass("actived");
                    $(this).parent().find("table").not($(this)).removeClass("actived");
                }
            });
        });
    });

    // imask

    IMask(document.querySelector('.inner_kredit_form_price'), {
        mask: Number,
        thousandsSeparator: ' ',
    })

    // tabs

    // quick-selection
    var buttons = document.querySelectorAll('.quick-selection .tab__head-link');

    buttons.forEach(function (index) {
        index.addEventListener('click', function (e) {
            e.preventDefault();
            var contentId = index.dataset.content;
            clearActive();
            clearContentActive();
            this.classList.add('active');
            document.querySelector('#' + contentId).classList.add('active');
        });
    });

    function clearActive() {
        buttons.forEach(function (index) {
            index.classList.remove('active');
        });
    };

    function clearContentActive() {
        document.querySelectorAll('.quick-selection .content').forEach(function (index) {
            index.classList.remove('active');
        });
    };

    // best-deals
    var buttons2 = document.querySelectorAll('.best-deals .tab__head-link');

    buttons2.forEach(function (index) {
        index.addEventListener('click', function (e) {
            e.preventDefault();
            var contentId2 = index.dataset.content;
            clearActive2();
            clearContentActive2();
            this.classList.add('active');
            document.querySelector('#' + contentId2).classList.add('active');
        });
    });

    function clearActive2() {
        buttons2.forEach(function (index) {
            index.classList.remove('active');
        });
    };

    function clearContentActive2() {
        document.querySelectorAll('.best-deals .content').forEach(function (index) {
            index.classList.remove('active');
        });
    };

    // useful-articles
    var buttons3 = document.querySelectorAll('.useful-articles .tab__head-link');

    buttons3.forEach(function (index) {
        index.addEventListener('click', function (e) {
            e.preventDefault();
            var contentId3 = index.dataset.content;
            clearActive3();
            clearContentActive3();
            this.classList.add('active');
            document.querySelector('#' + contentId3).classList.add('active');
        });
    });

    function clearActive3() {
        buttons3.forEach(function (index) {
            index.classList.remove('active');
        });
    };

    function clearContentActive3() {
        document.querySelectorAll('.useful-articles .content').forEach(function (index) {
            index.classList.remove('active');
        });
    };

    
    // financial-performance

    var buttons4 = document.querySelectorAll('.financial-performance .tab__head-link');

    buttons4.forEach(function (index) {
        index.addEventListener('click', function (e) {
            e.preventDefault();
            var contentId4 = index.dataset.content;
            clearActive4();
            clearContentActive4();
            this.classList.add('active');
            document.querySelector('#' + contentId4).classList.add('active');
        });
    });

    function clearActive4() {
        buttons4.forEach(function (index) {
            index.classList.remove('active');
        });
    };

    function clearContentActive4() {
        document.querySelectorAll('.financial-performance .content').forEach(function (index) {
            index.classList.remove('active');
        });
    };

    // input-range

    const rangeInputs = document.querySelectorAll('input[type="range"]');
    const numberInput = document.querySelector('input[type="number"]');

    function handleInputChange(e) {
        let target = e.target;
        if (e.target.type !== 'range') {
            target = document.getElementById('range');
        }
        const min = target.min;
        const max = target.max;
        const val = target.value;

        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    }

    rangeInputs.forEach(input => {
        input.addEventListener('input', handleInputChange);
    })

    // numberInput.addEventListener('input', handleInputChange);

    // input and range kredit price 
    let creditFilterClearBtn = $(".clear_filter .clear_filter-btn");
    let creditFilterBlock = $(".filterBlock-form");

    creditFilterClearBtn.on('click', (e) => {
        e.preventDefault();
        creditFilterBlock[0].reset();
    });

    let formPriceInp = $(".inner_kredit_form_price");
    let formPriceRange = $(".form-control-range");

    formPriceInp.on("input", function(e){
        // console.log($(this).val())
        let creditSum = removeSpacesFromNumbers($(this).val())
        
        formPriceRange.val(creditSum);
        const min = formPriceRange.attr("min");
        
        const max = formPriceRange.attr("max");

        formPriceRange.css({"background-size": (creditSum / max) * 100 + '% 100%'});
    });

    formPriceRange.on("input", function(e){
        let newVal = addSpacesToNumbers($(this).val())
        formPriceInp.val(newVal);
    });


    // extra options

    let showExtraOptionsOpenBtn = $(".kredit .consumer_collapse_btn");
    let extraOptions = $(".additional_parametr");

    showExtraOptionsOpenBtn.on('click', (e) => {
        e.preventDefault();
        extraOptions.toggleClass("showed");
        showExtraOptionsOpenBtn.toggleClass("opened");
        if (showExtraOptionsOpenBtn.hasClass("opened")) {
            showExtraOptionsOpenBtn.find("span").text("Свернуть");
        } else {
            showExtraOptionsOpenBtn.find("span").text("Доп. параметры");
        }
    });


    //

    var menuBtn = document.querySelector('.header__menu-btn');
    var productsDiv = document.querySelector('#my-div');
    var bar1 = document.querySelector('.bar1');
    var bar2 = document.querySelector('.bar2');
    var bar3 = document.querySelector('.bar3');

    menuBtn.addEventListener('click', function (e) {
        if ((productsDiv.style.height === "0px") && (bar1.style.transform === "none") && (bar3.style.transform === "none") && (bar2.style.opacity = "1")) {
            productsDiv.style.height = "100%";
            productsDiv.style.opacity = "1";

            bar1.style.transform = "rotate(-45deg) translate(-6px, 6px)";
            bar2.style.opacity = "0";
            bar3.style.transform = "rotate(45deg) translate(-5px, -6px)";
        } else {
            productsDiv.style.height = "0px";
            productsDiv.style.opacity = "0";
            bar1.style.transform = "none";
            bar2.style.opacity = "1";
            bar3.style.transform = "none";
        }
    });

    // search-btn

    var searchOpen = document.querySelector('.header__search-form');
    var searchClose = document.querySelector('.closebtn');

    searchOpen.addEventListener('click', function (e) {
        document.querySelector('#myOverlay').style.display = "block";
    });

    searchClose.addEventListener('click', function (e) {
        document.querySelector('#myOverlay').style.display = "none";
    });



    var searchOpen = document.querySelector('.header__search-form');
    // var searchClose = document.querySelector('.closebtn');

    
    // tooltip
    $('[data-toggle="tooltip"]').tooltip();
    
    $('.products__item-title').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('show');
        $(this).parent().find('.products__item-list').toggleClass('show')
    })


    $('.step_item:not(.step13) input[type=radio]').on('input',function(e){
        e.preventDefault();
        nextStep = $(this).data('step') + 1;

        if(nextStep == 13){
            currentProgressTimeLineWidth = 50;
            $('.progress_item.etap3').addClass('active');
            $('.calculator_results ul').html('');

            voditelCount = parseInt($(this).val());
            if(voditelCount < 2){
                $('.voditel-1').addClass('active');
            }else if(voditelCount == 8){
                $('.voditel-infinity').addClass('active');
            }else{
                $('.voditel-mnogo').addClass('active');
            }

        }

        let resultItem = "<li>" + $(this).val() + "<span>x</span></li>";
        $('.calculator_results ul').append(resultItem);
        $('.kasko .kasko_calculator .calculator_body .step_item').removeClass('active');
        $('.step' + nextStep).addClass('active');

        currentProgressTimeLineWidth = parseFloat($(' .progress_timeline .progress_fill').data('width'));
        
        
        

        if($(this).data('step') <= 7){
            currentProgressTimeLineWidth += 5;
        }

        if($(this).data('step') > 7 && $(this).data('step') <= 12){
            currentProgressTimeLineWidth += 6.5;
        }
        
        

        $('.progress_timeline .progress_fill').data('width',currentProgressTimeLineWidth);

        $('.progress_timeline .progress_fill').css({
            'width' : currentProgressTimeLineWidth + '%'
        })
    })

    $('.step_item input[type=range]').on('input',function(e){
        e.preventDefault();
        $('.step_item input[name=automobile_price]').val($(this).val())
    })

    $('.step_item.step7 input[type=text]').on('input',function(e){
        e.preventDefault();
        $('.step_item input[name=automobile_price]').val($(this).val())
    })

    $('input[type=range]').on('input',function(e){
        let max = $(this).attr('max');
        if(!max){
            max = 100;
        }
        let currentPercent = ($(this).val() / max) * 100;
        
        $(this).css({
            'background-size' : (currentPercent) + '% 100%'
        })
    })

    $('.step_item .btn_confirm').on('click',function(e){
        nextStep = $(this).data('step') + 1;
        $('.progress_timeline .progress_fill').css({
            'width' : '30%'
        })
        $('.calculator_results ul').html('');
        $('.kasko .kasko_calculator .calculator_body .step_item').removeClass('active');
        $('.step' + nextStep).addClass('active');
        $('.progress_item.etap2').addClass('active');
    })

    $('.calculator_body .action button').on('click',function(e){
        e.preventDefault();
        $('#confirm_sms').modal('show')
    })

    

    $('.input-daterange,.date_picker').datepicker({
        orientation: 'bottom',
        startDate: new Date(),
        language: 'ru'
    });

    $('.add_tourist').on('click',function(e){
        e.preventDefault();
        let maxTouristsCount = 3;
        let touristItem = "<span class='tourist_item'><span class='remove'><img src='images/close.png' alt=''></span><input name='tourists[]' placeholder='Возраст'></span>";
        if($('.tourist_item').length < maxTouristsCount){
            $(this).parent().prepend(touristItem);
        }else{
            alert('Максимальное количество туристов дольжен быть меньше 3')
        }

        $('.tourist_item .remove').on('click',function(e){
            $(this).parent().remove()
        })
        
    })

    $('.tourist_item .remove').on('click',function(e){
        $(this).parent().remove()
    });

    $('.select2').select2({
        placeholder: "Не выбрано",
        allowClear: true
    });
})