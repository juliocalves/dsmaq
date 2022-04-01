-- CREATE DATABASE DSMAQ;
-- GO;

USE DSMAQ;
GO

-- CREATE TABLE [dbo].[grupo_fornecedor](
--     [id][int] IDENTITY (1,1) NOT NULL,
--     [descricao][varchar](20) NOT NULL,

--     CONSTRAINT [PK_GRUPO_FORNECEDOR] PRIMARY KEY CLUSTERED([id]),
-- );
-- GO

CREATE TABLE [dbo].[user](
    [id][int] IDENTITY (1,1) NOT NULL,
    [user_name][varchar](50) NOT NULL,
    [password][varchar](30) NULL,
    CONSTRAINT [PK_USER] PRIMARY KEY CLUSTERED([id]),
    
);
GO


-- CREATE TABLE [dbo].[fornecedor](
--     [id][int] IDENTITY (1,1) NOT NULL,
--     [razao_social][varchar](50) NOT NULL,
--     [nome_fantasia][varchar](30) NULL,
--     [rua][varchar](50) NOT NULL,
--     [numero][varchar](5) NOT NULL,
--     [bairro][varchar](30) NOT NULL,
--     [municipio][varchar](30) NOT NULL,
--     [estador][char](2) NOT NULL,
--     [cep][varchar](10) NOT NULL,
--     [complemento][varchar](30) NULL,
--     [inscricao_estadual][varchar](20) NOT NULL,
--     [cnpj][varchar](20) NOT NULL,
--     [contato][varchar](20) NULL,
--     [email][varchar](50) NULL,
--     [observacoes][varchar](200) NULL,
--     [id_grupo][int] NOT NULL,

--     CONSTRAINT [PK_FORNECEDOR] PRIMARY KEY CLUSTERED([id]),
--     CONSTRAINT [FK_GRUPO_FORNECEDOR] FOREIGN KEY ([id_grupo]) REFERENCES [dbo].[grupo_fornecedor]([id]),
-- );
-- GO

-- CREATE TABLE [dbo].[telefone_fornecedor](
--     [id][int] IDENTITY (1,1) NOT NULL,
--     [id_fornecedor][int] NOT NULL,
--     [numero][varchar](15) NOT NULL,

--     CONSTRAINT [PK_TELEFONE_FORNECEDOR] PRIMARY KEY CLUSTERED([id]),
--     CONSTRAINT [FK_FORNECEDOR] FOREIGN KEY ([id_fornecedor]) REFERENCES [dbo].[fornecedor]([id]),
-- );
-- GO

-- CREATE TABLE [dbo].[forma_pagamento](
--     [id][int] IDENTITY (1,1) NOT NULL,
--     [descricao][varchar](20) NOT NULL,

--     CONSTRAINT [PK_FORMA_PAGAMENTO] PRIMARY KEY CLUSTERED([id])
-- );
-- GO

-- CREATE TABLE [dbo].[conta_a_pagar](
--     [id][int] IDENTITY (1,1) NOT NULL,
--     [data_emissao][date] NOT NULL,
--     [id_fornecedor][int] NOT NULL,
--     [documento][varchar](30) NULL,
--     [data_vencimento][date] NOT NULL,
--     [valor_parcerla][float] NOT NULL,
--     [numero_parcela][int] NOT NULL,
--     [id_forma_pagamento][int] NOT NULL,

--     CONSTRAINT [PK_CONTA_A_PAGAR] PRIMARY KEY CLUSTERED([id]),
--     CONSTRAINT [FK_FORNECEDOR_CONTA] FOREIGN KEY ([id_fornecedor]) REFERENCES fornecedor([id]),
--     CONSTRAINT [FK_FORMA_PAGAMENTO] FOREIGN KEY ([id_forma_pagamento]) REFERENCES [dbo].[forma_pagamento]([id]),

-- );
-- GO

-- CREATE TABLE [dbo].[pagamento](
--     [id][int] IDENTITY (1,1) NOT NULL,
--     [id_conta_a_pagar][int] NOT NULL,
--     [data_baixa][date] NOT NULL,
--     [valor_desconto][float] NULL,
--     [valor_despesas][float] NULL,
--     [valor_juros][float] NULL,
--     [valor_pago][float] NOT NULL,


--     CONSTRAINT [PK_PAGAMENTO] PRIMARY KEY CLUSTERED([id]),
--     CONSTRAINT [FK_CONTA_A_PAGAR] FOREIGN KEY ([id_conta_a_pagar]) REFERENCES [dbo].[conta_a_pagar]([id]),
-- );
-- GO