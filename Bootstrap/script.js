document.getElementById('search-button').addEventListener('click', function() {
    var searchTerm = document.getElementById('search-input').value;
    
    switch (searchTerm.toLowerCase()) {
        case 'canecas':
            window.location.href = 'canecas.html';
            break;
        case 'garrafinhas':
            window.location.href = 'garrafinhas.html';
            break;
        case 'kit':
            window.location.href = 'kit.html';
            break;
        default:
            alert('Item não encontrado');
    }
});
