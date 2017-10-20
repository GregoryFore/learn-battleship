for (var r=0; r<10; r++){
  var newTableRow = $("#table").append("<tr></tr>");
  for (var d=0; d<10; d++){
    newTableRow.append("<td id="+r+d+"></td>");
  }
} 
