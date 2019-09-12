export class Friend {
     name: string;
     age: number;
     email: string;
     bestFriend: boolean;
    
    constructor(name:string = "", age: number = 0, email: string = "", bf: boolean = true) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bestFriend = bf;
    }

    about(): string {
        return `This friend is ${this.name}, ${this.age}, ${this.email}, 
        and ${this.name} is bestfriend: ${this.bestFriend} `
    }
}
