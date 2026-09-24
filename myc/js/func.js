//## Global Constants/Var
var DARK_RED = "#9e0000";
var RED = "red";
var YELLOW = "#FFFF00";

var check_username = 0;
var check_password = 0;
var check_password_confirmation = 0;
var check_mobile = 0;
var check_fullname = 0;

// username regex
var alphanum = /^[a-zA-Z0-9]+$/; // alphanumeric  (username)
var minmax = /^.{6,16}$/; // min 6 max 16  (username)
var alphaNumOrAlpha = /^(?![\d ]*$)[a-zA-Z0-9 ]+$/; // match (number & letters) OR letters only (username)

// mobile regex
var mobileRegexMap = {
    MY: /^(0|60|0060|\+60)1[0-9]{8,9}$/,
    TH: /^(\+66|66)(\d{3,4}?){2}\d{3,4}?$|^(0[689]|[689])(\d{3,4}?){1}\d{3,4}?$/,
    SG: /^(65[8-9]|8|9)([0-9][0-9]{6})+$/,
    ID: /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/,
    IN: /^(^\+91[6-9]|91[6-9]|[6-9])\d{9,10}$/,
    BD: /^(\+88|88)01(\d{2}-?)\d{3}-?\d{4}$/,
};

// fullname regex
var fullnamePattern = /^[^0-9\s\W][^\d\@\#\&\*\(\)\_\+\=\%\$\!\-\^\,\.\<\>\?\/\;\:\"\'\{\}\[\]\|\~\`/]*$/;

// password regex
var minSix = /^.{6,}$/;
//===============================

// init data layer for google analytic
window.dataLayer = window.dataLayer || [];

function showBackendErrors(messages, template) {
    // "messages" in the format of standard Laravel validation error messages
    Object.keys(messages).forEach(function (name) {
        var inputElem = $('[name="' + name + '"]');
        var errMsgContainer = $("#div__err-msg-" + name);

        errMsgContainer.removeClass("d-none");
        errMsgContainer.addClass("d-block");
        inputElem.removeClass("mb-2");

        var errMessages = messages[name];
        for (let i = 0; i < errMessages.length; i++) {
            var errMessageElem = $(
                '<p class="backend-error-msg mb-0" style="color:#FFFF00; text-align: left; font-size:13px;">' +
                errMessages[i] +
                "</p>"
            );

            // ##Template styling
            // switch (template) {
            //     case 1:
            //     case 3:
            //     case "3v2":
            //         errMessageElem.addClass("my-0");
            //         errMessageElem.css("color", "red");
            //         break;
            //     case 2:
            //     case 5:
            //         if (i == errMessages.length - 1) {
            //             errMessageElem.addClass("mt-2");
            //         }
            //         break;
            //     case 4:
            //     case "4v2":
            //         errMessageElem.addClass("m-0");
            //         break;
            //     case 6:
            //         errMessageElem.css("position", "relative");
            //         errMessageElem.css("width", "65%");
            //         $(".claim-section").css("margin-top", "25%");
            //         break;
            // }

            // ##General styling
            // let only bottommost error message has spacing/margin
            // if (i == 0) {
            //     errMessageElem.addClass("mb-2");
            // }

            errMsgContainer.append(errMessageElem);
        }
    });
}

function hideError() {
    $(".is-invalid").each(function () {
        $(this).removeClass("is-invalid");
        $(this).addClass("mb-2");
    });
    document.querySelectorAll(".error_msg").forEach((e) => e.remove());

    //##special case
    // remove .claim-section margin-top set during validation error in index6.blade.php
    $(".claim-section").css("margin-top", "");
}

function hideErrorV2(e) {
    if (e.target.name == 'username') {
        document.querySelectorAll(".fa-check").forEach(e => e.remove()); // clear check on username input
    }

    // clear all backend error messages
    document.querySelectorAll('.backend-error-msg').forEach(e => e.remove());

    if (e && e.target) {
        e.target.style.border = "";
    } else {
        document
            .querySelectorAll("input")
            .forEach((e) => (e.style.border = ""));
    }
}

function dynamicInputValidation(e, template, country = "MY") {
    hideErrorV2(e);

    var inputElem = e.target;
    var successCheckMark = '<i class="fa fa-check text-success"></i>';
    var invalidBorderStyle = "2px solid " + DARK_RED;
    var errFontColor = [5, 8, 17].includes(template) || [7].includes(template) || [9].includes(template) || [12].includes(template) ? RED : YELLOW;

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
        case 17:
            errMsgContainer.css("width", "85%");
            errMsgContainer.css("margin", "5px auto 0");
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
                    .css("color", "white");
            }

            if (noSpecialCharPassed) {
                errMsgContainer
                    .find(".p__username-special")
                    .append(successCheckMark)
                    .css("color", "white");
            }

            if (alphanumOrAlphaPassed) {
                errMsgContainer
                    .find(".p__username-alphanum-or-alpha")
                    .append(successCheckMark)
                    .css("color", "white");
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

function areAllInputValidationsPassed() {
    var username = $('[name="username"]').val();
    var mobile_number = $('[name="mobile_number"]').val();
    //var fullname = $('[name="fullname"]').val();
    var password = $('[name="password"]').val();
    var password_confirmation = $('[name="password_confirmation"]').val();

    return (
        validateUsernameInput(username) &&
        validateMobileNumberInput(mobile_number) &&
        //validateFullnameInput(fullname) &&
        validatePasswordInput(password) &&
        validatePasswordConfirmationIInput(password_confirmation)
    );
}

function validateUsernameInput(value) {
    return (
        value &&
        [
            minmax.test(value),
            alphanum.test(value),
            alphaNumOrAlpha.test(value),
        ].every((test) => test)
    );
}

function validateMobileNumberInput(value, country) {
    var country = $('[name="country"]').val();
    var mobileRegex = mobileRegexMap[country.toUpperCase()];
    var mobileRegexPassed = mobileRegex.test(value);

    return value && mobileRegexPassed;
}

function validateFullnameInput(value) {
    return value && fullnamePattern.test(value);
}

function validatePasswordInput(value) {
    return value && minSix.test(value);
}

function validatePasswordConfirmationIInput(value) {
    var password = $('[name="password"]').val();
    var passwordMatched = value == password;

    return value && passwordMatched;
}

function validateInput(template) {
    hideError();
    var pass = true;
    var username = $('[name="username"]').val();
    var mobile_number = $('[name="mobile_number"]').val();
    var password = $('[name="password"]').val();
    var password_confirmation = $('[name="password_confirmation"]').val();
    var captcha = $('[name="captcha"]').val();
    var country = $('[name="country"]').val();
    var bank_version = $('[name="bank_version"]').val();
    var campaign = $('[name="campaign"]').val();
    var username_duplicate = $('[name="username_duplicate"]').val();

    if (!areAllInputValidationsPassed()) {
        pass = false;
        return pass;
    }

    if (username_duplicate != 0) {
        pass = false;
        return pass;
    }

    if (
        $("#section_2:visible").length != 0 &&
        bank_version == 1 &&
        country == "ID"
    ) {
        return pass;
    }

    var lang = $('[name="lang"]').val();
    pass = false;

    // validate input and eventually validate phone number with CMSAPI
    $.ajax({
        type: "POST",
        url: "mobileregex",
        async: false,
        data: {
            _token: $('meta[name="csrf-token"]').attr("content"),
            lang: lang,
            username: username,
            password: password,
            password_confirmation: password_confirmation,
            captcha: captcha,
            country_code: country,
            mobile_number: mobile_number,
            bank: bank_version,
            type: "default",
            campaign: campaign,
        },
        success: function (response) {
            if (response["status"] != 0) {
                $('[name="mobile_number"]').val(response.phone_number);
                pass = true;
            } else {
                messages = response["messages"]["messages"]
                    ? response["messages"]["messages"]
                    : response["messages"].toString().split(",");
                messages = { mobile_number: messages };
                showBackendErrors(messages, template);
            }
        },
        error: function (xhr) {
            var messages = xhr.responseJSON.messages.messages;
            showBackendErrors(messages, template);
            pass = false;
        },
    });

    return pass;
}

function validateUsername(e, template) {
    hideErrorV2(e);
    var errFontColor = [5, 8, 17].includes(template) || [7].includes(template) || [9].includes(template) || [12].includes(template) ? RED : YELLOW;
    var pass = true;
    var username = $('[name="username"]').val();
    var response = $('[name="recaptcha"]').val();

    if (!validateUsernameInput(username)) {
        pass = false;
        return pass;
    }

    var lang = $('[name="lang"]').val();
    pass = false;

    // validate input and eventually validate phone number with CMSAPI
    $.ajax({
        type: "POST",
        url: "validateUsername",
        async: false,
        data: {
            _token: $('meta[name="csrf-token"]').attr("content"),
            lang: lang,
            username: username,
            response: response,
            landing: 1,
        },
        success: function (response) {
            var errMsgContainer = $("#div__err-msg-username-duplicate");
            // Initialize default values
            let jwtToken = null;
            let recaptchaScore = 0;

            // Safely access nested properties using optional chaining
            jwtToken = response.data?.rows?.jwt || null;
            recaptchaScore = response.data?.rows?.recaptcha_score || 0;

            $("#jwt").val(jwtToken);
            $("#recaptcha_score").val(recaptchaScore);
            // hide recpatcha
            $('input[name=captcha]').parent().hide();
            // if (recaptchaScore < 0.5 || recaptchaScore == null || recaptchaScore == undefined) {
            //     // Show the captcha container
            //     $(".captcha-container").show();
            // } else {
            //     // Hide the captcha container
            //     $(".captcha-container").hide();
            // }
            if (response.data?.rows?.error_type == 1) {
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
                    case 17:
                        errMsgContainer.css("width", "85%");
                        errMsgContainer.css("margin", "5px auto 0");
                        break;

                }
                errMsgContainer.find("p").css("color", errFontColor);
                errMsgContainer.removeClass("d-none");
                errMsgContainer.addClass("d-flex");

                $("#username_duplicate").val(1);
            }
        },
        error: function (xhr) {
            pass = false;
        },
    });

    return pass;
}

function setGtag(code) {
    const script = document.createElement('script');
    script.async = true;
    script.src   = 'https://www.googletagmanager.com/gtag/js?id=' + code;

    document.head.prepend(script);

    gtag('js', new Date());
    gtag('config', code);
}

function gtag() {
    dataLayer.push(arguments);
}

function setUuid(uuid) {
    sessionStorage.setItem('uuid', uuid);

    let lang     = $('[name="lang"]').val();
    let country  = $('[name="country"]').val();
    let campaign = $('[name="campaign"]').val();

    $.ajaxSetup({
        data      : {
            lang    : lang,
            country : country,
            campaign: campaign,
        },
        beforeSend: function(xhr) {
           xhr.setRequestHeader('X-Session-ID', uuid);
        }
    });
}
