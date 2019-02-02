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
