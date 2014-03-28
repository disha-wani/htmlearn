Template.aceEditor4.rendered = function() {
  var editor = ace.edit("aceEditor1");
  editor.setTheme("ace/theme/twilight");
  editor.getSession().setMode("ace/mode/html");
  editor.setHighlightActiveLine(true);
  editor.getSession().setUseWorker(true);

  


  $(document).ready(function(){
    onload=(document).onkeyup=function(){
      (document.getElementById("preview").contentWindow.document).write(
      editor.getValue()+"<style>"+"<\/style><script>"+"<\/script>"
    );

    (document.getElementById("preview").contentWindow.document).close();
    };

    $('#checkmycode').click(function(){
      console.log("normal " + editor.getValue());
      var str = editor.getValue();
      str = str = str.replace(/\s/g, "");
      var first = str.substring(0,16);
      var last = str.substring(str.length-19,str.length);
      console.log("strip: "+ str + "  First:" + first + "   Last: " + last);
      //if(first == "<html><body><h1>" && last == "</h1></body></html>")
      if(str.match(/<html><body><h1>.*<\/h1><p>.*<\/p><\/body><\/html>/))
      {
        alert("yes correct");
      }
      else
      {
        alert("no wrong");
      }
      });
  });
};
// onload=(document).onkeyup=function(){
//    (document.getElementById("preview").contentWindow.document).write(
//      html.value+"<style>"+css.value+"<\/style><script>"+js.value+"<\/script>"
//    );
//    (document.getElementById("preview").contentWindow.document).close()
//  };