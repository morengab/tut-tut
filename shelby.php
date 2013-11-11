<html>
    <head>
        <style>
            * {font-family: mono; font-size:0.95em}
            .eventNotifier{width: 100px; float: left; color:navy; border: dotted 1px navy; padding: 4px; background-color:white; margin:3px}
            .dirty{border: solid 1px #0ca2ff; color:white; background-color:#0ca2ff}
            H1 {font-size:50pt}
            
        </style>
    </head>
    <body>
        <p>
        <center><H1>New App</H1></center>
        </p>
        <h3>App Title (eg. Photoshop, Emacs)</h3>
        <input type='text' id='input_01'/>
        <hr />
        <h3>Image URL</h3>
        <input type='url' id='input_01'/>
        <hr />
        <h3>Keyboard Shortcuts</h3>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Shortcut</td>
                    <td>Image URL</td>
                </tr>
                <tr>
                    <td><input type='text' id='input_02' class='foo'></td>
                    <td><input type='text' id='input_03' class='foo'></td>
                    <td><input type='text' id='input_04' class='foo'></td>
                    <td><input type='button' value='Create' onclick="Create()" /></td>
                </tr>
                <tr>
                    <td>Foo<br>Bar<br>Baz</td>
                    <td>CTRL+foo<br>ALT+bar<br>CTRL+shift+baz</td>
                    <td>If Image URL is left<br>blank, a default<br>icon will show the<br>shortcut's name.</td>
                </tr>
                </tbody>
            </table>
    </body>
    <hr />
    <div id="logger"></div>
    <script src="jquery-1.4.2.js"></script>
    <script src="jquery.hotkeys.js"></script>
    <script>
        $(document).ready(function(){
            $(document).bind('keydown', 'ctrl+l', function(){$('#input_01')[0].focus();})
                .bind('keydown', 'shift+#', function(){$('#input_01')[0].value = "Shift#";})
                //.bind('keyup', function () { alert (arguments); })
                .bind('click', function (event){
                 ...
