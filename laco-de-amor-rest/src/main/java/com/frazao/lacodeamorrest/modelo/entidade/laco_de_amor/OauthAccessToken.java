package com.frazao.lacodeamorrest.modelo.entidade.laco_de_amor;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity(name = "OauthAccessToken")
@Table(schema = "laco_de_amor", name = "oauth_access_token")
@Data
@NoArgsConstructor
@EqualsAndHashCode

public class OauthAccessToken implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "authentication")
	@Lob
	private byte[] authentication;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "authentication_id")
	private String authenticationId;

	@Column(name = "client_id")
	private String clientId;

	@Column(name = "refresh_token")
	private String refreshToken;

	@Column(name = "token")
	@Lob
	private byte[] token;

	@Column(name = "token_id")
	private String tokenId;

	@Column(name = "user_name")
	private String userName;

	@Override
	public String toString() {
		return String.format("Token = %d", this.getToken());
	}

}
