var currentPage = 1;

document.getElementById(`Pag${currentPage}`).style.display = 'block';

function nextPage(){
    nextPage = currentPage + 1;
    updatePage(nextPage);
}

function prevPage(){
    nextPage = currentPage - 1;
    updatePage(nextPage);
}

function updatePage(pageNumber){
    document.getElementById(`Pag${currentPage}`).style.display = 'none';
    document.getElementById(`Pag${pageNumber}`).style.display = 'block';
}