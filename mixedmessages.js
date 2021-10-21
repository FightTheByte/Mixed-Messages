const mixedMessages = {
   _messageArrays : [["The wicked witch ","The old man ", "The cyber pirate ", "The bear "], //Each row of array elements, represent one selection group.
                     ["of the mountain, ","from the bureau of nasal swabbing, ","from the west industrial estate, "], //Row2
                     ["ate a live worm, thus incurring the wrath of worm king!", "spent an afternoon drunkenly fighting the mirror", "ate ramen for 40 days and nights"], //Row3
                     [", it was wicked!", ", this led to a catastrophic flood!", ", nobody could believe their eyes!"]],//Any arrays can be added, between the closing brackets ],[insert]]
   get messageRandomization(){ //creates an array from random numbers, relating to the numbers of indexes, in each arrayed element above, aka each "row"
          const stitchArray=[];
          for(let i=0;i<this.messageArrays.length;i++){
          stitchArray.push(Math.floor(Math.random()*this.messageArrays[i].length));
          }
          return stitchArray;
   },
   get messageArrays(){ 
          return this._messageArrays;
   },
   get finalResult(){ //Using the random number array, it pushes each corresponding sentence slice, to an array, using .join('') to form a cohesive sentence
          const finalMessage = [];
          const messages = this.messageRandomization;
          this.messageArrays.forEach(element=>{
            let indexNumber = this.messageArrays.indexOf(element);
            return finalMessage.push(element[messages[indexNumber]]);
          });
          return finalMessage.join('');
   }
}   

console.log(mixedMessages.finalResult);
//console.log(mixedMessages.messageArrays)