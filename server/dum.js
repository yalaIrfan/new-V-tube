var sector=document.getElementsByName("form.efilingForm29bDtl.natureOfBusinessSectors")[0];
		var subSec=document.getElementsByName("form.efilingForm29bDtl.natureOfBusinessSubsectors")[0];
		alert(sector.value);
		var AllSubSec= new Array();
		var onlySub= new Array();
		if(sector!=''){
		for (i = 0; i < subSec.options.length; i++) {
		    var opt=subSec.options[i].value;
		    
		    if( opt!=null || opt!=undefined){
		    if(opt.substring(0,2)==sector.value){console.log(AllSubSec.indexOf('option')+' '+i);
		        onlySub.push(subSec.options[i]);
		    }
        }
        
		}
		}
		onlySub.unshift('')
        console.log(onlySub);
        
        for(var i=0;i<subSec.length-1;i++)
		 {
			subSec.remove(i);
		 }
         for(var i=0;i<onlySub.length;i++)
		 {
			
	console.log(onlySub[i]);
			 subSec.options=onlySub[i];
             //subSec.options[i].value=onlySub[i].options.text;
            
		 }