type Unit = {
    id: number;
    name: string;
};

type Gender = {
    id: number;
    name: string;
};

type CharacterDetail = {
    character_id: number;
    unit: Unit;
    gender: Gender;
};

type Character = {
    name: string;
    type_id: number;
    detail: CharacterDetail;
};

type Props = {
    characters: Character[];
};

export default function Welcome({ characters }: Props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>名前</th>
                    <th>ユニット</th>
                    <th>性別</th>
                </tr>
            </thead>
            <tbody>
                {characters.map((character) => {
                    return (
                        <tr>
                            <td>{character.name}</td>
                            <td>{character.detail.unit.name}</td>
                            <td>{character.detail.gender.name}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
