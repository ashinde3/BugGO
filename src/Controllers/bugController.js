import bugModel from '../Models/bugModel';

export function retrieveBugs() {
    let data = [];

    data.push(new bugModel({
        _id:12345,
        name:"Crash on Load",
        details:"Crashes on Loading window",
        steps:"Open application and it crashes",
        version:"V1.0",
        assigned:"Akshay Shinde",
        creator:"Jon Wick",
        priority:1,
        time:"03:17",
    }));

    data.push(new bugModel({
        _id:12345,
        name:"Failed to Load Page",
        details:"Page does not load",
        steps:"Open application and it does not load the page",
        version:"V1.0",
        assigned:"Akshay Shinde",
        creator:"Jon Wick",
        priority:3,
        time:"03:17",
    }));

    let sorted = data.sort((a,b) => {return a.priority - b.priority});
    return sorted;
}