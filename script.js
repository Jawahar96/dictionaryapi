// https://api.dictionaryapi.dev/api/v2/entries/en/<word>


var api=document.createElement('getDictionary');
api.setAttribute('class','foo');
api.innerHTML=`<button type="button"  onclick="foo" class="btn btn-primary btn-lg">Synonyms</button>
<button type="button" onclick="foo" class="btn btn-primary btn-lg">Antonyms</button>`

document.body.append(api);


async function foo(){
var words=  await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/delegate')
words.innerHTML="Delegate"
console.log(words);
document.body.append(words);
// res.innerHTML=words.json;


}

foo();

try{
let res= fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/ ${delegate}`) //using the template literalst we can access the delegate
console.log(res);
let data={
    "word": "Delegate",
      "phonetic": "delegate",
      "phonetics": [
        {
          "text": "delegate",
      "meanings": "Decision making" [

        {
          "partOfSpeech": "its words",
          "definitions": [
            {
              "definition": "Giving some authority .",
              "example": "It has to do delegate !",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "an utterance of ‘hello’; a greeting.",
              "example": "she was getting polite nods and hellos from people",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "say or shout ‘hello’.",
              "example": "I pressed the phone button and delegate",
              "synonyms": [],
              "antonyms": []
            }
          ]
        }
      ]
    }
  ]

          
}
let count=0;
for(let i=0;i<count.length;i++){
    if(count==words)
    {
        count++;
        count=words;
        // count.innerHTML=`meanings of this words`
    words.innerHTML=data.json;  
    console.log(words);
   

    let synonms =document.createElement('words');
    synonms.addEventListener('id', 'foo');
    synonms.innerHTML=''
    
    document.getElementsByid('getdictonary').innerHTML=`words in dictonary :${words}`;
    document.body.append(synonms);
    }
    
    let Antonyms =document.createElement('words');
    Antonyms.addEventListener('id', 'foo')
    document.getElementsByClassName('text').innerHTML=`Synonyms and Antonyms :${words}`; //link he words and give the meaning of delegate
    document.body.append(Antonyms);
    api.innerText=` ${words} :${synonms} ${antonyms}`

    var randomwords = Math.floor(Math.random()*result.length)
    console.log(randomwords)
    console.log(result[randomwords])
    randomwords=data.json;
    
    var randomwords= result[randomwords].
    console.log(randomwords)

    let partOfSpeech=createElement('div');
    partOfSpeech.setAttribute('id','div');
    partOfSpeech.innerHTML=`"partOfSpeech": "verb",
    "definitions": [
      {
        "definition": "say or shout ‘randomwords’.",
        "example": "I pressed the phone button and randomwords",
        "synonyms": poweror authority
        "antonyms": `
    document.body.append(partOfSpeech);

}}
catch(err){
console.log("some error occured"+err); //error occured in delegate 
}


