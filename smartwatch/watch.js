
        $(' a').on('click', function(e) {
            e.preventDefault();
            var url = this.href;
            $(' a.current').removeClass('current');
            $(this).addClass('current');
            //console.log(url);
            $('#container').remove();
            $('#content').load(url + ' #container').hide().fadeIn('slow');
          });


          var h1 = document.getElementsByTagName('h1')[0],
          start = document.getElementById('start'),
          stop = document.getElementById('stop'),
          clear = document.getElementById('clear'),
          seconds = 0, minutes = 0, hours = 0,
          t;

        function add() {
          seconds++;
          if (seconds >= 60) {
              seconds = 0;
              minutes++;
              if (minutes >= 60) {
                  minutes = 0;
                  hours++;
              }
          }
          
          document.getElementById("timer").innerHTML = hours +":"+minutes+":"+seconds;


        }
        function timer1() {
          t =window.setInterval(add,1000);
        }
        function cleartime() {
          document.getElementById("timer").innerHTML =  "0:0:0";
          
        }
        function stop1()
        {
        window.clearInterval(t);
        }




        
        function playAudio() { 
              
          if(i==0)
          {
          var x = document.getElementById("myAudio"); 
          x.play();
              document.getElementById("musicshow").innerHTML="Katturubinu kalyanam.mp3";
          }  
              
         
          if(i==1)
          {
          var x = document.getElementById("myAudi"); 
          x.play();
              document.getElementById("musicshow").innerHTML="Runaway.mp3";
          }
          if(i==2)
          {
          var x = document.getElementById("myAud"); 
        
          document.getElementById("musicshow").innerHTML="Ballettan.mp3";
        
          x.play();
          }
          if(i==3)
          {
          var x = document.getElementById("myAu"); 
          document.getElementById("musicshow").innerHTML="poonilamazha.mp3";
         
          x.play();
          }console.log("playing");
          document.getElementById("playing").innerHTML="playing";
        document.getElementById("plays").style.visibility="hidden";
        document.getElementById("pauses").style.visibility="visible";
        } 
        var i=0;

        function nextAudio() 
        { 
        

            i++;
            
          var x = document.getElementById("myAudio"); 
        x.pause()
            
            if(i==1)
              {
              var x = document.getElementById("myAudi"); 
              var y=('myAudi'+i+"");
              console.log(y);
              x.play();
                  document.getElementById("musicshow").innerHTML="Runaway.mp3";
              }
              if(i==2)
              {
              var x = document.getElementById("myAud"); 
              var x1 = document.getElementById("myAudi"); 
              document.getElementById("musicshow").innerHTML="Ballettan.mp3";
              x1.pause();
              x.play();
              }
              if(i==3)
              {
              var x = document.getElementById("myAu"); 
              var x1 = document.getElementById("myAud"); 
              document.getElementById("musicshow").innerHTML="poonilamazha.mp3";
              x1.pause();
              x.play();
              }
              

          console.log("playing");
              document.getElementById("playing").innerHTML="playing";
            document.getElementById("plays").style.visibility="hidden";
            document.getElementById("pauses").style.visibility="visible";
        } 

        function PreviousAudio() 
        { 
        

            i--;
            console.log(i);
            if(i==0)
            {
            var x = document.getElementById("myAudio"); 
            x.play();
            var x1 = document.getElementById("myAudi"); 
              x1.pause();
                document.getElementById("musicshow").innerHTML="Katturubinu kalyanam.mp3";
            } 
            
            if(i==1)
              {
              var x = document.getElementById("myAudi"); 
              x.play();
                  document.getElementById("musicshow").innerHTML="Runaway.mp3";
              }
              if(i==2)
              {
              var x = document.getElementById("myAud"); 
              var x1 = document.getElementById("myAu"); 
              document.getElementById("musicshow").innerHTML="Ballettan.mp3";
              x1.pause();
              x.play();
              }
              if(i==3)
              {
              var x = document.getElementById("myAu"); 
              var x1 = document.getElementById("myAud"); 
              x1.pause();
              x.play();
              }
              

          console.log("playing");
              document.getElementById("playing").innerHTML="playing";
            document.getElementById("plays").style.visibility="hidden";
            document.getElementById("pauses").style.visibility="visible";
        } 

        function pauseAudio()

        { 
              console.log("pausing");
              var x = document.getElementById("myAudio"); 
              x.pause(); 
              console.log(i);
              document.getElementById("pauses").style.visibility="hidden";
              document.getElementById("plays").style.visibility="visible";
          
        if(i==1)
              {
              var x = document.getElementById("myAudi"); 
              x.pause(); 
                  document.getElementById("musicshow").innerHTML="Runaway.mp3";
              }
              if(i==2)
              {
              var x = document.getElementById("myAud"); 
              var x1 = document.getElementById("myAudi"); 
              document.getElementById("musicshow").innerHTML="Ballettan.mp3";
              x.pause(); 
              }
              if(i==3)
              {
              var x = document.getElementById("myAu"); 
              var x1 = document.getElementById("myAud"); 
              document.getElementById("musicshow").innerHTML="poonilamazha.mp3";
              x.pause(); 
              }

        } 
        // timer();


        /* Start button */
        // start.onclick = timer;

        /* Stop button */


        /* Clear button */



        // // function timer1() {
        // //     var today = new Date();
        // //     var h = today.getHours();
        // //     var m = today.getMinutes();
        // //     var s = today.getSeconds();
        // //     m = checkTime(m);
        // //     s = checkTime(s);
        // //     document.getElementById('te').innerHTML =h + ":" + m + ":" + s;
        // //     var t = setTimeout(timer, 500);
        // //     }
        // // function checkTime(i) {
        // //       if (i < 10) {
        // //         i = "0" + i
        // //       };  // add zero in front of numbers < 10
        // //       return i;
        // //       }
            

