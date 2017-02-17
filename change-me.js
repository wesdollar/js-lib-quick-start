var app;

app = (function () {
   
    return {

        config: {},

        watchers: {},

        hooks: {},

        fire: {

            hook: function (hookKey, el) {

                if (collapseMe.hooks[hookKey] !== null && collapseMe.isFunction(collapseMe.hooks[hookKey])) {

                    return collapseMe.hooks[hookKey](el);
                }
            }
        },

    } // end
})();
