<html>
      <head>
            <style>
                  div
                  {
                        width:200px;
                        height: 200px;
                        background-color: yellow;
                        position: relative;
                        animation-name: example;
                        animation-duration: 20s;
                        /* total amt of time taken to finish animation-animation duration */
                        animation-delay: 0s;
                        /* time taken to start the transition of the animation is called animation delay */
                        
                  }
                  @keyframes example 
                  {
                    0% {background-color: red;left:0px;top:0px;}
                    25% {background-color: green;left:200px;top:0px;}
                    50% {background-color: blue;left:200px;top: 200px;}
                    75% {background-color: brown;left:0px;top:200px;}   
                    100% {background-color: silver;left:0px;top:0px;}   
                    

                  }
            </style>
      </head>
      <body>
            <h1>Css Animation Example3</h1>
            <div>Check the output here</div>
      </body>
</html>