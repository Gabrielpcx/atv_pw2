CREATE DATABASE atv_pw2;

use atv_pw2; 

create table tbl_produto(
	codigo_produto INT unsigned auto_increment primary key,
    codigo_categoria INT unsigned not null,
    nome_produto VARCHAR(255) not null,
    valor_produto DECIMAL(10,2) not null,
    imagem_produto VARCHAR(500) not null,
    descricao_produto TEXT not null
);

create table tbl_categoria(
	codigo_categoria INT unsigned auto_increment primary key,
    nome_categoria VARCHAR(255) not null,
    observacoes_categoria TEXT not null
);

select * from tbl_produto;

select * from tbl_categoria;

 -- adicionando foreign key --
 ALTER TABLE tbl_produto add constraint fk_tbl_produto_tbl_categoria
 foreign key (codigo_categoria)
 references tbl_categoria (codigo_categoria);
 