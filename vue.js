

new Vue({
    el: '#app',
    data: {
        big:16,
        error: false,
        theme: "Black"
    },
    computed:{
        small: {
            get: function() {
                return Math.sqrt(this.big);
            },
            set: function(newSmall) {
                this.big = newSmall**2;
            }
            // return Math.sqrt(this.big)
        }
    },
    methods: {
        check: function (){
            if(isSquare(this.big)){
                console.log("big is a perfect square")
            }else{
                alert("big is not a perfect square")
                
            }
        },
        say:function(){
            alert("this is a message")
        }
        
        
        
    }
})