const tools = [
    {
        name: "header",
        body: ["# ", "", "Заголовок"],
        hot_key: "H",
        symbol: "H"
    },
    {
        name: "bold",
        body: ["**", "**", "Жирное выделение"],
        hot_key: "B",
        symbol: "<b>B</b>"
    },
    {
        name: "italic",
        body: ["*", "*", "Курсивное выделение"],
        hot_key: "I",
        symbol: "<i>I</i>"
    },
    {
        name: "link",
        body: ["[", "](http://template.com)", "Текст ссылки"],
        hot_key: "L",
        symbol: "Link"
    },
    {
        name: "image",
        body: ["![", "](https://sun1-92.userapi.com/impg/c853628/v853628129/23ae61/Gh-6drJ46kY.jpg?size=200x0&quality=90&crop=20,20,560,560&sign=2c1dc191341ae148d40745531e097317&ava=1)", "Если изображение не загрузится"],
        hot_key: "G",
        symbol: "IMG"
    },
    {
        name: "list",
        body: ["- ", "", "Маркированный список"],
        hot_key: "M",
        symbol: "List"
    },
    {
        name: "nlist",
        body: ["1. ", "", "Нумированный список"],
        hot_key: "N",
        symbol: "NList"
    },
    {
        name: "code",
        body: ["``", "``", "Код"],
        hot_key: "C",
        symbol: "Code"
    },
    {
        name: "citation",
        body: ["> ", "", "Цитата"],
        hot_key: "T",
        symbol: "Cit"
    },
]

function applyTool(tool, editor) {

    const
        changed_tool = tools.find(tl=> tl.name === tool).body,
        inner_text = editor.getSelection() || changed_tool[2];

    editor.replaceSelection(changed_tool[0] + inner_text + changed_tool[1]);

    // Focus editor
    editor.focus();

}
function hotApplyTool(editor) {

    onkeydown = e=> {

        if (e.altKey) {

            const tool_index = tools.findIndex(tool=> tool.hot_key.charCodeAt() === e.keyCode);

            if (tool_index !== -1) {
                applyTool(tools[tool_index].name, editor);
            }

        }

    }

} 

module.exports = { applyTool, hotApplyTool, tools };