module.exports = (sequelize, DataTypes) => {
    const Cars = sequelize.define('Cars', {
        id: {type: DataTypes.INTEGER , primaryKey: true, autoIncrement: true},
       name: {type: DataTypes.STRING , allowNull: false},
       rent: {type: DataTypes.INTEGER , allowNull: false},
       size: {type: DataTypes.STRING , allowNull: false},
       img: {type: DataTypes.STRING , allowNull: false},
       createdAt: {type: DataTypes.DATE , allowNull: false},
       updatedAt: {type: DataTypes.DATE , allowNull: false}
    }, {
        tableName: 'cars',
    });
    return Cars;
}