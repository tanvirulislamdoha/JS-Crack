        let x = "Ashfak Mahbub Mahi"

// charAt, indexOf, subString, slice, trim, replace, includes, split

        // console.log(x.charAt(4)); 
        // answer = a

// charAt return kore position string...parameter hishabe position pass kora lage

        // console.log(x.indexOf("M"));
        // answer = 7
        // console.log(x.indexOf("c"));
        // answer = -1

// jodi multiple same value thake taile first jeita oitar index return korbe
// jodi value exists na kore taile -1 return kore

        //  console.log(x.indexOf("M", 8)) 
         // answer = 14

// second parameter dara bujay kun index theke search kora shuru korbe

        let varsity = "Leading Metropoliton University"

        // console.log(varsity.substring(2))
        // answer = ading Metropoliton University
        // console.log(varsity.substring(2, 5))
        // answer = adi
        
// first parameter theke last parameter er ag porjonto return korbe ex- substring(2, 5) tahole return hobe index 2, 3, 4


        // console.log(varsity.slice(2, 5))
        // answer = adi

// same kaj kore substring er mto and return ou kore same but behaviour different

// difference btn subString and slice
// difference btn subString and slice

// substring o jodi first value boro and second value choto dei, taile swap kore; ex-> subString(12, 7) taile swap kore exact value ashbe index 7 to 11 
// slice o jodi value boro and second value choto dei, taile empty string return kor: ex-> slice(12, 7) return korbe empty string

// substring first value negative hole ekbare last index theke count kora shuru korbe, second value 

            let trimer = "  love to trim  ";
        //     console.log(trimer.trim()); // answer = love to trim

// trim() remove spaces, tabs, newlines from first and last of the string

            let email = "tanvirislam@gmail.com"
        //     console.log(email.replace("gmail.com", "hotmail.com"));
            // answer = tanvirulislam@hotmail.com

// replace() takes two value; first one for searching the value that we want to replace, second one the value we want to put 

            let url = "https://github.com";
        //     console.log(url.includes(".com"))
            // answer = true
        
// includes() check whether the searched value is present in the string and return boolean answer

            let spliter = "People's republic of Bangladesh"
        //     console.log(spliter.split(" "))
        //     console.log(spliter.split(" ", 2))

            // answer = ['People's','republic','of','Bangladesh']

// split() separates using separator and return an array





