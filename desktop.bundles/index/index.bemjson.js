({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    mix: {block : 'sssr', js: true},
    content: [
       {
        block: 'header',
        content: [
            {
                block: 'logo',
                mix: { block: 'header', elem: 'logo' },
                content: 'Social Services Search Robot'
            },
            {
                block: 'form',
                mix: { block: 'header', elem: 'form' },
                content: [
                    {
                        elem: 'search',
                        content: [
                            {
                                block: 'input',
                                mods: { theme: 'normal', size: 'm', 'has-clear' : true },
                                name: 'query',
                                placeholder: 'try me, baby!'
                            },
                            {
                                block : 'button',
                                mods: { theme: 'normal', size: 'm', action: true },
                                type: 'submit',
                                text: 'Найти'
                            },
                            {
                                block: 'spin',
                                mix: {block: 'form', elem: 'spin'},
                                mods: { theme: 'normal', size: 's' }
                            }
                        ]
                    }
                ]
            }
        ]
       },
       {
           block: 'content',
           content: [
            {
                block: 'island',
                content: [
                    {
                        elem: 'header',
                        content: {
                            block: 'user',
                            content: [
                                {
                                    elem: 'post-time',
                                    content: 'time'
                                },
                                {
                                    block: 'image',
                                    mix: { block: 'user', elem: 'icon' },
                                    url: 'http://placekitten.com/400/400',
                                    alt: 'user.name'
                                }
                            ]
                        }
                    },
                    {
                        elem: 'text',
                        content: 'Twitter message text'
                    },
                    {
                        elem: 'footer',
                        content: [
                            {
                                block: 'service',
                                mods: { type: 'twitter' }
                            }
                        ]
                    }
                ]
            }
        ]
       }
    ]
})
