modules.define('i-bem__dom', ['dict', 'location', 'strings__escape'], function(provide, dict, location, escape, DOM) {

    DOM.decl('card', {
        
        onSetMod: {
            'js': {
                'inited': function() {
                    location.on('change', this._onLocationChange, this);
                    this.bindTo('click', this._onClick);
                    
                    this.word = (location.getState().params['w'] || [])[0];
                    
                    if (!this.word) {
                        this._next();
                    } else {
                        this.setMod('status', 'showed');
                    }
                }
            },
            
            'status': {
                'showed': function() {
                    this.elem('word').html(escape.html(this.word) + '<br>' + dict.transcript(this.word));
                },

                'translated': function() {
                    this.elem('translation').text(dict.translate(this.word));
                }
            }
        },
        
        _next: function() {
            location.change({ params: { w: dict.random(this.word) } });
        },
        
        _onClick: function() {
            switch (this.getMod('status')) {
                case 'showed':
                    this.setMod('status', 'translated');
                    break;
                default:
                    this._next();
            }
        },
        
        _onLocationChange: function() {
            this.word = (location.getState().params['w'] || [])[0];
            this
                .delMod('status')
                .setMod('status', 'showed');
        }
        
    });

    provide(DOM);

});
