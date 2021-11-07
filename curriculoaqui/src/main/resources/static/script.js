function newCurriculoFormShow() {
    document.getElementById("cardForm").style.display = "block";
    clearFields();
}

function newCurriculoFormHide() {
    document.getElementById("cardForm").style.display = "none";

    // remove alerta
    document.getElementById("msgFields").style.visibility = "hidden";
}

function newCurriculoSteps(order) {

    // valores base das classes do botão
    var selected = "flex-sm-fill text-sm-center nav-link active";
    var deselected = "flex-sm-fill text-sm-center nav-link inactive";

    if (order === 'previous') {

        //habilita botão next
        document.getElementById("next").className = "btn btn-primary";

        //desabilita o botão gerar
        document.getElementById("gerar").style.visibility = "hidden";

        if (document.getElementById("step-2").className === selected) {
            //desabilita botão previous
            document.getElementById("previous").className = "btn btn-primary disabled";
        }

        if (document.getElementById("step-4").className === selected) {
            document.getElementById("step-4").className = deselected;
            document.getElementById("step-3").className = selected;

            // seta a step atual
            document.getElementById("labelStep").innerText = "Informações Profissionais/Objetivos";

            // esconde divInfoAdicionais1/2 e exibe divInfoProfissionais1/2
            document.getElementById("divInfoAdicionais1").style.display = "none";
            document.getElementById("divInfoAdicionais2").style.display = "none";
            document.getElementById("divInfoProfissionais1").style.display = "";
            document.getElementById("divInfoProfissionais2").style.display = "";

            document.getElementById("cardForm").style.top = "20%";
        } else if (document.getElementById("step-3").className === selected) {
            document.getElementById("step-3").className = deselected;
            document.getElementById("step-2").className = selected;

            // seta a step atual
            document.getElementById("labelStep").innerText = "Informações pessoais 2";

            // esconde divInfoProfissional1/2 e exibe divInfoPessoais3/4
            document.getElementById("divInfoProfissionais1").style.display = "none";
            document.getElementById("divInfoProfissionais2").style.display = "none";
            document.getElementById("divInfoPessoal4").style.display = "";
            document.getElementById("divInfoPessoal3").style.display = "";
        } else if (document.getElementById("step-2").className === selected) {
            document.getElementById("step-2").className = deselected;
            document.getElementById("step-1").className = selected;

            // seta a step atual
            document.getElementById("labelStep").innerText = "Informações pessoais 1";

            // esconde divInfoPessoal4/3 e exibe divInfoPessoal2/1
            document.getElementById("divInfoPessoal4").style.display = "none";
            document.getElementById("divInfoPessoal3").style.display = "none";
            document.getElementById("divInfoPessoal2").style.display = "";
            document.getElementById("divInfoPessoal1").style.display = "";
        }
    } else if (order === 'next') {

        // valida campos antes de cada next
        if (validFields() === true) {

            //habilita botão previous
            document.getElementById("previous").className = "btn btn-primary";

            if (document.getElementById("step-3").className === selected) {
                //desabilita botão next
                document.getElementById("next").className = "btn btn-primary disabled";

                //habilita o botão gerar
                document.getElementById("gerar").style.visibility = "visible";
            }

            if (document.getElementById("step-1").className === selected) {
                document.getElementById("step-1").className = deselected;
                document.getElementById("step-2").className = selected;

                // seta a step atual
                document.getElementById("labelStep").innerText = "Informações pessoais 2";

                // esconde divInfoPessoal1/2 e exibe divInfoPessoal3/4
                document.getElementById("divInfoPessoal1").style.display = "none";
                document.getElementById("divInfoPessoal2").style.display = "none";
                document.getElementById("divInfoPessoal3").style.display = "";
                document.getElementById("divInfoPessoal4").style.display = "";
            } else if (document.getElementById("step-2").className === selected) {
                document.getElementById("step-2").className = deselected;
                document.getElementById("step-3").className = selected;

                // seta a step atual
                document.getElementById("labelStep").innerText = "Informações Profissionais/Objetivos";

                // esconde divInfoPessoal3/4 e exibe divInfoProfissionais1/2
                document.getElementById("divInfoPessoal3").style.display = "none";
                document.getElementById("divInfoPessoal4").style.display = "none";
                document.getElementById("divInfoProfissionais1").style.display = "";
                document.getElementById("divInfoProfissionais2").style.display = "";
            } else if (document.getElementById("step-3").className === selected) {
                document.getElementById("step-3").className = deselected;
                document.getElementById("step-4").className = selected;

                // seta a step atual
                document.getElementById("labelStep").innerText = "Informações Adicionais";

                // esconde divInfoProfissionais1/2 e exibe divInfoAdicionais1/2
                document.getElementById("divInfoProfissionais1").style.display = "none";
                document.getElementById("divInfoProfissionais2").style.display = "none";
                document.getElementById("divInfoAdicionais1").style.display = "";
                document.getElementById("divInfoAdicionais2").style.display = "";
            }
        } else {
            document.getElementById("msgFields").style.visibility = "visible";
        }
    }
}

