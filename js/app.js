$j = jQuery.noConflict();

$j(document).ready(function() {
    
    $j("input#app_image").change(function (event){
        previewFile(event.target.files[0]);
    });

    toggleModifiers();
});

function toggleModifiers () {
    var toggle = document.getElementById("toggle_modifiers").dataset['detect'];
    if (toggle === "true") {
        toggle = "false";
        document.getElementById("toggle_modifiers").innerHTML = "Detect modifiers";
        keypress.reset();
    } else {
        toggle = "true";
        document.getElementById("toggle_modifiers").innerHTML = "Don't detect modifiers";
        keypress.combo("shift", function() {
            document.getElementById("short_name").value += "shift ";
        });

        keypress.combo("ctrl", function() {
            document.getElementById("short_name").value += "ctrl ";
        });

        keypress.combo("alt", function() {
            document.getElementById("short_name").value += "alt ";
        });

        keypress.combo("meta", function() {
            document.getElementById("short_name").value += "cmd ";
        });
    }

    document.getElementById("toggle_modifiers").dataset.detect = toggle;
    $("#short_name").focus();
}

function createShortcut() {
    var result = document.getElementById("result"),
        formData = new FormData(document.forms.namedItem("fileinfo"));

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "bin/create-app.php", true);
    xhr.onload = function(e) {
        if (xhr.status == 200) {
            hideAppModal();
            
            var app_id = xhr.responseText;
            window.location.href = "game.php?id="+app_id;
        } else {
            result.innerHTML = "Error " + xhr.status + " occurred.<br \/>";
        }
    };
    xhr.send(formData);
}

function previewFile(file) {
    var preview = document.getElementById("app_image_preview");
    if (typeof FileReader != 'undefined') {
        var reader = new FileReader();
        reader.onload = function (event) {
            var image = new Image();
            image.src = event.target.result;
            image.width = 285; // a fake resize
            preview.innerHTML = "";
            preview.appendChild(image);
        };
        reader.readAsDataURL(file);
    } else {
        preview.innerHTML += '<p>Uploaded ' + file.name + ' ' + (file.size ? (file.size/1024|0) + 'K' : '');
    }
}

function showAppModal() {
    $j('#my-modal').reveal({
        animation: 'fade',                   //fade, fadeAndPop, none
        animationspeed: 300,                 //how fast animtions are
        closeonbackgroundclick: false
    });
    $j('#my-modal').trigger('reveal:open');
}

function hideAppModal() {
    $j('#my-modal').trigger('reveal:close');
}

function createApp() {
    var result = document.getElementById("result"),
        formData = new FormData(document.forms.namedItem("fileinfo"));

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "bin/create-app.php", true);
    xhr.onload = function(e) {
        if (xhr.status == 200) {
            hideAppModal();
            
            var app_id = xhr.responseText;
            window.location.href = "game.php?id="+app_id;
        } else {
            result.innerHTML = "Error " + xhr.status + " occurred.<br \/>";
        }
    };
    xhr.send(formData);
}