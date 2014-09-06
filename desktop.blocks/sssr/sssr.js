modules.define('sssr', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._form = this.findBlockInside('form');
                    this._form.on('submit', function() {
                        this._sendRequest();
                    }, this);
                }
            },
            loading: function(modName, modVal) {
                this.findBlockInside('spin').setMod('progress', modVal);
                this.findBlockInside('content').setMod(modName, modVal);
            }
        },
        _sendRequest: function() {
            var formVal = this._form.getVal();
            this.setMod('loading');
            this._xhr = $.ajax({
                type: 'GET',
                dataType: 'html',
                cache: false,
                url: 'https://sssr.bem.yandex.net/search/',
                data: formVal + '&twitter=on',
                success: this._onSuccess,
                context: this
            });
        },
        _onSuccess: function(result) {
            this.delMod('loading');
            BEMDOM.update(this.findBlockInside('content').domElem, result);
        }
    }))
})