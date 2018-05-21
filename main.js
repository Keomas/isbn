
$("button").click(function () {
    var	isbn = $("#nisbn").val() ;
    isbn_array=isbn.trim();
   var urlBook = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
  


    $.ajax({
            async:true,
            url:urlBook,
            dataType:"json",
            success:function(data){
                if(data.items != undefined) {
	                var book = data.items[0];
	       
	                var title = (book["volumeInfo"]["title"]);
	                var subtitle = (book["volumeInfo"]["subtitle"]);
	                var authors = (book["volumeInfo"]["authors"]).join(", ");
	                var printType = (book["volumeInfo"]["printType"]);
	                var pageCount = (book["volumeInfo"]["pageCount"]);
	                var publisher = (book["volumeInfo"]["publisher"]);
	                var publishedDate = (book["volumeInfo"]["publishedDate"]);
	                var webReaderLink = (book["accessInfo"]["webReaderLink"]);
	                $( "<tr>"+
	                    '<th scope="row">'+isbn+"</th>"+
	                    "<td>"+title+"</td>"+
	                    "<td>"+authors+"</td>"+
	                    "<td>"+publisher+"</td>"+
	                    "<td>"+publishedDate+"</td>"+
	                "</tr>"
	                ).appendTo( "tbody" );
	                console.log(title,authors,publisher,publishedDate);
            }else{
            		console.log("Livro não encontrado pela api");
            	 	var title = "livro não encontrado pela api do google";
	                var authors =  "não encontrado";
	                var publisher = "não encontrado";	                
	                var publishedDate ="não encontrado" ;
	                $( "<tr>"+
	                    '<th scope="row">'+isbn+"</th>"+
	                    "<td>"+title+"</td>"+
	                    "<td>"+authors+"</td>"+
	                    "<td>"+publisher+"</td>"+
	                    "<td>"+publishedDate+"</td>"+
	                "</tr>"
	                ).appendTo( "tbody" );
            }
                
            },
            error:"abort",
            complete:function(jqxhr,str){
                console.log(jqxhr);
                console.log(str);
            }
        }
        );
        
    }
    );
   
    );
   
   


    
   
