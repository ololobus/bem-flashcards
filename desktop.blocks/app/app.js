modules.define('app', ['i-bem__dom', 'keyboard__codes'], function(provide, BEMDOM, KEYS) {

    BEMDOM.decl(this.name, {
        
        onSetMod: {
            'js': {
                'inited': function() {
                    var card = this.findBlockInside('card');
                    this.bindTo('keyup', function(e) {
                        if(e.which === KEYS.SPACE || e.which == KEYS.ENTER) {
                            card.flip();
                        }
                    });
                }
            }
        }
        
    });

    provide(BEMDOM);

});
