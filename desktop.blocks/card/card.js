modules.define('card', ['dict', 'location', 'strings__escape', 'i-bem__dom'], function(provide, dict, location, escape, BEMDOM) {

    BEMDOM.decl(this.name, {
        
        onSetMod: {
            'js': {
                'inited': function() {
                    location.on('change', this._onLocationChange, this);
                    this.bindTo('click', this._onClick);
                    
                    this._getWord();
                    
                    if (!this.word) {
                        this._next(true);
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
        
        _getWord: function() {
            this.word = (location.getState().params['w'] || [])[0];
        },
        
        _next: function(replace) {
            location.change({ params: { w: dict.random(this.word) }, replace: replace });
        },
        
        _onClick: function() {
            this.flip();
        },
        
        _onLocationChange: function() {
            this._getWord();
            this
                .delMod('status')
                .setMod('status', 'showed');
        },
        
        flip: function() {
            switch (this.getMod('status')) {
                case 'showed':
                    this.setMod('status', 'translated');
                break;
                default:
                    this._next();
            }
        }
        
    });

    provide(BEMDOM);

});
