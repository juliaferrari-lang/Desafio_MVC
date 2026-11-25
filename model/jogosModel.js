// models/jogosModel.js

const jogos = [
    { idjogo: 1, nomejogo: "GTA VI", fabricante: "RockStar", idademin: 18, anolanc: 2026 },
    { idjogo: 2, nomejogo: "GTA V", fabricante: "RockStar", idademin: 18, anolanc: 2026 },
    { idjogo: 3, nomejogo: "GTA IV", fabricante: "RockStar", idademin: 18, anolanc: 2026 },
    { idjogo: 4, nomejogo: "FORTNITE", fabricante: "EpicGames", idademin: 14, anolanc: 2014 },
    { idjogo: 5, nomejogo: "Minecraft", fabricante: "Mojang", idademin: 10, anolanc: 2011 }
];

// GET listar todos
export const getJogos = () => {
    return jogos;
};

// GET listar por id
export const getJogosPorId = (id) => {
    return jogos.find(jogo => jogo.idjogo === id);
};

// GET listar por fabricante
export const getJogosPorFabricante = (fabricante) => {
    return jogos.filter(
        jogo => jogo.fabricante.toLowerCase() === fabricante.toLowerCase()
    );
};

// GET listar por ano de lançamento
export const getJogosPorAno = (ano) => {
    return jogos.filter(jogo => jogo.anolanc === ano);
};

// Cria e insere um novo jogo no array
export const criar = ({ nomejogo, fabricante, idademin, anolanc }) => {
    const novoJogo = {
        idjogo: jogos.length + 1,
        nomejogo,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    };
    jogos.push(novoJogo);
    return novoJogo;
};

// Atualiza um jogo existente pelo ID
export const atualizar = (id, { nomejogo, fabricante, idademin, anolanc }) => {
    const index = jogos.findIndex(jogo => jogo.idjogo === id);
    if (index === -1) return null;

    jogos[index] = {
        idjogo: id,
        nomejogo,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    };
    return jogos[index];
};

// Remove um jogo pelo ID e retorna o item excluído
export const remover = (id) => {
    const index = jogos.findIndex(jogo => jogo.idjogo === id);
    if (index === -1) return null;

    const [jogoRemovido] = jogos.splice(index, 1);
    return jogoRemovido;
};