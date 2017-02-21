var app;

app = (function () {
   
    return {

        config: {},

        watchers: {},

        hooks: {},

        fire: {

            hook: function (hookKey, el) {

                if (app.hooks[hookKey] !== null && app.isFunction(app.hooks[hookKey])) {

                    return app.hooks[hookKey](el);
                }
            }
        },

    } // end
})();
