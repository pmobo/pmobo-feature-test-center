"use strict";

Pmobo.endpoints.Account = {};
Pmobo.endpoints.Account.Register = "/api/Account/Register";
Pmobo.endpoints.Account.TokenRequest = "/token";


Pmobo.Account.GetToken = function (loginData, url)
{
    $.ajax({
        type: 'POST',
        crossDomain: true,
        dataType: 'jsonp',
        url: url,
        headers: { "Accept": "application/json" },
        //contentType: "application/x-www-form-url; charset=urf-8",
        'Content-Type': 'application/x-www-form-urlencoded',
        data: loginData
    }).done(function (data) {
        console.log(data);
        Pmobo.User = data;
        // Cache the access token in session storage.
        sessionStorage.setItem(tokenKey, data.access_token);
    }).fail(function (error) {alert("Falha");});
}
