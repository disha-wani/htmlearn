Template.cssEditor3.rendered = function() {
  var cssEditor = ace.edit("cssEditor3");
  cssEditor.setTheme("ace/theme/twilight");
  cssEditor.getSession().setMode("ace/mode/css");
  cssEditor.setHighlightActiveLine(true);
  cssEditor.getSession().setUseWorker(true);
  cssEditor.setValue("i {\ncolor: blue;\n} ");

  var htmlEditor = ace.edit("htmlEditor3");
  htmlEditor.setTheme("ace/theme/twilight");
  htmlEditor.getSession().setMode("ace/mode/html");
  htmlEditor.setHighlightActiveLine(true);
  htmlEditor.getSession().setUseWorker(true);
  htmlEditor.setValue("<html>\n<body>\n<div class='container'>\n<p id='pretty'>A</p>\n</div>\n<span>B</span>\n<div class='container'>\n<p>C</p>\n</div>\n</body>\n</html>");



  $(document).ready(function(){
    onload=(document).onkeyup=function(){
      (document.getElementById("preview").contentWindow.document).write(
      htmlEditor.getValue()+"<style>"+cssEditor.getValue()+"<\/style><script>"+"<\/script>"
    );


    (document.getElementById("preview").contentWindow.document).close();
    };

    $('#checkmycode').click(function(){
      //console.log("normal " + htmlEditor.getValue());
      var strHTML = htmlEditor.getValue();
      str = strHTML.replace(/\s/g, "");
      // var first = str.substring(0,16);
      // var last = str.substring(str.length-19,str.length);
      // console.log("strip: "+ str + "  First:" + first + "   Last: " + last);
      //if(first == "<html><body><h1>" && last == "</h1></body></html>")
      

      if(strHTML.match(/<html><body><h1>.*<\/h1><p>.*<\/p><\/body><\/html>/))
      {
        $('#modalPass').modal('show')

      }
      else
      {
        $('#modalFail').modal('show')

      }
      });
  });

 

};