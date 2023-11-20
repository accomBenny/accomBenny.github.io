function addData() {
    $.ajax({
        type: "GET",
        url: "data.json",
        dataType: "json",
        success: function (data) {
            const temp = $("#username").val();
            const tempData = data[temp - 1];
            var soloCard = `
                            <div class="card border-5 border-dark  bg-secondary w-25  bg-opacity-25 text-light" >
                                <div class="card-body style="width: 37rem; height: 37rem;">
                                    <div >
                                        <img class="card-img-top  overflow-hidden d-flex justify-content-center" src="${tempData.image}" alt="Image"
                                        style="width: 23rem; height: 23rem;">
                                    </div>
                                    <h2 class="card-title">${tempData.name}</h2>
                                    <h4 class="card-text">年齡: ${
                                        tempData.age === null
                                            ? "未知"
                                            : tempData.age
                                    }</h4>
                                    <h4 class="d-flex">出生地: ${
                                        tempData.address.country
                                    }</h4>
                                    <button class="btn btn-danger" id="deleteSoloCard" >移除</button>
                                </div>
                            </div>
                        `;
            
            $("#container").append(soloCard);
            $("#username").val('');
        },
        error: function () {
            console.error("發生錯誤");
        },
    });
}



$(document).ready(function () {
    $("#container").on("click", "#deleteSoloCard", function () {
                $(this).closest(".card").remove();
    });
    
    $("#getData").click(function () {
        $.ajax({
            type: "GET",
            url: "data.json",
            dataType: "json",
            success: function (data) {
                data.forEach(function (element) {
                    const card = `
                        <div class="card border-5 border-dark  bg-secondary w-25  bg-opacity-25 text-light">
                            <div class="card-body style="width: 37rem; height: 37rem;">
                                <div >
                                    <img class="card-img-top  overflow-hidden d-flex justify-content-center" src="${element.image}" alt="Image"
                                    style="width: 23rem; height: 23rem;">
                                </div>
                                
                                <h2 class="card-title">${element.name}</h2>
                                <h4 class="card-text">年齡: ${
                                    element.age === null ? "未知" : element.age
                                }</h4>
                                <h4>出生地: ${element.address.country}</h4>
                                <button class="btn btn-danger" id="deleteSoloCard" >移除</button>
                            </div>
                        </div>
                    `;
                    $("#container").append(card);
                });
            },
            error: function () {
                console.error("發生錯誤");
            },
        });
    });
});
