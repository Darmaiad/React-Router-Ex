class PlayerModel {
    constructor(playerData) {

        this.id = playerData.id;
        this.number = playerData.number;
        this.name = playerData.name;
        this.position = playerData.position;
    }

    returnObject = () => {
        return ({
            id: this.id,
            number: this.number,
            name: this.name,
            position: this.position,
        });
    }
}

export default PlayerModel;