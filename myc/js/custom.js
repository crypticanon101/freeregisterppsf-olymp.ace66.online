let debouncets = 0;
$(document).ready(function() {
    $(window).on('resize', debounce(function (e) {
        debouncets = 250;

        let bodywid = $('body').width();
        let mobile  = bodywid <= 1000 ? true : false;

        let topbgwid = mobile ?  400 : 1920;
        let topbghei = mobile ?  945 : 1200;
        let midbgwid = mobile ?  414 : 1920;
        let midbghei = mobile ?  450 : 850; //660 : 1000
        let btmbgwid = mobile ?  260 : 1920;
        let btmbghei = mobile ?  550 : 1000;
        let ratio    = bodywid / topbgwid;

        $('.top-bg').css({
            'height'    : `${ratio * topbghei}px`,
            'background-size': '100%'
        });
        let hratio = (ratio * topbghei) / topbghei;
        $('.top-bg .gem-2').css({
            'top'       : mobile ? `${hratio * 365}px` : `${hratio * 660}px`,
            'left'      : mobile ? `${ratio * 300}px` : `${ratio * 900}px`,
            'width'     : mobile ? `${ ratio * 60}px` : `${ratio * 120}px`,
        }).show();
        $('.top-bg .gem-2.v2').css({
            'top'       : mobile ? `${hratio * 485}px` : `${hratio * 860}px`,
            'left'      : mobile ? `${ratio * 350}px` : `${ratio * 950}px`,
            'width'     : mobile ? `${ ratio * 60}px` : `${ratio * 120}px`,
        }).show();
        $('.top-bg .gem-2v3').css({
            'top'       : mobile ? `${hratio * 425}px` : `${hratio * 660}px`,
            'left'      : mobile ? `${ratio * 300}px` : `${ratio * 1650}px`,
            'width'     : mobile ? `${ ratio * 60}px` : `${ratio * 120}px`,
        }).show();
        $('.top-bg .gem-1').css({
            'top'       : mobile ? `${hratio * 250}px` : `${hratio * 400}px`,
            'left'      : mobile ? `${ratio * 30}px` : `${ratio * 220}px`,
            'width'     : mobile ? `${ ratio *  80}px` : `${ratio * 160}px`,
        }).show();
        $('.top-bg .gem-1.v2').css({
            'top'       : mobile ? `${hratio * 250}px` : `${hratio * 200}px`,
            'left'      : mobile ? `${ratio * 20}px` : `${ratio * 120}px`,
            'width'     : mobile ? `${ ratio *  80}px` : `${ratio * 160}px`,
        }).show();
        $('.top-bg .gem-1v3').css({
            'top'       : mobile ? `${hratio * 210}px` : `${hratio * 200}px`,
            'left'      : mobile ? `${ratio * 30}px` : `${ratio * 110}px`,
            'width'     : mobile ? `${ ratio *  80}px` : `${ratio * 160}px`,
        }).show();
        $('.mid-bg .gem-3').css({
            'top'       : mobile ? `${hratio * 90}px` : `${hratio * 150}px`,
            'left'      : mobile ? `${ ratio * -40}px` : `${ratio * -80}px`,
            'width'     : mobile ? `${ ratio * 100}px` : `${ratio * 250}px`,
        }).show();
        $('.mid-bg .coin-2').css({
            'top'       : mobile ? `${hratio * 300}px` : `${hratio * 650}px`,
            'left'      : mobile ? `${ratio * 270}px`  : `${ratio * 1600}px`,
            'width'     : mobile ? `${ ratio * 0}px` : `${ratio * 200}px`,
        }).show();
        $('.mid-bg .coin-1').css({
            'bottom'    : mobile ? `${hratio * 1100}px` : `${hratio * 900}px`,
            'left'      : mobile ? `${ ratio * -60}px` : `${ratio * 100}px`,
            'width'     : mobile ? `${ ratio * 120}px` : `${ratio * 300}px`,
        }).show();
        $('.mid-bg .coin-1.v2').css({
            'bottom'    : mobile ? `${hratio * 1000}px` : `${hratio * 900}px`,
            'left'      : mobile ? `${ ratio * -60}px` : `${ratio * 100}px`,
            'width'     : mobile ? `${ ratio * 120}px` : `${ratio * 300}px`,
        }).show();
        $('.btm-bg .gem-6').css({
            'bottom'    : mobile ? `${hratio * 50}px` : `${hratio * 0}px`,
            'right'     : mobile ? `${ ratio * -40}px` : `${ratio * 150}px`,
            'width'     : mobile ? `${ ratio * 100}px` : `${ratio * 175}px`,
        }).show();
        $('.top-bg .gop-logo').css({
            'width'     : mobile ? `${ratio * 270 * 1.2}px` : `${ratio * 666}px`,
            'margin'    : mobile ?  `${ratio * 30}px 0 0 0` : `0 0 -${ratio * 30}px 0`,
        });
        $('.top-bg .bp-logo').css({
            'width'     : mobile ? `${ratio * 85 * 1.2 }px` : `${ratio * 217 }px`,
        });
        $('.top-bg .pp-logo').css({
            'width'     : mobile ? `${ratio * 85 * 1.2}px` : `${ratio * 217}px`,
        });
        let textapngtop = lang == 'th' ? 310 : 335;
        $('.top-bg .text-apng').css({
            'top'       : mobile ? `${ratio * textapngtop}px` : `${ratio * 590}px`,
            'left'      : mobile ?         `${ratio *  75}px` :                 '',
            'right'     : mobile ?                         '' : `${ratio * 120}px`,
            'width'     : mobile ?         `${ratio * 260}px` : `${ratio * 421}px`,
        }).show();
        $('.top-bg .content').css({
            // 300 is top content + threshold
            'height'    : `${ratio * topbghei - 300}px`,
        });
        $('.top-bg .text01').css({
            'font-size' : mobile ? `${ratio * 14}px` : `${ratio * 18}px`,
            'padding' : mobile ? `0%` : `5%`,
        });
        $('.top-bg .text02').css({
            'font-size' : mobile ? `${ratio * 18}px` : `${ratio * 35}px`,
        });


        $('.claim-form').css({
            'top'       : mobile ?                `${ratio * 530}px` : `${ratio * 360}px`,
            'left'      : mobile ?                `${ratio *  30}px` : `${ratio * 1100}px`,
            'width'     : mobile ?                `${ratio * 343}px` : `${ratio * 420}px`,
            'padding'   : mobile ? `${ratio * 25}px ${ratio * 20}px` : `${ratio * 42}px ${ratio * 40}px ${ratio * 65}px`,
        });
        let claimformratio = (ratio * 396) / 396;
        $('.claim-form input, #refresh img').css({
            'height'    : mobile ? `${ratio * 35}px` : `${ratio * 45}px`,
        });
        $('.claim-form input#captcha').css({
            'width'     : `calc(100% - ${ratio * (mobile ? 102 : 130)}px)`,
        });
        $('.claim-form .captcha-field').css({
            'height'    : `${ratio * 38}px`,
            'margin'    : `${ratio * 10}px 0 0`,
        });
        let text03_size = lang == 'id' ? 23 : (mobile ? 20 : 25);
        let text03b_size = lang == 'id' ? (mobile ? 29 : 30) : (mobile ? 32 : 39);
        $('.claim-form .text03').css({
            'font-size' : `${claimformratio * text03_size}px`,
        });
        $('.claim-form .text03b').css({
            'font-size' : `${claimformratio * text03b_size}px`,
        });
        let text04_size = (mobile ? (version == 'v5' ? 60 : 65) : (version == 'v5' ? 68 : 72));
        if (lang == 'zh') {
            text04_size = 40;//60
        } else if (lang == 'id') {
            text04_size = 40;//48
        }
        $('.claim-form .text04').css({
            'font-size'  : `${claimformratio * text04_size}px`,
            'height'     : lang == 'zh' || lang == 'th' || lang == 'hi'  ? `${claimformratio * 110}px` : '',//169
            'line-height': lang == 'zh' || lang == 'th' || lang == 'hi' || lang == 'bn' ? 1.1 : '',
        });
        $('.claim-form .text04 span').css({
            'font-size'  : `${claimformratio * text04_size * 1.4}px`,
            'height'     : lang == 'zh' || lang == 'th' || lang == 'hi'  ? `${claimformratio * 169}px` : '',
            'line-height': lang == 'zh' || lang == 'th' || lang == 'hi' || lang == 'bn' ? 1.1 : '',
        });
        $('.claim-form .btn-claim').css({
            'margin-top': `4%`,
            'width'     : `${ratio * (mobile ? 290 : 320)}px`,
            'font-size' : `${ratio * 15}px`,
            'height'    : `${ratio * (mobile ? 35 : 45)}px`,
        });
        $('.claim-form').show();
        $('.claim-form .text04-border').width($('.claim-form .text04').width());
        $('.claim-form .text04-border').height($('.claim-form .text04').height());
        $('.claim-form .text04-border').show();


        $('.mid-bg').css({
            'height'    : `${ratio * midbghei}px`,
            'margin'    : `${ratio * -2}px 0`,
            'padding'   : mobile ? `${ratio * 60}px ${ratio *  10}px 0` : `${ratio * 95}px ${ratio *  20}px 0`, //160
        });
        $('.mid-bg .content').css({
            'margin-top'    : mobile ? `${ratio * 80}px` : 0,
        });
        hratio = (ratio * midbghei) / midbghei;
        let text01_size = 18;
        if (country == 'id') {
            text01_size = 14;
        }
        $('.mid-bg .text01').css({
            'font-size' : mobile ? `${ratio * text01_size}px` : `${ratio * 32}px`,
        });
        let text02_size = 0;
        if (version == 'v5') {
            text02_size = lang == 'id' ? (mobile ? 33 : 96) : (mobile ? 47 : 96);
        } else {
            text02_size = lang == 'id' ? (mobile ? 56 : 96) : (mobile ? 47 : 120);
        }

        $('.mid-bg .text02').css({
            'font-size'  : mobile ? `${ratio * text02_size}px` : `${ratio * text02_size}px`,
            'height'     : lang == 'zh' || lang == 'th' ? `${hratio * (mobile ? 65 : 120)}px` : '',
            'line-height': lang == 'zh' || lang == 'th' ? 1.1 : 1.1,
        });
        $('.mid-bg .text03').css({
            'font-size' : mobile ? lang == 'id' ? `${ratio * 20}px` : `${ratio * 15}px` : lang == 'id' ? `${ratio * 25}px` : `${ratio * 32}px`,
        });
        $('.mid-bg .text04, .mid-bg .text05').css({
            'font-size' : mobile ? `${ratio * 10}px` : `${ratio * 25}px`,
        });
        let padding = mobile ?
            `${ratio * 14}px ${ratio * 29}px ${ratio * 20}px` :
            `${ratio * 33}px ${ratio * 71}px ${ratio * 46}px`;
        $('.mid-bg .phone-bg').css({
            'width'     : mobile ? `${ratio * 370}px` : `${ratio * 920}px`,
            'height'    : mobile ? `${ratio * 200}px` : `${ratio * 478}px`,
            'padding'   : padding,
        });
        $('.mid-bg .phone-screen').css({
            'height'    : mobile ? `${ratio * 157}px` : `${ratio * 376}px`,
        });
        $('.mid-bg #gamevideo').css({
            'width'     : mobile ? `${ratio * 294}px` : `${ratio * 710}px`,
        });
        $('.mid-bg .btn-claim').css({
            'width'     : `${ratio * (mobile ? 250 : 330)}px`,
            'font-size' : `${ratio * (mobile ? 14 : 16)}px`,
            'height'    : `${ratio * (mobile ? 40 : 50)}px`,
        });
        $('.mid-bg').show();
        $('.mid-bg .text02-border').width($('.mid-bg .text02').width());
        $('.mid-bg .text02-border').height($('.mid-bg .text02').height());
        $('.mid-bg .text02-border').show();


        $('.btm-bg').css({
            'height'    : `${ratio * btmbghei}px`,
            'margin'    : mobile ? `${ratio * -10 }px 0` : `${ratio * -380 }px 0 0`,
            'padding'   : mobile ? `${ratio * 70}px 0 0` : `${ratio *  420}px 0 0`,
        });
        $('.btm-bg .winners img').css({
            'width'     : mobile ? `${ratio * 255}px` : `${ratio * 420}px`,
        });
        $('.btm-bg .footer-text').css({
            'font-size' : mobile ? `${ratio * 16}px` : '',
        });
        let winnerfontsize   = 16;
        let winnerlineheight = 2.2;
        let winnerwrapper    = mobile ? 450: 450;
        let winnerwrapratio  = $('.btm-bg .winners img').width() / winnerwrapper;
            winnerwrapratio  = winnerwrapratio > 1.5 ? 1.4 : winnerwrapratio;
        if (country == 'th' && lang == 'en') {
            winnerfontsize   = mobile ? 11 : 13;
            winnerlineheight = lang == 'en' ? 3 : winnerlineheight;
        } else if (country == 'id' && (lang == 'en' || lang == 'id')) {
            winnerfontsize   = mobile ? 12 : 13;
            winnerlineheight = 3;
        } else if (country == 'my' && (lang == 'en' || lang == 'zh')) {
            winnerfontsize   = mobile ? 20 : 20;
            winnerlineheight = 1.9;
        }
        $('.btm-bg .winners .info').css({
            'height'     : `${winnerwrapratio * 38}px`,
            'font-size'  : `${winnerwrapratio * winnerfontsize}px`,
            'line-height': winnerlineheight,
        });
        $('.btm-bg .text01').css({
            'font-size' : mobile ? `${ratio * 15}px` : `${ratio * 28}px`,
        });
        $('.btm-bg .text02').css({
            'font-size' : mobile ? `${ratio * 13}px` : `${ratio * 28}px`,
        });
        $('.btm-bg').show();
    }, debouncets)).trigger('resize');

    checkscroll();
    $(window).on('scroll', function (e) {
        checkscroll();
        $('#scrollTop').click(function (e) {
            $('#scrollTop').addClass('active');
            $('html,body').stop(true).scrollTop(0);
        });
    });

    let isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        isMobile = true;
    }

    if (!isMobile) {
        $('#scrollTop').mouseenter(function() {
            $(this).css('background-color', '#2250FC');
        }).mouseleave(function() {
            $(this).css('background-color', '');
        });
    }
});

