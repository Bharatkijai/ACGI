var hmContextIds = new Array();
function hmGetContextId(query) {
    var urlParams;
    var match,
        pl = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    params = {};
    while (match = search.exec(query))
       params[decode(match[1])] = decode(match[2]);
    if (params["contextid"]) return decodeURIComponent(hmContextIds[params["contextid"]]);
    else return "";
}

hmContextIds["6070"]="hm_quickstart.htm";
hmContextIds["5180"]="hm_quickstart_newproject.htm";
hmContextIds["6120"]="hm5_quickstart_importing.htm";
hmContextIds["6160"]="hm_quickstart_orgtoc.htm";
hmContextIds["6130"]="hm_quickstart_addtopics.htm";
hmContextIds["6140"]="hm_quickstart_edittopics.htm";
hmContextIds["6150"]="hm_quickstart_styles.htm";
hmContextIds["6170"]="hm_quickstart_graphics.htm";
hmContextIds["11193"]="hm_quickstart_tables.htm";
hmContextIds["6190"]="hm_quickstart_links.htm";
hmContextIds["6200"]="hm_quickstart_compile.htm";
hmContextIds["6300"]="hm_tutorials_other.htm";
hmContextIds["11027"]="hm_quickstart_explorer.htm";
hmContextIds["11037"]="hm_quickstart_explorer_sections.htm";
hmContextIds["11029"]="hm_quickstart_explorer_navigate.htm";
