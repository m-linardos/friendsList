"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = /** @class */ (function () {
    function Friend(name, age, email, bf) {
        if (name === void 0) { name = ""; }
        if (age === void 0) { age = 0; }
        if (email === void 0) { email = ""; }
        if (bf === void 0) { bf = true; }
        this.name = name;
        this.age = age;
        this.email = email;
        this.bestFriend = bf;
    }
    Friend.prototype.about = function () {
        return "This friend is " + this.name + ", " + this.age + ", " + this.email + ", \n        and " + this.name + " is bestfriend: " + this.bestFriend + " ";
    };
    return Friend;
}());
exports.Friend = Friend;
