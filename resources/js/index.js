//if they say yes to the EULA
function agreement(){
    $('#oa_modal').modal({
        backdrop: 'static',
        keyboard: false
    });
}

//if they say no to the EULA
function escape(){
    window.location.href="http://www.collegehumor.com";
    return false;
}

//make sure the header scrolls up and down
$(window).scroll(function(){
$('#header').css('margin-top','-'+$(window).scrollTop()-30+'px');
});

//JUMPSCROLL
function jumpScroll() {
window.scroll(658,0);
} //END jumpscroll

// AUDIO SERVICES
var playing = false;
var numSer = -1;

function startWallService(){
    if(playing==true){stopServices();}
    var playing = true;
    numSer = 0;
    alert("Wall streaming audio service has started.");
    //TODO - START WALL STREAMING SERVICE
}

function startConfessionService(){
    if(playing==true){stopServices();}
    var playing = true;
    numSer = 1;
    alert("Confessional streaming audio service has started.")
    //TODO - START CONFESSIONAL STREAMING SERVICE
}

function startMorpheusService(){
    if(playing==true){stopServices();}
    var playing = true;
    numSer = 2;
    alert("Morpheus streaming media service has started.")
    //TODO - START MORPHEUS STREAMING SERVICE
}

function stopServices(){
    var playing = false;
    alert("All streaming services have stopped.");
    //TODO - STOP ALL STREAMING SERVICES
}

//CHANGE ROOM
function changeRoom(room){
    if (room==1){
        $("#content").css("width", 960);
        $("body").css("width", 960);
        $("#content").css("background-image", "url('resources/images/confessional.jpg')")
        $('#ticket_modal_trigger').attr('data-target', '#confessional_ticket_modal');
        $('#ticket_modal_trigger').attr('value', 'Confess');
        //startConfessionService();
        return;
    } else if (room==2){
        $("#content").css("width", 960);
        $("body").css("width", 960);
        $("#content").css("background-image", "url('resources/images/web.jpg')")
        $('#ticket_modal_trigger').attr('data-target', '#morpheus_modal');
        $('#ticket_modal_trigger').attr('value', "Don't dream it. Be it.");
        //startMorpheusService();
    } else {
        $("#content").css("width", 2755);
        $("body").css("width", 2755);
        $("#content").css("background-image", "url('resources/images/Background_Vox_UC.jpg')");
        $('#ticket_modal_trigger').attr('data-target', '#ticket_modal');
        $('#ticket_modal_trigger').attr('value', "Take a ticket");
        jumpScroll();
        //startWallService();
        return;
    } //end else
} //end changeRoom


//DROPDOWN LOGIN
function login(){
    $('#login_dropdown').toggle('fast', function() {
    $('#email_login').focus();
    });
} // END dropdown login

// PLAY RHPS MUSIC
function playMusic(){
        $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'resources/audio/dream.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        $.get();
        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);
        $('.play').click(function() {
            audioElement.play();
        });
        $('.pause').click(function() {
            audioElement.pause();
        });
    });
} //END playmusic

function shareAudio(){
    
navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
   navigator.getUserMedia({ audio: true},
      function(stream) {
         var audio = document.querySelector('audio');
         audio.src = window.URL.createObjectURL(stream);
         audio.onloadedmetadata = function(e) {
           audio.play();
         };
      },
      function(err) {
         console.log("The following error occured: " + err.name);
      }
   );
} else {
   console.log("getUserMedia not supported");
}

} //END audioOn