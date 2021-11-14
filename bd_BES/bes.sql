-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14-Nov-2021 às 22:17
-- Versão do servidor: 10.4.19-MariaDB
-- versão do PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bes`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `codigo_validacao`
--

CREATE TABLE `codigo_validacao` (
  `id` int(11) NOT NULL,
  `fk_tipo_acesso` int(11) NOT NULL,
  `pin` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `codigo_validacao`
--

INSERT INTO `codigo_validacao` (`id`, `fk_tipo_acesso`, `pin`) VALUES
(1, 1, '111111'),
(2, 2, '222222');

-- --------------------------------------------------------

--
-- Estrutura da tabela `perguntas_frequentes`
--

CREATE TABLE `perguntas_frequentes` (
  `id` int(11) NOT NULL,
  `pergunta` varchar(200) NOT NULL,
  `resposta` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `perguntas_frequentes`
--

INSERT INTO `perguntas_frequentes` (`id`, `pergunta`, `resposta`) VALUES
(1, 'O CURSO TE PREPARA PARA O QUÊ?', 'O profissional formado no curso de Engenharia de Software na PUCPR está apto a gerenciar projetos e equipes de alta performance em TI, com habilidade para promover mudanças nas organizações por meio da utilização de modelos e normas nacionais e internacionais de qualidade e produtividade.'),
(2, 'Qual o papel do Engenheiro de Software?', 'Engenheiros de Software com uma formação sólida, são determinantes para conceber soluções, gerir equipes e otimizar recursos, gerando propostas inovadoras para um cenário em constante evolução.'),
(3, 'E o mercado para Engenharia de Software?', 'O mercado para profissionais da área da computação está mais quente do que nunca. Segundo pesquisas, existem 14 vagas para cada profissional.'),
(4, 'E a internacionalização?', 'O mercado de tecnologia não possui barreiras. Não há necessidade de revalidação do diploma, e, caso desejado, é possível trabalhar no Brasil recebendo em moeda estrangeira.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_acesso`
--

CREATE TABLE `tipo_acesso` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tipo_acesso`
--

INSERT INTO `tipo_acesso` (`id`, `tipo`) VALUES
(1, 'Aluno'),
(2, 'Professor'),
(3, 'Coordenador'),
(4, 'Administrador');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `tipo_acesso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `tipo_acesso`) VALUES
(6, 'Vinícius Kuchnir', 'vi@vi.com.br', '123456789', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `codigo_validacao`
--
ALTER TABLE `codigo_validacao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tipo_acesso` (`fk_tipo_acesso`);

--
-- Índices para tabela `perguntas_frequentes`
--
ALTER TABLE `perguntas_frequentes`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tipo_acesso`
--
ALTER TABLE `tipo_acesso`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipo_acesso` (`tipo_acesso`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `codigo_validacao`
--
ALTER TABLE `codigo_validacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `perguntas_frequentes`
--
ALTER TABLE `perguntas_frequentes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `tipo_acesso`
--
ALTER TABLE `tipo_acesso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `codigo_validacao`
--
ALTER TABLE `codigo_validacao`
  ADD CONSTRAINT `codigo_validacao_ibfk_1` FOREIGN KEY (`fk_tipo_acesso`) REFERENCES `tipo_acesso` (`id`);

--
-- Limitadores para a tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`tipo_acesso`) REFERENCES `tipo_acesso` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
