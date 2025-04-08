$(document).ready(function() {
    // Simulação de dados de visitas
    const visitasPendentes = [
        { id: 1, nome: 'João Silva', empresa: 'Empresa A', hora: '14:00' },
        { id: 2, nome: 'Maria Oliveira', empresa: 'Empresa B', hora: '15:00' },
        { id: 3, nome: 'Carlos Souza', empresa: 'Empresa C', hora: '16:00' }
    ];

    // Preenchendo a tabela no Dashboard do Trabalhador
    visitasPendentes.forEach(visit => {
        $('#visit-table').append(`
        <tr>
          <td>${visit.nome}</td>
          <td>${visit.empresa}</td>
          <td>${visit.hora}</td>
          <td><button class="btn btn-success approve">Aprovar</button><button class="btn btn-danger reject">Rejeitar</button></td>
        </tr>
      `);
    });

    // Preenchendo a lista de visitas pendentes na página da guarita
    visitasPendentes.forEach(visit => {
        $('#pending-visits').append(`
        <div class="d-flex justify-content-between mb-3 p-3 border rounded shadow-sm">
          <p><strong>${visit.nome}</strong> - ${visit.empresa} - ${visit.hora}</p>
          <div>
            <button class="btn btn-success approve">Aprovar</button>
            <button class="btn btn-danger reject">Rejeitar</button>
          </div>
        </div>
      `);
    });

    // Lógica de Aprovação e Rejeição
    $('.approve').click(function() {
        $(this).parent().parent().addClass('bg-success text-white');
        $(this).prop('disabled', true);
        $(this).siblings('.reject').prop('disabled', true);
    });

    $('.reject').click(function() {
        $(this).parent().parent().addClass('bg-danger text-white');
        $(this).prop('disabled', true);
        $(this).siblings('.approve').prop('disabled', true);
    });
});