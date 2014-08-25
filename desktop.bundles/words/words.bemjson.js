({
    block: 'page',
    title: 'EN-RU flashcards',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'Russian, English, words, flashcards' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_words.css' }
    ],
    scripts: [
        { elem: 'js', url: '_words.js' }
    ],
    content: [
        {
            block: 'card',
            js: true,
            content: [
                { elem: 'word', content: [''], mix: [{ block: 'side' }] },
                { elem: 'translation', content: [''], mix: [{ block: 'side' }] }
            ]
        }
    ]
})
