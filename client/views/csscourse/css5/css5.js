Template.cssEditor5.rendered = function() {
  var cssEditor = ace.edit("cssEditor5");
  cssEditor.setTheme("ace/theme/twilight");
  cssEditor.getSession().setMode("ace/mode/css");
  cssEditor.setHighlightActiveLine(true);
  cssEditor.getSession().setUseWorker(true);
  cssEditor.setValue("/*Write your CSS Here*/");

  var htmlEditor = ace.edit("htmlEditor5");
  htmlEditor.setTheme("ace/theme/twilight");
  htmlEditor.getSession().setMode("ace/mode/html");
  htmlEditor.setHighlightActiveLine(true);
  htmlEditor.getSession().setUseWorker(true);
  htmlEditor.setValue("<html>\n    <body>\n        <div class='image-container'>\n            <img src='some-image' />\n            <p>This is a caption for the image.</p>\n        </div>\n        <p>The following is some text that needs to wrap around the image.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </body>\n</html>");



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