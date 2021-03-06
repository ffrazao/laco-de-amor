package com.frazao.lacodeamorrest.modelo.entidade.laco_de_amor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.frazao.lacodeamorrest.modelo.entidade.EntidadeBaseTemId;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity(name = "ProdutoAtributo")
@Table(schema = "laco_de_amor", name = "produto_atributo")
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false, of = "id")
public class ProdutoAtributo extends EntidadeBaseTemId<Integer> {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "nome")
	private String nome;

	public ProdutoAtributo(final Integer id) {
		super(id);
	}

	@Override
	public String toString() {
		return String.format("%s", this.id);
	}

}
