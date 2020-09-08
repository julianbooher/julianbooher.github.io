/*need to update this to be universal accross all buttons, better designed */

document.querySelector('#mtg-videos-button').onclick = function (){
    if(document.querySelector('#mtg-videos').style.display === 'none'){
        document.querySelector('#mtg-videos').style.display ='block';
    }
    else{
        document.querySelector('#mtg-videos').style.display ='none';
    }
}

document.querySelector('#soccer-videos-button').onclick = function(){
    if(document.querySelector('#soccer-videos').style.display === 'none'){
        document.querySelector('#soccer-videos').style.display ='block';
    }
    else{
        document.querySelector('#soccer-videos').style.display ='none';
    }
}

document.querySelector('#film-videos-button').onclick = function(){
    if(document.querySelector('#film-videos').style.display === 'none'){
        document.querySelector('#film-videos').style.display ='block';
    }
    else{
        document.querySelector('#film-videos').style.display ='none';
    }
}