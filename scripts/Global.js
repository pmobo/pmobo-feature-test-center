"use strict";


var Pmobo = {};
Pmobo.endpoints = {};
Pmobo.User = {};
Pmobo.Account = {};
Pmobo.Account.Token = {};

Pmobo.Init = function () 
{
    Pmobo.endpoints.baseUrl = "https://pmobo2.azurewebsites.net";
    Pmobo.loginData = {
        grant_type: 'password',
        username: "gsoster",
        password: "123456"
    };
    console.log("Pmobo.Init() executado");
}

Pmobo.Init();