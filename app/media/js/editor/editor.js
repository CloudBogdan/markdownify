require("../codemirror/modes/markdown");
require("../codemirror/addons/continuelist");
require("../codemirror/addons/closetag");
require("../codemirror/addons/hint/show-hint");
require("../codemirror/addons/hint/anyword-hint");

function editorInit(codemirror) {

    // Create codemirror editor
    const editor = codemirror.fromTextArea(document.querySelector("#editor"), {
        lineNumbers: true,
        mode: "markdown",
        autoCloseTags: true,
        lineWrapping: true,
        theme: "base16-light",
        extraKeys: {
            "Enter": "newlineAndIndentContinueMarkdownList",
            "Ctrl-Space": "autocomplete"
        }
    });

    return editor;

}
function closeBrackets(editor) {

    const replacement = [
        ["*", "*"],
        ["\"", "\""],
        ["'", "'"],
        ["(", ")"],
        ["[", "]"]
    ]

    onkeydown = e=> {

        for (let i in replacement) {

            if (e.key === replacement[i][0]) {

                editor.replaceSelection(replacement[i][0] + editor.getSelection() + replacement[i][1]);

                return false;
            }
            
        }


    }

}

module.exports = { editorInit, closeBrackets };