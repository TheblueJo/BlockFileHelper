// class BlockTemplate{
//     constructor(type){
//         this.type=type;
//     }
//     setTypeReturn(){
//         return
//     }
// }

// function createSample(){
//     let fs = require('fs');
//     fs.appendFile("blockBehavior.json", "data to open", (err)=>{
//         console.log("savedFile");
//     })
// }

// createSample()
function downloadFile (cr, fn)  {
    const link = document.createElement("a");
    let content = cr;
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = fn;
    link.click();
    URL.revokeObjectURL(link.href);
 };

// document.getElementById("dbn").onclick = downloadFile(document.querySelector("textarea").value, "file.json");


function sampleFile(){
    downloadFile(JSON.stringify(fileTypesTemplates[document.getElementById("fileType").value]) ,document.getElementById("fileType").value)
}

function setDownloadValues(){
    let sd=document.getElementById("fileType").value;
    if(sd == "terrain_texture.json"){
        let dataName = document.getElementById("ftexturedef").value ;
        let dataPath = document.getElementById("ftexturepath").value ;
        var downloadFile1 = fileTypesTemplates["terrain_texture.json"];
        let receive = '{"'+dataName+'": {"textures":"'+dataPath+'"}}';
        downloadFile1.texture_data=JSON.parse(receive);
        var result = JSON.stringify(downloadFile1);
        return result;       // ERROR returns function
    }
}