function validFields() {

    // valores base das classes do botão
    var selected = "flex-sm-fill text-sm-center nav-link active";
    var deselected = "flex-sm-fill text-sm-center nav-link inactive";

    // info pessoal pt1  
    if (document.getElementById("step-1").className === selected) {

        if (document.getElementById("fieldNome").value != "" &&
            document.getElementById("fieldIdade").value != "" &&
            document.getElementById("fieldRua").value != "" &&
            document.getElementById("fieldBairro").value != "" &&
            document.getElementById("fieldCep").value != "") {
            return true;
        } else {
            return false;
        }
    }

    // info pessoal pt2 
    if (document.getElementById("step-2").className === selected) {

        if (document.getElementById("fieldCidade").value != "" &&
            // document.getElementById("fieldTelefone").value != "" &&
            document.getElementById("fieldCelular").value != "" &&
            document.getElementById("fieldEmail").value != "") {
            return true;
        } else {
            return false;
        }
    }

    // info profissional
    if (document.getElementById("step-3").className === selected) {

        return true;
    }

    // info profissional
    if (document.getElementById("step-4").className === selected) {

        if (
            document.getElementById("fieldNome").value != "" &&
            document.getElementById("fieldIdade").value != "" &&
            document.getElementById("fieldRua").value != "" &&
            document.getElementById("fieldBairro").value != "" &&
            document.getElementById("fieldCep").value != "" &&
            document.getElementById("fieldCidade").value != "" &&
            // document.getElementById("fieldTelefone").value != "" &&
            document.getElementById("fieldCelular").value != "" &&
            document.getElementById("fieldEmail").value != "" &&
            document.getElementById("fieldIdade").value != "" &&
            // document.getElementById("fieldCargoAtual").value != "" &&
            // document.getElementById("fieldCargoExercido").value != "" &&
            // document.getElementById("fieldExperiencia").value != "" &&
            document.getElementById("fieldIdiomas").value != "" &&
            document.getElementById("fieldFormacaoAcademia").value != "" &&
            document.getElementById("fieldCursos").value != "") {
            document.getElementById("msgFields").style.visibility = "hidden";
            return true;
        } else {
            return false;
        }
    }

}

function clearFields() {
    // reseta marcadores
    var selected = "flex-sm-fill text-sm-center nav-link active";
    var deselected = "flex-sm-fill text-sm-center nav-link inactive";
    document.getElementById("step-1").className = selected;
    document.getElementById("step-2").className = deselected;
    document.getElementById("step-3").className = deselected;
    document.getElementById("step-4").className = deselected;

    // seta a step inicial
    document.getElementById("labelStep").innerText = "Informações pessoais 1";

    //reseta botão previous, next e gerar
    document.getElementById("previous").className = "btn btn-primary disabled";
    document.getElementById("next").className = "btn btn-primary";
    document.getElementById("gerar").style.visibility = "hidden";

    //limpa fields
    document.getElementById("fieldNome").value = "";
    document.getElementById("fieldIdade").value = "";
    document.getElementById("fieldRua").value = "";
    document.getElementById("fieldBairro").value = "";
    document.getElementById("fieldCep").value = "";
    document.getElementById("fieldCidade").value = "";
    document.getElementById("fieldTelefone").value = "";
    document.getElementById("fieldCelular").value = "";
    document.getElementById("fieldEmail").value = "";
    document.getElementById("fieldCargoAtual").value = "";
    document.getElementById("fieldCargoExercido").value = "";
    document.getElementById("fieldIdiomas").value = "";
    document.getElementById("fieldFormacaoAcademica").value = "";
    document.getElementById("fieldCursos").value = "";

    document.getElementById("divInfoPessoal1").style.display = "";
    document.getElementById("divInfoPessoal2").style.display = "";
    document.getElementById("divInfoPessoal3").style.display = "none";
    document.getElementById("divInfoPessoal4").style.display = "none";
    document.getElementById("divInfoProfissionais1").style.display = "none";
    document.getElementById("divInfoProfissionais2").style.display = "none";
    document.getElementById("divInfoAdicionais1").style.display = "none";
    document.getElementById("divInfoAdicionais2").style.display = "none";
}

