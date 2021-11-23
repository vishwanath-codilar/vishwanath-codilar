.gellary{
    width: 100%;
    
}
.row1 {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 0.1em;
    margin-bottom: 0.1em;

}
.row1 .col1{
    grid-row: 1/3;
    grid-column: 1/3;

}
.row1 .col2{
    grid-row: 1/2;
    grid-column: 3/4;
}
.row1 .col3{
    grid-row: 2/3;
    grid-column: 3/4;
}
.row1 img {
    width: 100%;
    height: 100%;
    
}

.row2 {
    display: grid;
    grid-template-columns: repeat(3,1fr) ;
    grid-gap: 0.1em;
    margin-bottom: 0.1em;
}

.row2 span img{
    width:100%;
    height: 100%;
}

@media screen and (max-width: 600px){
  
    .row1 .col1{
        grid-row: 1;
        grid-column: 1/4;
    
    }
    .row1 .col2{
        grid-row: 2;
        grid-column: 1/4;
    }
    .row1 .col3{
        grid-row: 3;
        grid-column: 1/4;
    }
    .row2 {
        display: grid;
        grid-template-columns: repeat(1,1fr) ;
        grid-gap: 0.1em;
    }
    
}
@media screen and (min-width: 720px){
    .row1 {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 0.1em;
        margin-bottom: 0.1em;
    
    }
  
    .row1 .col1{
        grid-row: 1;
        grid-column: 1/2;
    
    }
    .row1 .col2{
        grid-row: 1;
        grid-column: 2 /4;
    }
    .row1 .col3{
        grid-row: 3;
        grid-column: 1/4;
    }
    .row2 {
        display: grid;
        grid-template-columns: repeat(1,1fr) ;
        grid-gap: 0.1em;
    }

.icons
{
    position:fixed;
    top: 175px;
    width: 100%;
    display:  flex;
    flex-direction: column;
    float: right;
    transition: 0.3s;
}
 .icons a{
    
    background-color: black;
    text-decoration: none;
    padding: 10px  10px 10px 10px;
    width: 270px;
    letter-spacing: 1.5px;
    margin: 1px;
    margin-left: 1310px;
     height: 20px;
     color: white;
     
}
.icons img{
    width: 26px;
    height: 26px;
    padding-left: 2px;
    padding-right: 10px;

}

.icons a:hover{
    margin-left: 1150px;

}
.icons .hide{
    display: none;
}
.icons{
    position: fixed;
    display: none;
    flex-direction: row;
    width: 100% ;
    padding-top: 2px;
    top: 91%;
    height: 60px;
    background-color: black;
    
}
.icons a{
    position: relative;
    display: flex;
    flex-direction: column;
      width: 30%;
    text-align: center;
     height: 35px;
    background-color: rgb(68, 65, 65);
    margin-left: 0.01em;
    margin-right: 3px;
    margin-top: 5px;
    font-size: 12px;
}
.icons a img{
    
    justify-content: center;  
    padding-left: 35px;     
}
.icons .show{
    display: none;
}
}



@media screen and (max-width: 600px){
    .icons{
        grid-template-columns: repeat(3,1fr);
        margin: 0;
        width: 100%;
        background-color: black;
        grid-gap: 2px;
        top: 93%;
    }
    .icons div{
       background-color: rgb(36, 32, 32);
       margin: 5px;
       margin-left: 0;
       width: 100%;
       flex-direction: column;
       text-align: center;
       border-radius: 2px;
    }
    .icons .conf{
       padding-top: 4px;
      
    }
   .icons .hide{
       display: block;
   }
   .icons .show{
       display: none;
   }
   input{
       width: 98%;
   }
}
@media  (min-width: 768px) and (max-width: 1024px){
   .icons div{
      
       margin-left: 45.5em;
      
   }
   .icons div:hover{
       margin-left: 36em;
   }
}
@media  (min-width: 1024px) and (max-width: 1365px){
   .icons div{
      
       margin-left: 61.4em;
      
   }
   .icons div:hover{
       margin-left: 52em;

   }
}