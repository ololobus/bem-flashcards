modules.define('i-bem__dom', ['dict', 'location', 'jquery'], function(provide, dict, location, $, DOM) {

    DOM.decl('card', {
        
        onSetMod: {
            'js': {
                'inited': function() {
                    location.on('change', this._onLocationChange, this);
                    this.bindTo('click', this._onClick);
                    
                    this.word = location.getState().params['w'];
                    
                    if (!this.word) {
                        this._next();
                    } else {
                        this.setMod('status', 'showed');
                    }
                }
            },
            
            'status': {
                'showed': function() {
                    this.elem('word').text(this.word);
                },

                'translated': function() {
                    this.elem('translation').text(dict.translate(this.word));
                }
            }
        },
        
        _next: function() {
            location.change({ params: { w: dict.random() } });
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
            this.word = location.getState().params['w'];
            this
                .delMod('status')
                .setMod('status', 'showed');
        }
        
    });

    provide(DOM);

});
