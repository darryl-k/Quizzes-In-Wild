

function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

// loadjscssfile("app.js", "js") //dynamically load and add this .js file
var docRef=document.createElement("div")
docRef.setAttribute("style", "position: fixed;right: 0;top: 0;height: 100vh;z-index: 10000;width: 300px;")
docRef.setAttribute("id", "quizzes");
document.getElementsByTagName("body")[0].appendChild(docRef)
document.getElementsByTagName("body")[0].setAttribute("style", "width: calc(100% - 300px);");
//document.getElementsByTagName("head")[0].appendChild('<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">')
$('head').append('<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">');

//$("#quizzes").html('<iframe src="http://localhost:8080/index.html"></iframe>')
// docRef.innerHTML = '<iframe id="iframe" src="http://localhost:8080/index.html" style="position: relative; height: 100%; width: 100%;"></iframe>'
// $("#quizzes").load("index_1.html");
// $.get(chrome.extension.getURL('/index.html'), function(data) {
//     // $(data).appendTo('body');
//     // console.log("data", data)
//     console.log(chrome.extension.getURL('/index.html'))
//     var url = chrome.extension.getURL('/index.html').replace("index.html", "")
//     //document.innerHTML = data
//     data = data.replace(/\/static/g, url+"static")
//     data = data.replace(/\app.js/g, url+"app.js")
//
//     console.log("data", data)
//
//     // $("#quizzes").html(data)
//
// $("#quizzes").html('<iframe src="https://www.w3schools.com"></iframe>')
//
//     // Or if you're using jQuery 1.8+:
//     // $($.parseHTML(data)).appendTo('body');
// });


$.get(chrome.extension.getURL('/index.html'), function(data) {
    // $(data).appendTo('body');
    // console.log("data", data)
    console.log(chrome.extension.getURL('/index.html'))
    var url = chrome.extension.getURL('/index.html').replace("index.html", "")
    //document.innerHTML = data
    data = data.replace(/\/static/g, url+"static")
    data = data.replace(/\app.js/g, url+"app.js")

    console.log("data", data)

    $("#quizzes").html(data)
    // Or if you're using jQuery 1.8+:
    // $($.parseHTML(data)).appendTo('body');
});

//
// var t = '';
// function gText(e) {
//     t = (document.all) ? document.selection.createRange().text : document.getSelection();
//     //var iframe = document.getElementById("iframe");
//     //var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
//     //console.log("innerDoc", innerDoc);
//     // document.getElementById('input').value = t;
//     console.log(t)
//     console.log(t.focusNode.data)
//     console.log($("#myinput"))
//     // docRef.innerHTML = '<iframe src="http://localhost:8080/index.html" style="position: relative; height: 100%; width: 100%;"></iframe>'
//     $("#myinput").val(t.focusNode.data)
// }
//
// document.onmouseup = gText;
// if (!document.all) document.captureEvents(Event.MOUSEUP);
