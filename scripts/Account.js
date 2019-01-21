"use strict";

//Solved the access: https://stackoverflow.com/questions/31321182/request-token-with-jquery-from-web-api

Pmobo.endpoints.Account = {};
Pmobo.endpoints.Account.Register = "/api/Account/Register";
Pmobo.endpoints.Account.TokenRequest = "/token";



Pmobo.Account.Authenticate = function(credentials)
{
    var body = {
        grant_type: 'password',                
        username: credentials.name,
        password: credentials.password
    };

    $.ajax({
        //url: 'https://pmobo2.azurewebsites.net/token',
        url: Pmobo.endpoints.baseUrl + Pmobo.endpoints.Account.TokenRequest,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',        
        data: body, /* right */
        complete: function(result) {
            //called when complete
            alert(result);
        },

        success: function(result) {
            //called when successful
            console.log("OK!", result);
            sessionStorage.setItem('accessToken', result.access_token);
            Pmobo.Account.Token.AccessToken = result.access_token;
            Pmobo.Account.Token.Expires = result.expires_in;
            Pmobo.Account.Token.TokenType = result.token_type;
            
            //setup visual
            document.getElementById('resultTokenAccess').innerText = result.access_token;
            document.getElementById('resultTokenExpires').innerText = result.expires_in;
            document.getElementById('resultTokenType').innerText = result.token_type;
            //remove classe que oculta resultado
            $("#resultTokenRequestBlock").show();

        },

        error: function(result) {
            //called when there is an error
            console.log("ERROR", result);
        },
    });

}
