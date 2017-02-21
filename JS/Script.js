$(document).ready(function(){
    var section1 = document.getElementsByClassName("container1");
	var section2 = document.getElementsByClassName("container2");
	var section3 = document.getElementsByClassName("container3");
	var section4 = document.getElementsByClassName("container4");
	
    var back3 = document.getElementsByClassName("back3");
    
    
    
	var bod = document.body;
	
    
        //alert($(window).width());
    
    
    
    var login1 = document.getElementsByClassName("login1");
    $(login1).css("opacity", 0);
    
    var login2 = document.getElementsByClassName("login2");
    $(login2).css("opacity", 0);
	    
	var login3 = document.getElementsByClassName("login3");
	
    var login4 = document.getElementsByClassName("login4");
    $(login4).css("opacity", 0);
    
	var fogpass = document.getElementsByClassName("forgot-password");
	var winWid;
    
    
    var back3 = document.getElementById("back3");
    
	$(section1).click(function(){
		
        $('body').css({
            background:'url(img/kamera-dym.jpg)',
            backgroundSize:'100%'
        });
        
        $(section1).css({
            background: "rgba( 144, 86, 70, 0.6)",
            height: '32vh',
            marginTop: '34vh'
        });
        
		$(section1).animate({
            	marginLeft:'54vw',
                width: '47vw'
        }, 2000);
		
        $(login1).css({
            visibility:'visible',
            marginTop:'0.5vw'
        });
        
        $(login1).animate({
                opacity:'0.8' 
        });
        
		$(section2).animate({
				marginLeft:'100vw'
        }, 1000);
		
		$(section3).animate({
				marginTop:'-150vh'
        },1000);
		
       
        
		$(section4).animate({
				marginTop:'150vh'
        },750);
    });
//11111111111111111111111111111111111111111111
    
    
	///////222222222222222222222222222222222222222222222
	
	$(section2).click(function(){
		
        
        
        $('body').css({
                background: 'url(img/91251628.jpg)',
                backgroundPosition: '100vw 110vh',
            });
        
      
         $(section2).css({
            background: "rgba( 119, 99, 90, 0.8)",
            marginTop:'-60vh',
			height: '16vw',
             minHeight: '150px',
             minWidth: '350px'
        });
        
        
		$(section2).animate({
			marginBottom: '30vh',
			marginLeft: '0vw',
			width: '47.5vw'			
        }, 2000);
                
        $(login2).css({
			visibility: 'visible'
		}, 500);
        
        $(login2).animate({
			opacity: '0.99999',
            marginTop: '0.5vw'
		}, 1500);
		
		$(section1).animate({
				marginLeft:'-100vw'
        }, 1000);
		
		$(section3).animate({

				marginTop:'-180vh'
        }, 1000);
		
		$(section4).animate({
				marginTop:'160vh'
        }, 1000);
    });
	

	//2222222222222222222222222222222222
    
    
    //333333333333333333333333333333
		$(section3).click(function(){
			
			
			$('body').css({
                background: 'url(img/RailWay.jpg)',
                backgroundPosition: 'center'
            });
			
		$(login3).css({
			visibility: 'visible'
		});
		
		$(login3).animate({
			opacity: '0.99999',
			marginTop: '2vh'
		}, 3000);
		
		$(section3).css({
            background: "rgba( 20, 20, 20, 0)"
        });
			
		$(section3).animate({
			marginTop:'-60vh',
			marginBottom: '30vh',
			marginLeft: '25vw',
			width: '50vw',
			height: '32vh'
		}, 1500);
		
		$(section1).animate({
         
				marginLeft:'-30vw'
        }, 850);
		
		$(section2).animate({
            	
				marginLeft:'130vw'
        }, 850);
		
		$(section4).animate({
            marginTop: '130vh'
        }, 3000);
			
	});
    
    
    $(back3).click(function(){
			
			
		$(login3).css({
			visibility: 'hidden'
		});
		
		$(login3).animate({
			opacity: '0',
			marginTop: '2vh'
		}, 3000);
		
		$(section3).css({
    background: "rgba( 20, 20, 20, 0)"
  });
			
		$(section3).animate({
			marginTop:'100vh',
			marginLeft: '25vw',
			width: '50vw',
			height: '32vh'
		}, 1500);
		
		$(section1).animate({
         
				marginLeft:'-30vw'
        }, 850);
		
		$(section2).animate({
            	
				marginLeft:'130vw'
        }, 850);
		
		$(section4).animate({
            marginTop: '130vh'
        }, 3000);
			
	});
    
    
    ///////////////////////////
      

    
    ///////////////////////////
    
    //333333333333333333333333333
    
    
    //444444444444444444444444444

	$(section4).click(function(){
       
        
         $('body').css({
                background: 'url(img/zal.jpg)',
                backgroundPosition: '100vw 145vh'
            });
        
		$(section4).animate({
			marginLeft: '5vw',
            opacity: '0.999',
			marginTop: '-60vh',
            borderRadius: '20px',
			width: '45vw',
			height: '18vw',
            minHeight: '200px'
        }, 3000);
		
        $(section4).css({
            background: "rgba( 200, 200, 200, 0.4)"
			
		}, 4000);
        
        $(login4).css({
			visibility: 'visible'
		}, 500);
        
        
        $(login4).animate({
			opacity: '0.99999',
            marginTop: '0.5vw',
            paddingRight: '1vw'
		}, 1500);
        
		$(section1).animate({
			opacity:'0.5',
			marginLeft:'-25%'
		}, 1000);
		
		$(section2).animate({
			opacity: '0.5',
			marginLeft:'100vw'
		}, 1000);
		
		$(section3).animate({
			opacity: '0.5',
			marginTop:'-185vh',
			marginBottom:'85vh'
		}, 1000);
		
	});
	
});
