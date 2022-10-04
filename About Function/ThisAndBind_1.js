 const person = {
    grettings: 'Good morning!',
    speak() {
        console.log(this.grettings)
    }
 }

 person.speak()
 const speak = person.speak
 speak() // conflict: functional and OO

 const speakOfPerson = person.speak.bind(person)
 speakOfPerson()