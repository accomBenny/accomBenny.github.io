document.addEventListener("DOMContentLoaded", function () {
    var genderNav = document.getElementById("genderNav");
    var userNav = document.getElementById("userNav");
    var sendUsernameBtn = document.getElementById("sendUsername");
    var uploadBtn = document.getElementById("upload");
    var loginBtn = document.getElementById("login");
    var loadingAnimate = document.getElementById("loadingAnimate");
    var doneArea = document.getElementById("doneArea");
    var textContent = document.getElementById("textContent");
    var userNameInput = document.getElementById("userName");
    sendUsernameBtn.addEventListener("click", function () {
        var genderRadio = document.querySelector(
            "input[type=radio][name=gender]:checked"
        );
        genderNav.textContent = genderRadio ? genderRadio.value : "可頌";
        userNav.textContent = userNameInput.value || "訪客";

        genderNav.style.display = "block";
        userNav.style.display = "block";
        loginBtn.style.display = "none";
    });

    uploadBtn.addEventListener("click", function () {
        var username = userNav.textContent;

        if (username === "") {
            alert("您尚未登入");
        } else {
            var currentTime = new Date();
            var formattedTime = currentTime.toLocaleString();
            loadingAnimate.style.display = "block";
            // uploadBtn.style.display = "none";
            uploadBtn.style.pointerEvents = "none";

            var message = document.createElement("div");
            message.classList.add("copyArea");
            message.id = "showMessage";
            message.innerHTML = `
            <div class="row rounded-5 p-4">
                <div class="col d-flex bg-secondary rounded-top-4">
                    <div class="col-1 text-warning" id="getUsergender">男</div>
                    <div class="col-1 text-warning" id="getUsername">名字</div>
                    <div class="col-3"></div>
                    <div class="col-5 text-warning ml-auto" id="getTime">2023/11/11 下午17:26:27</div>
                    <button class="btn btn-danger btn-sm d-flex" id="deleteMessage">刪除</button>
                </div>
                <div class="bg-white p-3 rounded-1">
                    <div class="w-auto d-inline-block" id="copyText"></div>
                </div>
            </div>
        `;
            message.querySelector("#getUsergender").textContent =
                genderNav.textContent;
            message.querySelector("#getUsername").textContent = username;
            message.querySelector("#copyText").textContent = textContent.value;
            message.querySelector("#getTime").textContent = formattedTime;
            message
                .querySelector("#deleteMessage")
                .addEventListener("click", function () {
                    message.parentNode.removeChild(message);
                });

            setTimeout(function () {
                loadingAnimate.style.display = "none";
                doneArea.appendChild(message);
                uploadBtn.style.display = "block";
                uploadBtn.style.pointerEvents = "auto";
            }, 500);

            textContent.value = "";
        }
    });
});
