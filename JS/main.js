document.addEventListener("DOMContentLoaded", function () {
    let genderNav = document.getElementById("genderNav");
    let userNav = document.getElementById("userNav");
    let sendUsernameBtn = document.getElementById("sendUsername");
    let uploadBtn = document.getElementById("upload");
    let loginBtn = document.getElementById("login");
    let loadingAnimate = document.getElementById("loadingAnimate");
    let doneArea = document.getElementById("doneArea");
    let textContent = document.getElementById("textContent");
    let userNameInput = document.getElementById("userName");
    sendUsernameBtn.addEventListener("click", function () {
        let genderRadio = document.querySelector(
            "input[type=radio][name=gender]:checked"
        );
        genderNav.textContent = genderRadio ? genderRadio.value : "可頌";
        userNav.textContent = userNameInput.value || "訪客";
        genderNav.style.display = "block";
        userNav.style.display = "block";
        loginBtn.style.display = "none";
    });
    uploadBtn.addEventListener("click", function () {
        let username = userNav.textContent;
        if (username === "") {
            alert("您尚未登入");
        } else {
            let currentTime = new Date();
            let formattedTime = currentTime.toLocaleString();
            loadingAnimate.style.display = "block";
            uploadBtn.style.pointerEvents = "none";

            let message = document.createElement("div");
            message.classList.add("copyArea");
            message.id = "showMessage";
            message.innerHTML = `
            <div class="row rounded-5 p-4">
                <div class="col d-flex bg-secondary rounded-top-4">
                    <div class="col-1 text-warning" id="getUsergender">男</div>
                    <div class="col-3 text-warning text-truncate" id="getUsername">名字</div>
                    <div class="col-1"></div>
                    <div class="col-5 text-warning ml-auto" id="getTime">2023/11/11 下午17:26:27</div>
                    <button class="btn btn-danger btn-sm d-flex" id="deleteMessage">刪除</button>
                </div>
                <div class="parent-element text-wrap bg-white p-3 rounded-1">
                    <div class="w-auto d-inline-block parent-element" id="copyText"></div>
                </div>
            </div>
        `;
            message.querySelector("#getUsergender").textContent =genderNav.textContent;
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
