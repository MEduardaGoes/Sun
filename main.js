var currentPage = 1;

document.getElementById(`pag${currentPage}`).style.display = 'block';

function nextPage(){
    nextPage = currentPage + 1;
    updatePage(nextPage);
}

function prevPage(){
    nextPage = currentPage - 1;
    updatePage(nextPage);
}

function updatePage(pageNumber){
    document.getElementById(`pag${currentPage}`).style.display = 'none';
    document.getElementById(`pag${pageNumber}`).style.display = 'block';
}