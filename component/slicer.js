document.getElementById("sliceSubmit").onclick=function(){
    
let slicerText=document.getElementById("inputslicer").value;
let fromSlice=document.getElementById("fromslice").value;
let toSlice=document.getElementById("toslice").value;

fromSlice=Number(fromSlice);
toSlice=Number(toSlice);

let DisplaySlice=document.getElementById("DisplaySlice");
let ErrorDisplaySlice=document.getElementById("DisplaySliceError");

 
    
    let SliceFinalTxt;

    if(fromSlice>=1 && fromSlice<slicerText.length && toSlice<slicerText.length){
        SliceFinalTxt=slicerText.slice(fromSlice-1,toSlice);
        console.log(SliceFinalTxt);

        DisplaySlice.textContent=`Your Input Text is "${slicerText}" and You Slice it from character ${fromSlice} to character ${toSlice}. Your Slice string is "${SliceFinalTxt}"`;
        ErrorDisplaySlice.textContent="";
    }
    else{
        DisplaySlice.textContent="";
        ErrorDisplaySlice.textContent=`You enterd ${fromSlice} to ${toSlice} is not valid input`;
    }
}