function generatePdf() {

    // cria o objeto pdf
    var doc = new jsPDF();

    // pega valores do form
    var nome = document.getElementById("fieldNome").value;
    var idade = document.getElementById("fieldIdade").value;
    var rua = document.getElementById("fieldRua").value;
    var bairro = document.getElementById("fieldBairro").value;
    var cep = document.getElementById("fieldCep").value;
    var cidade = document.getElementById("fieldCidade").value;
    var telefone = document.getElementById("fieldTelefone").value;
    var celular = document.getElementById("fieldCelular").value;
    var email = document.getElementById("fieldEmail").value;
    var cargoAtual = document.getElementById("fieldCargoAtual").value;
    var cargoExercido = document.getElementById("fieldCargoExercido").value;
    var idiomas = document.getElementById("fieldIdiomas").value;
    var formacaoAcademica = document.getElementById("fieldFormacaoAcademica").value;
    var cursos = document.getElementById("fieldCursos").value;

    // escreve no pdf

    doc.setFontSize(32);
    doc.text('Currículo', 85, 30);

    doc.setFontSize(16);
    doc.setFontStyle('bold')
    doc.text('Nome/Idade:', 10, 50);

    doc.setFontSize(14);
    doc.setFontStyle('normal')
    doc.text(nome + ', ' + idade + ' anos', 10, 60);

    doc.setFontSize(16);
    doc.setFontStyle('bold')
    doc.text('Endereço:', 10, 80);

    doc.setFontSize(14);
    doc.setFontStyle('normal')
    doc.text(rua + ' - ' + bairro, 10, 90);

    doc.setFontSize(16);
    doc.setFontStyle('bold')
    doc.text('Cidade/CEP:', 10, 110);

    doc.setFontSize(14);
    doc.setFontStyle('normal')
    doc.text(cidade + ' - ' + cep, 10, 120);

    if (telefone == '') {
        doc.setFontSize(16);
        doc.setFontStyle('bold')
        doc.text('Email/Celular:', 10, 140);

        doc.setFontSize(14);
        doc.setFontStyle('normal')
        doc.text(email + ' - ' + celular, 10, 150);
    } else {
        doc.setFontSize(16);
        doc.setFontStyle('bold')
        doc.text('Email/Telefone/Celular:', 10, 140);

        doc.setFontSize(14);
        doc.setFontStyle('normal')
        doc.text(email + ' - ' + telefone + ' - ' + celular, 10, 150);
    }

    doc.setFontSize(16);
    doc.setFontStyle('bold')
    doc.text('Cargo Atual:', 10, 170);

    doc.setFontSize(14);
    doc.setFontStyle('normal')
    if (cargoAtual.length >= 32) {
        doc.text(cargoAtual.substring(0, 32), 10, 180);
        doc.text(cargoAtual.substring(32, cargoAtual.length), 10, 185);
    } else {
        doc.text(cargoAtual, 10, 180);
    }

    doc.setFontSize(16);
    doc.setFontStyle('bold')
    doc.text('Cargo Exercido:', 115, 170);

    doc.setFontSize(14);
    doc.setFontStyle('normal')
    if (cargoExercido.length >= 32) {
        doc.text(cargoExercido.substring(0, 32), 115, 180);
        doc.text(cargoExercido.substring(32, cargoExercido.length), 115, 185);
    } else {
        doc.text(cargoExercido, 115, 180);
    }

    doc.setFontSize(16);
    doc.setFontStyle('bold')
    doc.text('Idiomas:', 10, 200);

    doc.setFontSize(14);
    doc.setFontStyle('normal')
    doc.text(idiomas, 10, 210);

    doc.setFontSize(16);
    doc.setFontStyle('bold')
    doc.text('Formação Acadêmica:', 115, 200);

    doc.setFontSize(14);
    doc.setFontStyle('normal')
    if (formacaoAcademica.length >= 32) {
        doc.text(formacaoAcademica.substring(0, 32), 115, 210);
        doc.text(formacaoAcademica.substring(32, formacaoAcademica.length), 115, 215);
    } else {
        doc.text(formacaoAcademica, 115, 210);
    }

    doc.setFontSize(16);
    doc.setFontStyle('bold')
    doc.text('Cursos:', 10, 240);

    doc.setFontSize(14);
    doc.setFontStyle('normal')
    doc.text(cursos, 10, 250);

    // abre janela para salvar pdf
    doc.save('Currículo - ' + nome + '.pdf');
}