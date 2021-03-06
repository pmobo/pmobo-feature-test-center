"use strict";

//Solved the access: https://stackoverflow.com/questions/31321182/request-token-with-jquery-from-web-api

Pmobo.endpoints.Account = {};
Pmobo.endpoints.Account.Register = "/api/Account/Register";
Pmobo.endpoints.Account.TokenRequest = "/token";

Pmobo.endpoints.ProjectOnlineEPT = "/api/ProjectOnline/EPT";
Pmobo.endpoints.ProjectOnlineProjects = "/api/ProjectOnline/Projects";
Pmobo.endpoints.ProjectOnlineTasks = "/api/ProjectOnline/Tasks";

Pmobo.Account.ProjectOnline = 
{
    "userName": "",
    "password": "",
    "pwaPath": ""
};



Pmobo.Account.Register = function (userInfo)
{

    var body = {
        "userName": userInfo.userName,
        "password": userInfo.password,
        "confirmPassword": userInfo.password,
        "email": userInfo.email
    };
    $.ajax({        
        url: Pmobo.endpoints.baseUrl + Pmobo.endpoints.Account.Register,
        type: 'POST',
        //dataType: 'json',
        contentType: 'application/json',
        data: body, /* right */
        success: function(result) {
            console.log("REGISTRADO! ", result);
            $('#resultRegisterRequestBlock').show();
            document.getElementById('resultRegisterStatus').innerText = "SUCCESS";
        },
        error: function(result) {            
            console.log("ERROR", result);
            document.getElementById('resultRegisterStatus').innerText = "FAIL";
        }
    });
};


Pmobo.Account.Authenticate = function(credentials)
{
    var body = {
        grant_type: 'password',                
        username: credentials.name,
        password: credentials.password
    };

    $.ajax({        
        url: Pmobo.endpoints.baseUrl + Pmobo.endpoints.Account.TokenRequest,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',        
        data: body, /* right */
        complete: function(result) {
            //called when complete            
        },

        success: function(result) {            
            console.log("OK!", result);
            sessionStorage.setItem('accessToken', result.access_token);
            Pmobo.Account.Token.AccessToken = result.access_token;
            Pmobo.Account.Token.Expires = result.expires_in;
            Pmobo.Account.Token.TokenType = result.token_type;
            
            //setup visual
            document.getElementById('resultTokenAccess').innerText = result.access_token;
            document.getElementById('resultTokenExpires').innerText = result.expires_in;
            document.getElementById('resultTokenType').innerText = result.token_type;            
            $("#resultTokenRequestBlock").show();//remove classe que oculta resultado
            document.getElementById('resultTokenStatus').innerText = "SUCCESS";
        },

        error: function(result) {            
            console.log("ERROR", result);
            document.getElementById('resultTokenStatus').innerText = "FAIL";
        },
    });
};


Pmobo.Account.GetUserInfo = function(token)
{
    //var token = sessionStorage.getItem(tokenKey);
    var headers = {};
    if (token) {
        headers.Authorization = 'Bearer ' + token;
    }

    $.ajax({
        type: 'GET',
        url: Pmobo.endpoints.baseUrl + '/api/users/',
        headers: headers,
        success: function(result) {
            console.log("SUCCESS", result);
            $('#resultUserInfoBlock').show();
            document.getElementById('resultUserInfoName').innerText = result;
            document.getElementById('resultUserInfoStatus').innerText = "SUCCESS";

        },
        error: function(result) {        
        console.log("ERROR", result);
        document.getElementById('resultUserInfoStatus').innerText = "FAIL";
        }
    });
}
    