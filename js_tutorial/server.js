var fs1=require('fs')
fs1.readFile("one.txt",function(err,data)
{
    if(err)
    {
        throw err;
    }
    else
    {
        //console.log(data)//ascii value
        console.log("File content="+data)
    }
})
