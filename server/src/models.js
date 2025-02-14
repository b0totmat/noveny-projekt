import Sequelize from 'sequelize'

const {DataTypes} = Sequelize

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: './database.sqlite'
})

const Plant = sequelize.define('plants', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isPerennial: {
        type: DataTypes.TINYINT
    },
    category: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    }
})

export { sequelize, Plant }
