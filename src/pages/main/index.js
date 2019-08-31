import React, { Component, Fragment } from 'react';

export default class Main extends Component {
    state = {
        repositoryInput: ''
    };

    render() {
        return(
            <Fragment>
                <form onSubmit={this.handleAddRepository}>
                    <input 
                        placeholder="usuário/repositório"
                        value={this.state.repositoryInput}
                        onChange={e => this.setState({repositoryInput: e.target.value})}
                    />
                    <button type="submit">Adicionar</button>
                </form>

                <ul>
                    <li>
                        <p>
                            <strong>faceboo/react</strong> (descrição)
                        </p>
                        <a href="#">Acessar</a>
                    </li>
                </ul>
            </Fragment>
        );
    }
}
