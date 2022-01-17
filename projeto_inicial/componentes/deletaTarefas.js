const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.classList.add("check-button");
    botaoDeleta.innerHTML = "Deletar";
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;

    const deletar = botaoDeleta.parentElement;

    deletar.remove();
}

export default BotaoDeleta;