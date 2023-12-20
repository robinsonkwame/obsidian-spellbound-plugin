# Obsidian LanguageTool Plugin

This is a plugin for [Obsidian.md](https://obsidian.md) that proivides client side advanced grammar and spell checking. It is forked and adopted from [Clemens' wonderful Language Tool integration](https://github.com/Clemens-E/obsidian-languagetool-plugin).

> ***⚠️ This Plugin is in alpha mode***   
> Feel free to open Issues/Suggestions but please understand that I'm devoting my free time to other things.  
> You are however welcome to create Pull Request and I will review/merge them and release new versions accordingly.

## Installation

1. In Obsidian, under Settings / Community plugins, disable "Safe mode" (read the safety warning).
2. Click the Browse button for Community plugins.
3. In the top-left search field, search for "LanguageTool Integration". Click the Install button.
4. After the installation is successful, click Enable to enable the plugin. 

## Setting Up & Use case

After installing and enabling the plugin, you can set up three hotkeys (under Settings / Hotkeys) which can be found under the description "LanguageTool Integration" through the Filter search field, to find specific hotkey functions quicker. Make sure that there is no conflict with existing hotkeys and the spellcheck function within Obsidian, if enabled (Settings / Editor / Spellcheck ON/OFF).

* **"Check Text"** checks the whole document in view, if no text is selected. If you want to check only a word, sentence or paragraph, select the text of choice and press the keyboard shortcut you have previously setup. Click on the red underlined word that LanguageTool identified as a possible spelling mistake to get corrective suggestions in a popover window, with the option to add the word to a personal dictionary.
* **"Clear Suggestions"** clears the document or selected text of all red underlines from words or passages that were not corrected or changed.
* **"Toggle Automatic Checking"** toggles ON/OFF the automatic spellchecking function as you write or change the document's contents.

**LanguageTool tries to auto-detect the language used.** Selecting a specific language (under Settings / Plugin Options / LanguageTool Integration / Static language) is normally not necessary. **This feature enables the user to spellcheck in different languages within the same document** (e.g. a dissertation written in English with quotes in a foreign language), which is ordinarily not possible with the built-in spellcheck function of Obsidian.

## Manually installing the plugin

```
git clone https://github.com/robinsonkwame/obsidian-spellbound-plugin
cd obsidian-languagetool-plugin
npm install
npm run build
mkdir -p YOURVALULT/.obsidian/plugins/obsidian-spellbound-plugin/
cp main.js styles.css manifest.json YOURVALULT/.obsidian/plugins/obsidian-spellbound-plugin/
# now refer to Installation, above
```

# Demo

TBD but similar to: ![demo-02022022](https://user-images.githubusercontent.com/98941594/152318322-83abb30d-fee0-44cf-9700-262f4c0de4c4.png)
