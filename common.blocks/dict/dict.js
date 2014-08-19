modules.define('dict', [], function(provide) {
    
    var dict = {
        "absenteeism": "абсентеизм (уклонение от участия в выборах, отсутствие на заседаниях и т.п.)",
        "barbiturate": "барбитурат",
        "bareness": "1) неприкрытость, нагота 2) бедность, скудность",
        "belted": "1) опоясанный 2) имеющий ременный привод",
        "cantankerous": "сварливый, придирчивый",
        "centenarian": "1) столетний 2) человек ста (и более) лет",
        "mendicity": "нищенство"
    };
    
    provide({
       dict: dict,
       random: function() {
           return 'ololo';
       }
    });
    
});
