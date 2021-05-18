function export2file(name, data) {
    var urlObject = window.URL || window.webkitURL || window
    var export_blob = new Blob([data])
    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
    save_link.href = urlObject.createObjectURL(export_blob)
    save_link.download = name
    fakeClick(save_link)
}

function fakeClick(obj) {
    var ev = document.createEvent('MouseEvents')
    ev.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    obj.dispatchEvent(ev)
}
  
//export2file("test.txt", "hello world");

note_json = await (await fetch(`https://cloud.smartisan.com/apps/note/index.php?r=v2/getList`)).json();
note_json_str = await JSON.stringify(note_json);
export2file("锤子便签导出.json", note_json_str);