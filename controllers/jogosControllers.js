// controllers/jogosController.js
import * as jogosModel from "../model/jogosModel.js";

// GET /jogos
export const getJogos = (req, res) => {
    const Jogos = jogosModel.getJogos();
    res.status(200).json(Jogos);
};

// GET /jogos/:id
export const getJogosPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const Jogos = jogosModel.getJogosPorId(id);
    if (Jogos) {
        res.status(200).json(Jogos);
    } else {
        res.status(404).json({ mensagem: `Jogo ${id} não encontrado` });
    }
};

// GET /jogos/fabricante/:fabricante
export const getJogosPorFabricante = (req, res) => {
    const fabricante = req.params.fabricante.trim();
    const Jogos = jogosModel.getJogosPorFabricante(fabricante);
    if (Jogos.length > 0) {
        res.status(200).json(Jogos);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado do fabricante ${fabricante}`
        });
    }
};

// GET /jogos/ano/:ano
export const getJogosPorAno = (req, res) => {
    const ano = parseInt(req.params.ano);
    const Jogos = jogosModel.getJogosPorAno(ano);
    if (Jogos.length > 0) {
        res.status(200).json(Jogos);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado no ano ${ano}`
        });
    }
};

// POST /jogos
export const postJogo = (req, res) => {
    const { nomejogo, fabricante, idademin, anolanc } = req.body;

    if (!nomejogo || !fabricante || idademin === undefined || anolanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nomejogo, fabricante, idademin, anolanc) são obrigatórios.'
        });
    }

    const novoJogo = jogosModel.criar({ nomejogo, fabricante, idademin, anolanc });
    res.status(201).json(novoJogo);
};

// PUT /jogos/:id
export const putJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const { nomejogo, fabricante, idademin, anolanc } = req.body;

    if (!nomejogo || !fabricante || idademin === undefined || anolanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nomejogo, fabricante, idademin, anolanc) devem ser informados.'
        });
    }

    const jogoAtualizado = jogosModel.atualizar(id, { nomejogo, fabricante, idademin, anolanc });

    if (!jogoAtualizado) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para atualização.`
        });
    }

    res.status(200).json(jogoAtualizado);
};

// DELETE /jogos/:id
export const deleteJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const jogoRemovido = jogosModel.remover(id);

    if (!jogoRemovido) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para exclusão.`
        });
    }

    res.status(200).json({
        mensagem: `Jogo com ID ${id} removido com sucesso.`,
        jogo: jogoRemovido
    });
};