<script>
		window.onscroll = function() {myFunction()};

		function myFunction() {
    	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 100) {
        	document.getElementById("myp").className = "test";
    	} else {
        document.getElementById("myp").className = "";
    		   }
		
		if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 100) {
        	document.getElementById("myone").className = "test-me";
    	} else {
        document.getElementById("myone").className = "";
    		   }
			
		if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 100) {
        	document.getElementById("mytwo").className = "test-me";
    	} else {
        document.getElementById("mytwo").className = "";
    		   }
			
		if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 100) {
        	document.getElementById("mythree").className = "test-me";
    	} else {
        document.getElementById("mythree").className = "";
    		   }
			
		if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 100) {
        	document.getElementById("myfour").className = "test";
    	} else {
        document.getElementById("myfour").className = "";
    		   }
							  }
</script>