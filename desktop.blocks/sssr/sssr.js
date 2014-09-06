modules.define('sssr', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._form = this.findBlockInside('form');
                    this._form.on('submit', this._sendRequest, this);
                    this.setMod('empty');
                }
            },
            loading: function(modName, modVal) {
                this.findBlockInside('spin').setMod('progress', modVal);
                this.findBlockInside('content').setMod(modName, modVal);
            },
            empty: function(modName, modVal) {
                (this._splash || (this._splash = this.findBlockInside('splash'))).setMod('hidden', !modVal);
                (this._content || (this._content = this.findBlockInside('content'))).setMod('hidden', modVal);
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
            this.delMod('loading').delMod('empty');
            BEMDOM.update(this._content.domElem, result);
        }
    }))
})