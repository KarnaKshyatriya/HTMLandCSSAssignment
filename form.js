function check(){
    var checkboxs= document.getElementsByName("CBC");
    var okay=false;
        for(var i=0,l=checkboxs.length;i<l;i++)
        {
            if(checkboxs[i].checked)
            {
                okay=true;
                break;
            }
        }
        if(okay){}
        else alert("Please check a checkbox");
    
    }