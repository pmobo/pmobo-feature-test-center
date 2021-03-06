"use strict";
/**
 * Page sends KEY to Trello and requests authorization to user
 * Trello Sends Token to Page
 * Page stores Token and use it plus KEY to make each request of information
 * 
 */
var TrelloConnector = {};
TrelloConnector.APIKEY = "e7812951d8bd4b40db1bebe14574e86c";
TrelloConnector.UserToken = "";
TrelloConnector.Boards;

TrelloConnector.GetAllBoards = function()
{
    var url = "https://api.trello.com/1/members/me/boards?key=" + TrelloConnector.APIKEY + "&token=" + TrelloConnector.UserToken;


    $.get(url, function( data ) {
        TrelloConnector.Boards = data;
        $("#boardsResult").append("<P> Total number of boards loaded: " + data.length);
        for(var i = 0; i < data.length; i++)
        {
            var boardName = data[i].name;
            $("#boardsResult").append("<P>Board Name: " + boardName);
        }
        alert( "Get Boards was performed." );
    });

}