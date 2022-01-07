// ==UserScript==
// @name         GoogleAppsScriptEditorConsoleColor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Colors for Google Apps Script Editor. It works if text starts wits "[INFO]", "[DEBUG]", "[WARNING]" or "[ERROR]"
// @author       Grigory Boew (ff.nspu@gmail.com)
// @match        https://script.google.com/home/projects/*/edit
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function(){
    const ARIA_LABEL_TEXT = "Журналы";
    const COLOR_RULES = [
        {startText: "[INFO]", color:"#E0FFFF"},
        {startText: "[DEBUG]", color:"#FF1493"},
        {startText: "[WARNING]", color:"#FFA500"},
        {startText: "[ERROR]", color:"#FF4500"},
    ];
    const REFRESH_INTERVAL = 1000; //in ms

    function xpath(xpathExpression){
        let outData = [];
        let nodesSnapshot=document.evaluate(xpathExpression, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (let i=0; i<nodesSnapshot.snapshotLength; i++){
            outData.push(nodesSnapshot.snapshotItem(i));
        };
        return outData;
    };

    function consoleColor(){
        let consoleElems = xpath(`//div[@aria-label='${ARIA_LABEL_TEXT}']//*`);

        for(let ri=0; ri<=consoleElems.length-4; ri+=4){
            let elem = consoleElems[ri];
            let text = consoleElems[ri+3].innerText;
            for (let ruleIndex=0; ruleIndex<COLOR_RULES.length; ruleIndex++){
                let rule = COLOR_RULES[ruleIndex];
                if (text.startsWith(rule.startText)){
                    elem.style.backgroundColor=rule.color;
                    break;
                };
            };
        };
    };

    setInterval(consoleColor, REFRESH_INTERVAL);
})();
