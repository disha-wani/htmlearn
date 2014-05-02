Template.cssEditor6.rendered = function() {
  var cssEditor = ace.edit("cssEditor6");
  cssEditor.setTheme("ace/theme/twilight");
  cssEditor.getSession().setMode("ace/mode/css");
  cssEditor.setHighlightActiveLine(true);
  cssEditor.getSession().setUseWorker(true);
  cssEditor.setValue("header {\n    height: 10%;\n    background: red;\n}\n\n.sidebar {\n    background: green;\n    /* FILL THIS IN!  Don't forget to set a width!  (You should have at least two properties here.) */\n}\n\n.content-area {\n    background: blue;\n    min-height: 80%; /* This declaration ensures that the page is always filled. */\n    /* FILL THIS IN!  Don't forget to pick a width that corresponds to the one for .sidebar!  (You should have at least two properties here.) */\n}\n\nfooter {\n    background: yellow;\n    height: 10%;\n    /* FILL THIS IN!  You only need one property here, but feel free to add more. */\n}");

  var htmlEditor = ace.edit("htmlEditor6");
  htmlEditor.setTheme("ace/theme/twilight");
  htmlEditor.getSession().setMode("ace/mode/html");
  htmlEditor.setHighlightActiveLine(true);
  htmlEditor.getSession().setUseWorker(true);
  htmlEditor.setValue("<html>\n    <body>\n        <header>This is the header</header>\n        <div class='sidebar'>This is the sidebar</div>\n        <div class='content-area'>This is the content</div>\n        <footer>This is the footer</footer>\n    </body>\n</html>");



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