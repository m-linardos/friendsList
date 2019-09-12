import {Friend} from "../model/friend.class"
console.log("Welcome");
let f1:Friend = new Friend("Nick", 35, "Nick@gmail", true);
let f2:Friend = new Friend("Snoopy", 15, "SnoopTheRealDogg@gmail", false);

let f3:Friend = new Friend("Suzy", 22, "SuzyQ@gmail", true);
let f4:Friend = new Friend("Joey", 17, "Jowy@gmail", true);

let f5:Friend = new Friend("Phill", 45, "1967fastback@gmail", false);
let f6:Friend = new Friend("Harry", 31, "Harry@Hendersons.com", false);

let bestFriends:Friend[] = [f1, f2, f3, f4, f5, f6]


for (let homey of bestFriends) {
    console.log(homey.about())
}



    





