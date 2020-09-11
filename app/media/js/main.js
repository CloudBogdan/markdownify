const 
    Vue = require("./vue.min"),
    codemirror = require("./codemirror/codemirror"),
    { editorInit, closeBrackets } = require("./editor/editor"),
    marked = require("./marked"),
    { applyTool, hotApplyTool, tools } = require("./editor/tools");

new Vue({

    el: "#app",
    data: {

        editor: null,
        code: "",
        compiled_code: "",

        tools

    },
    
    methods: {

        compile() {

            this.code = this.editor.getValue();
            this.compiled_code = marked(this.code, { sanitize: true });
            
            localStorage.code = this.code;

        },
        getCode() {

            if (!localStorage.code) return;

            this.code = localStorage.code;
            this.editor.setValue(this.code);

        },
        applyTool(tool) {

            applyTool(tool, this.editor);

        }

    },
    mounted() {
        
        this.editor = editorInit(codemirror);
        
        this.getCode();

        this.compile();
        this.editor.on("change", ()=> {

            this.compile();

        });

        closeBrackets(this.editor);
        hotApplyTool(this.editor);

    }

})