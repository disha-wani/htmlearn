Template.aceEditor1.rendered = function() {
  var editor = ace.edit("aceEditor1");
  editor.setTheme("ace/theme/twilight");
  editor.getSession().setMode("ace/mode/html");
  editor.setHighlightActiveLine(true);
  editor.getSession().setUseWorker(true);
  editor.setValue("<html>\n    <head>\n        <title></title>\n    </head>\n\n    <body>\n        <h1></h1>\n        <p></p>\n    </body>\n</html> ");


  


  $(document).ready(function(){
    onload=(document).onkeyup=function(){
      (document.getElementById("preview").contentWindow.document).write(
      editor.getValue()+"<style>"+"<\/style><script>"+"<\/script>"
    );

    (document.getElementById("preview").contentWindow.document).close();
    };

    $('#checkmycode').click(function(){
      //console.log("normal " + editor.getValue());
      var str = editor.getValue();
      str = str.replace(/\s/g, "");
      console.log(str);
      // var first = str.substring(0,16);
      // var last = str.substring(str.length-19,str.length);
      // console.log("strip: "+ str + "  First:" + first + "   Last: " + last);
      //if(first == "<html><body><h1>" && last == "</h1></body></html>")
      if(str.match(/<html><head><title>.*<\/title><\/head><body><h1>AboutMe!<\/h1><p>.*<\/p><\/body><\/html>/))
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