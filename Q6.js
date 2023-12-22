// 6. Vowel Counter

// We want to count the number of vowels in a person's name. Given a name as input, the program should iterate 
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be 
// counted

const tempString = "vicky kumar sIngh";
let counter = 0;

for(let i=0;i<tempString.length;i++){
    if(tempString[i]==='a' || tempString[i]==='e' || tempString[i]==='i' || tempString[i]==='o' || tempString[i]==='u' || tempString[i]==='A' || tempString[i]==='E' || tempString[i]==='I' || tempString[i]==='O' || tempString[i]==='U'){
        counter++
    }
}
console.log(counter)