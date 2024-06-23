//Assignment no 36
/*T-Shirt:Write a function called make_shirt() that accepts a size and the text of a message that should be
printed on the shirt. The function should print a sentence  summarizing the size of the shirt and the 
message  printed on it. */

import { log } from "console";


function make_shirt(size:string,text:string) {
    
    console.log(` Make a ${size} shirt with the message: ${text} `);
    
}
make_shirt('Small','Adventure day');
make_shirt('Large','Adventure day');
make_shirt('Medium','Adventure day');

//Assignment no 37
/*Large shirts:Modify the make_shirt() function so that shirts are large by default with a message that reads I
 love TypeScript. Make a large shirt and a medium shirt with the default message , and a shirt of any size with a different message.*/

 function make_shirtt(size:string = 'Large',text:string = 'I love typescript ') {
    
    console.log(` Make a ${size} shirt with the message: ${text} `);
    
}
make_shirtt();
make_shirtt('Small');
make_shirtt('Medium',' Its Adventurous day');


 //Assignment no 38
 /*Cities: Write a function called describe_city() that accepts the name of a city and its country.The  function should print a simple 
 sentence, such as  Karachi is in Pakistan.Give  the parameter for the country  a default value.Call your function for three different 
 cities, at least one of which is not in the default country. */


function describe_city(city:string, country:string = "Default country") {
    console.log(` ${city} is in ${country}`);
    
    
}
describe_city('Karachi', 'Pakistan');
describe_city('Hyderabad', 'India');
describe_city('Jadda');


 //Assignment no 39
 /*City Names: Write a function called city_country() that takes in the name of a city and  its country. The function should return a string
 formatted like this:
 'Lahore,Pakistan'
 Call your function  with at least three city-country pairs and print the value that's returned. */

function city_country (nameOfcity:string,nameOfcountry:string) {
    
    return `${nameOfcity},${nameOfcountry}`
    
    
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));




 //Assignment no 40
 /*Album: Write a function called make_album() that  builds  a object describing a music album.The function should take in an artist name
 and  an album title, and it should return a Object containing these two  pieces of information. Use the function to make three  dictionaries
 representing different albums. Print each return value to show  that Objects are storing the album information correctly. Add an optional
 perameter to make_album() that allows you to store the number of tracks on an album.If  the calling line includes a value for the number of 
 tracks, add that value to the album's Object.Make  at least one new function call that includes the number of tracks on an album.
  */


 function make_album(artistName:string, albumTitle:string, tracks?:number) {

    const album: {artist:string, title:string, tracks?:number} = {
        artist: 'artist',
        title: 'title'
    }
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
 }
const album1 =  make_album('Artist 1', 'Album title 1');                //function call
console.log(album1);

const album2 = make_album('Artist 2', 'Album title 2');
console.log(album2);


const album3 = make_album('Artist 3', 'Album title 3', 12);
console.log(album3);



