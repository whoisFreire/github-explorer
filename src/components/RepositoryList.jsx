import { RepositoryItem } from "./Repositoryitem";

const repository = {
    name: 'unform',
    description: 'Form in React',
    link: 'https://github.com'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>

        </section>
    )
}
