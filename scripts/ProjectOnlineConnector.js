"use strict";

var ProjectOnlineConnector = {};

ProjectOnlineConnector.GetEPTs = function()
{
    var dataAPI;
    var urlParams = "userName=" + Pmobo.Account.ProjectOnline.userName + "&";
    urlParams = urlParams + "password=" + Pmobo.Account.ProjectOnline.password + "&";
    urlParams = urlParams + "pwaPath=" + Pmobo.Account.ProjectOnline.pwaPath;
    var url = Pmobo.endpoints.baseUrl + Pmobo.endpoints.ProjectOnlineEPT + "?" + urlParams;
    console.log("projectGetEPTs_click URL: ", url);
    $.get(url, function (data) {
        console.log("RETORNO DA API DO PMOBO", data);
        //dataAPI = JSON.parse(data);
        dataAPI = data;
        $("#EPTsResult").append("<P> Total number of EPTs loaded FROM API: " + data.length);
        for (var i = 0; i < dataAPI.length; i++) {
            var Name = dataAPI[i].name;
            $("#EPTsResult").append("<P>EPT : " + Name);
        }
        alert("Get EPTs was performed.");
    });
}


ProjectOnlineConnector.GetProjects = function()
{
    var dataAPI;
    var urlParams = "userName=" + Pmobo.Account.ProjectOnline.userName + "&";
    urlParams = urlParams + "password=" + Pmobo.Account.ProjectOnline.password + "&";
    urlParams = urlParams + "pwaPath=" + Pmobo.Account.ProjectOnline.pwaPath;
    var url = Pmobo.endpoints.baseUrl + Pmobo.endpoints.ProjectOnlineProjects + "?" + urlParams;
    console.log("projectGetProjects URL: ", url);

    $.get(url, function (data) {
        console.log("RETORNO DA API DO PMOBO", data);
        //dataAPI = JSON.parse(data);
        dataAPI = data;
        $("#ProjectOnline_projectsResult").append("<P> Total number of Projects loaded FROM API: " + data.length);
        for (var i = 0; i < dataAPI.length; i++) {
            var Name = dataAPI[i].name;
            $("#ProjectOnline_projectsResult").append("<P>ProjectName : " + Name);
        }
        alert("Get Projects was performed.");
    });
}

ProjectOnlineConnector.GetTasks = function()
{
    var dataAPI;
    var urlParams = "userName=" + Pmobo.Account.ProjectOnline.userName + "&";
    urlParams = urlParams + "password=" + Pmobo.Account.ProjectOnline.password + "&";
    urlParams = urlParams + "pwaPath=" + Pmobo.Account.ProjectOnline.pwaPath;
    var url = Pmobo.endpoints.baseUrl + Pmobo.endpoints.ProjectOnlineTasks  + "?" + urlParams;
    console.log("projectGetTasks URL: ", url);

    $.get(url, function (data) {
        console.log("RETORNO DA API DO PMOBO", data);
        //dataAPI = JSON.parse(data);
        dataAPI = data;
        $("#ProjectOnline_tasksResult").append("<P> Total number of Tasks loaded FROM API: " + data.length);
        for (var i = 0; i < dataAPI.length; i++) {
            var Name = dataAPI[i].name;
            $("#ProjectOnline_tasksResult").append("<P>Task : " + Name);
        }
        alert("Get Tasks was performed.");
    });
}