function debounce(func, delay) {
    let timeoutId;
    return function () {
        const context = this;
        const args    = arguments;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

function dynamicInputValidation2(e, template, country = "MY") {
    hideErrorV2(e);

    var inputElem = e.target;
    var successCheckMark = '<i class="fa fa-check text-success"></i>';
    var invalidBorderStyle = "2px solid " + DARK_RED;
    var errFontColor = [5, 8].includes(template) || [7].includes(template) || [9].includes(template) || [12].includes(template) ? RED : YELLOW;

    var name = inputElem.name;
    var value = inputElem.value;

    var errMsgContainer = $("#div__err-msg-" + name);
    errMsgContainer.removeClass("d-none");
    errMsgContainer.addClass("d-flex");

    // ##Template styling
    switch (template) {
        case 2:
        case 5:
        case 9:
            errMsgContainer.css("width", "90%");
            errMsgContainer.css("margin", "10px auto 0");
            break;
        case 3:
            errMsgContainer.css('margin', '');
            break;
        case 7:
            errMsgContainer.css("width", "77%");
            errMsgContainer.css("margin", "0 auto");
            break;
        case 8:
            errMsgContainer.css("width", "100%");
            errMsgContainer.css("margin", "0 auto");
            break;
    }

    // error messages
    switch (name) {
        case "username":
            var minmaxPassed = minmax.test(value);
            var noSpecialCharPassed = alphanum.test(value);
            var alphanumOrAlphaPassed = alphaNumOrAlpha.test(value);

            errMsgContainer.find("p").css("color", errFontColor);

            var usernameDuplicateMsgContainer = $("#div__err-msg-username-duplicate");
            usernameDuplicateMsgContainer.removeClass("d-flex");
            usernameDuplicateMsgContainer.addClass("d-none");
            // turn off the username duplicate flag
            $("#username_duplicate").val(0);
            
            // passed every validations
            if (validateUsernameInput(value)) {
                errMsgContainer.removeClass("d-flex");
                errMsgContainer.addClass("d-none");
                if (check_username == 1) {
                    if (window.matchMedia('screen and (max-width: 768px)').matches) {
                        if (window.matchMedia('screen and (min-width: 600px)').matches) {
                            $(".mid-bg .container-fluid").css("margin-top", '-=' + '3vh');
                        } else {
                            $(".mid-bg .container-fluid").css("margin-top", '-=' + '5vh');
                        }
                    }
                }
                check_username = 0;
                return;
            }

            if (check_username == 0) {
                if (window.matchMedia('screen and (max-width: 768px)').matches) {
                    if (window.matchMedia('screen and (min-width: 600px)').matches) {
                        $(".mid-bg .container-fluid").css("margin-top", '+=' + '3vh');
                    } else {
                        $(".mid-bg .container-fluid").css("margin-top", '+=' + '5vh');
                    }
                }
            }

            inputElem.style.border = invalidBorderStyle;

            check_username = 1;
            if (minmaxPassed) {
                errMsgContainer
                    .find(".p__username-minmax")
                    .append(successCheckMark)
                    .css("color", "greenyellow");
            }

            if (noSpecialCharPassed) {
                errMsgContainer
                    .find(".p__username-special")
                    .append(successCheckMark)
                    .css("color", "greenyellow");
            }

            if (alphanumOrAlphaPassed) {
                errMsgContainer
                    .find(".p__username-alphanum-or-alpha")
                    .append(successCheckMark)
                    .css("color", "greenyellow");
            }

            break;
        case "mobile_number":
            var mobileRegex = mobileRegexMap[country.toUpperCase()];
            var mobileRegexPassed = mobileRegex.test(value);
            var errMsgElem = errMsgContainer.find(".p__mobile_number-invalid");

            if (validateMobileNumberInput(value)) {
                errMsgContainer.removeClass("d-flex");
                errMsgContainer.addClass("d-none");
                errMsgElem.removeClass("d-flex");
                if (check_mobile == 1) {
                    $(".mid-bg .container-fluid").css("margin-top", '-=' + '2vh');
                }
                check_mobile = 0;
                return;
            }

            inputElem.style.border = invalidBorderStyle;

            if (!mobileRegexPassed) {
                errMsgElem.addClass("d-flex");
                errMsgElem.css("color", errFontColor);
                if (check_mobile == 0) {
                    if (window.matchMedia('screen and (max-width: 768px)').matches) {
                        $(".mid-bg .container-fluid").css("margin-top", '+=' + '1vh');
                    }
                }
                check_mobile = 1;
            }
            break;
        case "fullname":
                var fullnamePatternPassed = fullnamePattern.test(value);
                var errMsgElem = errMsgContainer.find(".p__fullname-invalid");
    
                if (validateFullnameInput(value)) {
                    errMsgContainer.removeClass("d-flex");
                    errMsgContainer.addClass("d-none");
                    errMsgElem.removeClass("d-flex");
                    if (check_fullname == 1) {
                        $(".mid-bg .container-fluid").css("margin-top", '-=' + '2vh');
                    }
                    check_fullname = 0;
                    return;
                }
    
                inputElem.style.border = invalidBorderStyle;
    
                if (!fullnamePatternPassed) {
                    errMsgElem.addClass("d-flex");
                    errMsgElem.css("color", errFontColor);
                    if (check_fullname == 0) {
                        if (window.matchMedia('screen and (max-width: 768px)').matches) {
                            $(".mid-bg .container-fluid").css("margin-top", '+=' + '1vh');
                        }
                    }
                    check_fullname = 1;
                }
            break;
        case "password":
            var minSixPassed = minSix.test(value);
            var confirmationMatched =
                $('[name="password_confirmation"]').val() == value;

            // show/hide not match error on password confirmation
            if (confirmationMatched) {
                $('[name="password_confirmation"]').css("border", "");
                $(".p__password_confirmation-not-matched")
                    .removeClass("d-flex")
                    .addClass("d-none");
            } else {
                $('[name="password_confirmation"]').css(
                    "border",
                    invalidBorderStyle
                );
                $(".p__password_confirmation-not-matched")
                    .removeClass("d-none")
                    .addClass("d-flex");
                if (check_password == 0) {
                    if (window.matchMedia('screen and (max-width: 768px)').matches) {
                        $(".mid-bg .container-fluid").css("margin-top", '+=' + '1vh');
                    }
                }
                check_password = 1;
            }

            if (validatePasswordInput(value)) {
                errMsgContainer.removeClass("d-flex");
                errMsgContainer.addClass("d-none");
                if (check_password == 1) {
                    $(".mid-bg .container-fluid").css("margin-top", '-=' + '1vh');
                }
                check_password = 0;
                return;
            }

            inputElem.style.border = invalidBorderStyle;

            if (!minSixPassed) {
                var errMsgElem = errMsgContainer.find(".p__password-min");
                errMsgElem.addClass("d-flex");
                errMsgElem.css("color", errFontColor);
            }

            break;

        case "password_confirmation":
            var password = $('[name="password"]').val();
            var passwordMatched = value == password;

            if (validatePasswordConfirmationIInput(value)) {
                errMsgContainer.removeClass("d-flex");
                errMsgContainer.addClass("d-none");
                if (check_password_confirmation == 1) {
                    $(".mid-bg .container-fluid").css("margin-top", '-=' + '1vh');
                }
                check_password_confirmation = 0;
                return;
            }

            inputElem.style.border = invalidBorderStyle;

            if (!passwordMatched) {
                var errMsgElem = errMsgContainer.find(
                    ".p__password_confirmation-not-matched"
                );
                errMsgElem.addClass("d-flex");
                errMsgElem.css("color", errFontColor);
                if (check_password_confirmation == 0) {
                    $(".mid-bg .container-fluid").css("margin-top", '+=' + '1vh');
                }
                check_password_confirmation = 1;
            }

            break;
    }
}

function checkscroll() {
    if ($(window).scrollTop() > 300) {
        $('#scrollTop').show();
    } else {
        $('#scrollTop').hide();
        $('#scrollTop').removeClass('active');
    }
}
