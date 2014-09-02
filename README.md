Flashcards with English-Russian words
=====================================


## About
Simple single-page English words learning application based on the `bem-core` and `bem-history` libraries.
The final result you can see [here](http://ololobus.github.io/bem-flashcards) (http://ololobus.github.io/bem-flashcards).
Contains about 950+ English words with transcritpions and Russian translations.

## Dev installation
```
git clone git@github.com:ololobus/bem-flashcards.git
cd bem-flashcards
npm install -g bem-cli
npm i
bem server # Go to http://localhost:8080/desktop.bundles/words/words.html
```

## Dictionary update
You can update words in the `dict.js` using the [following ruby script](https://gist.github.com/ololobus/11f222d1fc48f2efef56). 
Usage: `ruby xls-to-js.rb -f input.xls -o output.js`. 
After that you can replace words in the `dict.js` with new ones from `output.js`.

Input XLS-file should have three columns (A, B, C) with: word, transcription and translation.


## Dependencies
* `bem-core` – https://github.com/bem/bem-core
* `bem-history` – https://github.com/bem/bem-history/tree/v2
* Chrome v36+, Safary v8.0+, Firefox v23+ and Yandex Browser v14.7+ tested
* Opera v12.16+ works without animation