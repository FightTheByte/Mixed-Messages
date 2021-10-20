const mixedMessages = {
   _messageArrays : [["The wicked witch ","The old man ", "The cyber pirate "],
                     ["of the mountain, ","from the bureau of nasal swabbing, ","from the west industrial estate, "],
                     ["ate a live worm, thus incurring the wrath of worm king!", "spent an afternoon drunkenly fighting the mirror", "ate ramen for 40 days and nights"]],
   get messageRandomisation(){
          const stitchArray=[];
          const message1=Math.floor(Math.random()*this.messageArrays[0].length);
          const message2=Math.floor(Math.random()*this.messageArrays[1].length);
          const message3=Math.floor(Math.random()*this.messageArrays[2].length);
          stitchArray.push(message1,message2,message3);
          return stitchArray;
   },
   get messageArrays(){
          return this._messageArrays;
   },
   get finalResult(){
          const finalMessage = [];
          const messages = this.messageRandomisation;
          this.messageArrays.forEach(element=>{
            let indexNumber = this.messageArrays.indexOf(element);
            return finalMessage.push(element[messages[indexNumber]]);
          });
          return finalMessage.join('');
   }
}   

console.log(mixedMessages.finalResult);