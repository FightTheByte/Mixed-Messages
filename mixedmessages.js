const mixedMessages = {
   _messageArrays : [["The wicked witch ","The old man ", "The cyber pirate ", "The bear "],
                     ["of the mountain, ","from the bureau of nasal swabbing, ","from the west industrial estate, "],
                     ["ate a live worm, thus incurring the wrath of worm king!", "spent an afternoon drunkenly fighting the mirror", "ate ramen for 40 days and nights"],
                     [", it was wicked!", ", this led to a catastrophic flood!", ", nobody could believe their eyes!"]],
   get messageRandomisation(){
          const stitchArray=[];
          for(let i=0;i<this.messageArrays.length;i++){
          stitchArray.push(Math.floor(Math.random()*this.messageArrays[i].length));
          }
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
//console.log(mixedMessages.messageArrays)