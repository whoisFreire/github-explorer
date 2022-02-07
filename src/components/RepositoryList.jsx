import { useState, useEffect } from 'react';
import { RepositoryItem } from "./Repositoryitem";
import '../styles/repositories.scss'

const repository = {
    name: 'unform',
    description: 'Form in React',
    link: 'https://github.com'
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(()=> {
        fetch('https://api.github.com/users/whoisfreire/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    },[])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {
                    repositories.map((repository) => 
                        <RepositoryItem key={repository.name} repository={repository} />
                    )
                }
            </ul>

        </section>
    )
}
