modules.define('dict', [], function(provide) {
    
    var dict = {
            "barbiturate": "барбитурат",
            "bareness": "неприкрытость, бедность",
            "belted": "опоясанный",
            "cantankerous": "сварливый, придирчивый",
            "centenarian": "столетний",
            "mendicity": "нищенство"
        },
        words = Object.keys(dict);
    
    
    provide({
       random: function randomWord(oldWord) {
           var newWord = words[Math.floor(Math.random()*words.length)]
           return newWord !== oldWord ? newWord : randomWord(oldWord);
       },
       
       translate: function(word) {
           return dict[word] || "Ooops... It's too hard to translate :(";
       }
    });
    
});
