"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_class_1 = require("../model/friend.class");
console.log("Welcome");
var f1 = new friend_class_1.Friend("Nick", 35, "Nick@gmail", true);
var f2 = new friend_class_1.Friend("Snoopy", 15, "SnoopTheRealDogg@gmail", false);
var f3 = new friend_class_1.Friend("Suzy", 22, "SuzyQ@gmail", true);
var f4 = new friend_class_1.Friend("Joey", 17, "Jowy@gmail", true);
var f5 = new friend_class_1.Friend("Phill", 45, "1967fastback@gmail", false);
var f6 = new friend_class_1.Friend("Harry", 31, "Harry@Hendersons.com", false);
var bestFriends = [f1, f2, f3, f4, f5, f6];
for (var _i = 0, bestFriends_1 = bestFriends; _i < bestFriends_1.length; _i++) {
    var homey = bestFriends_1[_i];
    console.log(homey.about());
}
