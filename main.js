$(document).ready(function () {
    var genderNav = document.getElementById('genderNav');
    var userNav = document.getElementById('userNav');
    function addNav() {
        $("#genderNav").text($("input[type=radio][name=gender]:checked").val());
        $("#userNav").text($("#userName").val());
        if ($("input[type=radio][name=gender]:checked").val() == null) {
            $("#genderNav").text('可頌');
        }
        if ($("#userName").val() == "") {
            $("#userNav").text('guest');
        }
        genderNav.style.display = '';
        userNav.style.display = '';
    }
    $('#sendUsername').click(function () {
        addNav();
        document.getElementById('login').style.display = 'none';
    })
    $("#upload").click(function () {
        var username = $("#userNav").text()
        if (username== "") {
            alert("您尚未登入")
        } else {
            const currentTime = new Date();
            const formattedTime = currentTime.toLocaleString();
            $("#loadingAnimate").css({ "display": "block" });
            $("#upload").hide(0).delay(500).show(0);
            let message = $(
                '<div class="copyArea" id="showMessage">' +
                '<div class="copyNav">' +
                '<div class="copyGender" id="getUsergender">男</div>' +
                '<div class="copyUsername" id="getUsername">名字</div>' +
                '<div class="copyChangeBackground" id="getTime"></div>' +
                '<div class="copyDelete"> <button class="deleteBtn" id="deleteMessage">刪除</button></div>' +
                '</div>' +
                '<div class="copytestareaContainer">' +
                '<div class="copyeditTextBoard" id="copyText">失敗</div>' +
                '</div>' +
                '</div>'
            );
            $(message).find("#getTime").text(formattedTime);
            const gender = $("#genderNav").text();
            const username = $("#userNav").text();
            const text = $("#textContent").val();
            $(message).find("#getUsergender").text(gender);
            $(message).find("#getUsername").text(username);
            $(message).find("#copyText").text(text);
            message.find("#deleteMessage").click(function () {
                $(this).closest(".copyArea").fadeOut(500, function () {
                    $(this).remove();
                });
            });
            setTimeout(() => {
                $("#loadingAnimate").css({ "display": "none" });
                $(".doneArea").append(message);
            }, 500);
            $("#textContent").val("");
        }
 });       
});


