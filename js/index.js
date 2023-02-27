//Home
function openClose(e){
    $(e).click(()=>{
        if($(".home .openLayer").width()==0){
            $(".home .openLayer").animate({"width" : "20%"},500)
            $(".home .layer").animate({"width" : "80%"},500)
        }
    
        else{
            $(".home .openLayer").animate({"width" : "0%"},500)
            $(".home .layer").animate({"width" : "100%"},500)
        }
    })
}
openClose(".click");
openClose(".home .openLayer .i");

//------------------------------------------------------------------------------------------------------------------------

//details
$(".details h3").click((e)=>{
    $(e.target).next().slideToggle(500)
    $(e.target).next().siblings(".box1").slideUp(500)
})

//------------------------------------------------------------------------------------------------------------------------

//duration
let d=80,h=0,m=0,s=1;
var timer = setInterval(()=>{


    
    if(s==-1){
        if(m!=0){s=59; m--;}
        else{
            if(h!=0){m=59; s=59; h--;}
            else{
                if(d!=0){h=23; m=59; s=59; d--;}
                else clearTimeout(timer)
            }
        }
    }

    $(".day h4").html(`${d} d`)
    $(".hour h4").html(`${h} h`)
    $(".minute h4").html(`${m} m`)
    $(".second h4").html(`${s} s`)
   
    s--;
    
},1000)

//------------------------------------------------------------------------------------------------------------------------

//contact
var cnst=100-$(".contact textarea").val().length;

$(".contact textarea").on({
    input : ()=>{
        cnst=100-$(".contact textarea").val().length;
        if(cnst<0)
            $(".contact .rem").html("your available character finished")
        else
            $(".contact .rem").html(cnst)

    }
})